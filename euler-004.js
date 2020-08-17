'use es6';

const NUM_DIGITS = 3;

const isPalindrome = num => {
  const str = String(num);
  for (var i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 - i]) return false;
  }
  return true;
};

const factorsWithDigits = (num, digits) =>  {
  for (var i = 10 ** (digits - 1); i < 10 ** digits; i++) {
    const j = num / i;
    if (j % 1 == 0 && j >= 10 ** (digits - 1) && j < 10 ** digits) return true;
  }
  return false;
};

const largestPalindromeMultipleOfDigits = (digits) => {
  const largestVal = (10 ** (digits) - 1) ** 2;

  for (var i = largestVal; i >= 10 ** (digits - 1); i--) {
    if (isPalindrome(i) && factorsWithDigits(i, digits)) {
      return i;
    }
  }

  return 0;
};

const currentPalindrome = largestPalindromeMultipleOfDigits(NUM_DIGITS);
console.log(`solution: ${currentPalindrome}`);