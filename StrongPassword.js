// Hackerrank  - Strong Password
// link: https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true

function minimumNumber(n, password) {
   let count = 4;

  [
    '0123456789',
    'abcdefghijklmnopqrstuvwxyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '!@#$%^&*()-+'
  ].reduce((target, validator, index) => {
    Array.from(password).some(item =>
      validator.includes(item) ? count-- : null
    );

    return target;
  }, []);

  return Math.max(count, 6 - n);
}
