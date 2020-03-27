module.exports = function parse(string) {
  if (typeof string !== 'string') {
    return '';
  }

  const parsed = Date.parse(string);

  if (Number.isNaN(parsed)) {
    return '';
  }

  return new Date(parsed).toISOString();
};
