
function check2(n) {
  if (n === 1) return true;
  if (n & 1) return false;
  return check2(n >> 1);
}

module.exports = exports = check2;
