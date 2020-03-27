const parse = require('../src/parse');

describe('splitsecond', () => {
  it('not a string', () => {
    const timestamp = 34;
    const newTimestamp = parse(timestamp);

    expect(newTimestamp).toEqual('');
  });

  it('invalid string', () => {
    const timestamp = 'hello';
    const newTimestamp = parse(timestamp);

    expect(newTimestamp).toEqual('');
  });

  it('valid string', () => {
    const timestamp = '03/26/2020 UTC';
    const newTimestamp = parse(timestamp);

    expect(newTimestamp).toEqual('2020-03-26T00:00:00.000Z');
  });
});
