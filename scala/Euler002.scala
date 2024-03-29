/**
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

def MAX = 4000000

def shouldAddNum(num: Int): Boolean = num % 2 == 0

def sumMaxFib(val1: Int, val2: Int, max: Int): Int = {
  val addToSum = if (shouldAddNum(val1)) val1 else 0
  if (val2 > max) addToSum else addToSum + sumMaxFib(val2, val1 + val2, max)
}

@main def main: Unit =
  val firstFib = 1
  val secondFib = 2
  val result = sumMaxFib(firstFib, secondFib, MAX)
  println("result: " + result)
