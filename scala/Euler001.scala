def sigma(n: Double) = n * (n + 1) / 2


/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

def CAP = 1000.0
def MULT1 = 3.0
def MULT2 = 5.0

@main def main: Unit =
  def cap1 = ((CAP - 1.0) / MULT1).floor
  def cap2 = ((CAP - 1.0) / MULT2).floor
  def capDiff = ((CAP - 1.0) / (MULT1 * MULT2)).floor
  def sum1 = sigma(cap1) * MULT1
  def sum2 = sigma(cap2) * MULT2
  def sumDiff = sigma(capDiff) * MULT1 * MULT2
  def result = sum1 + sum2 - sumDiff
  println("result: " + result)

