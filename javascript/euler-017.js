const ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];
const tens = [
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
];

const tensWords = () =>
  tens.reduce(
    (words, tenDigit) =>
      words.concat(ones.map((oneDigit) => `${tenDigit}${oneDigit}`)),
    teens
  );

const countHundreds = () => {
  const hundreds = ones
    .filter((oneDigit) => !!oneDigit)
    .map((oneDigit) => `${oneDigit}hundred`);
  const tens = tensWords();
  return (
    hundreds.reduce(
      (outerCount, hundredsDigit) =>
        outerCount +
        tens.reduce(
          (innerCount, tensDigit) =>
            innerCount + tensDigit.length + 3 + hundredsDigit.length,
          hundredsDigit.length
        ),
      0
    ) + 'one thousand'.length
  );
};

//  TODO: this is wrong but i don't really like this problem
/**
 * Correct answer: 21124
 * Current answer: 20397
 */
const result = countHundreds();
console.log(`solution: ${result}`);
