# Bug 1 

##  auth.js middleware - "authUser" function:

One issue with this function is that it assumes that the token is a valid JWT that can be decoded using the jwt.decode method. However, this function does not verify the signature of the token, so it is possible for an attacker to create a fake token with an arbitrary payload and bypass the authentication check. To ensure that the token is genuine, the function should use jwt.verify instead of jwt.decode, and provide a secret key that was used to sign the token.

Another potential issue is that the function does not validate the payload of the token to ensure that it contains the expected properties and values. It is possible for an attacker to create a token with a payload that is missing required properties or contains invalid values, and trick the function into granting access to unauthorized resources. To prevent this, the function should check the payload for validity and reject any tokens that do not meet the criteria.

Finally, the function does not handle errors that may occur during the decoding or verification process. If an error occurs, the function simply sets the status code of the error to 401 and passes it to the next middleware function, without providing any details about the cause of the error. This could make it difficult to debug authentication issues or distinguish between different types of errors. To improve the error handling, the function should log any errors that occur, provide a more descriptive error message, and consider returning a more appropriate HTTP status code depending on the type of error (e.g., 400 for a bad request, 403 for forbidden, etc.).


# Bug 2

## users.js Models - "static async getAll(username, password)" function

The function requires username and password as parameters but neither is used in function body. Think you can just remove those parameters since db.query(select * from users) should retrieve all the 
information we want.

# Bug 3

## users.js Models - "static async get(username)" function

Everything seems ok until we check to see if there is a user with that username in the database. If there is, right now we create a new ExpressError but do initiate it. I think we should add
a "throw" in front of the "new expressError". 

# Bug 4

## auth.js Routes - in post("/register") route

We create a new token for the user with "const token = createTokenForUser(username, password)". We require that function from the helpers folder/createToken. However, there is no function called createTokenForUser in that file, it is simply called "createToken". 

# Bug 5

## auth.js Routes - in post("/login") route

We create a new token for the user with "const token = createTokenForUser(username, user.admin)". We require that function from the helpers folder/createToken. However, there is no function called createTokenForUser in that file, it is simply called "createToken". 

# Bug 6

## users.js Routes - in patch("/:username)

We require authUser, requireLogin and requireAdmin as parameters. If requirements state only same user being updated or admin can update a file, maybe we can get rid of the authUser requirement since if they are logged in they should already be an authorized user. If user is logged in we should be able to retrieve the "req.curr_username" and make sure that it matches "req.params.username" so that they are able to make changes to their file. 

# Bug 7

## users.js Routes - in delete("/:username)

Since it is an async function, we should add "await" before we try "User.delete(req.params.username). 

