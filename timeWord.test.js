const {timeToWords} = require('/timeToWord.js');

describe('timeToWords', () => {
  test('returns "midnight" for "12:00am"', () => {
    expect(timeToWords('12:00am')).toBe('midnight');
  });

  test('returns "noon" for "12:00pm"', () => {
    expect(timeToWords('12:00pm')).toBe('noon');
  });

  test('returns "one o\'clock am" for "1:00am"', () => {
    expect(timeToWords('1:00am')).toBe('one o\'clock am');
  });

  test('returns "two fifteen pm" for "2:15pm"', () => {
    expect(timeToWords('2:15pm')).toBe('two fifteen pm');
  });

  test('returns "eleven forty five am" for "11:45am"', () => {
    expect(timeToWords('11:45am')).toBe('eleven forty five am');
  });

  test('returns "three thirty five pm" for "3:35pm"', () => {
    expect(timeToWords('3:35pm')).toBe('three thirty five pm');
  });

  test('returns "eight forty nine am" for "8:49am"', () => {
    expect(timeToWords('8:49am')).toBe('eight forty nine am');
  });
});
