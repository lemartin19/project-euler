import scala.math._

/**
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

def NUM = 600851475143.0

def smallestPrimeFactorGreaterThan(num: Double, min: Double): Double = {
  if (min > sqrt(num)) {
    num
  } else {
    if (num % min == 0) min else smallestPrimeFactorGreaterThan(num, min + 2)
  }
}

def smallestPrimeFactor(num: Double): Double = {
  if (num % 2 == 0) 2 else smallestPrimeFactorGreaterThan(num, 3)
}

def largestPrimeFactor(num: Double): Double = {
  val smallestFactor = smallestPrimeFactor(num)
  if (smallestFactor == num) num else largestPrimeFactor(num / smallestFactor)
}

/**
Find smallest prime factor, divide by that factor and then find the smallest prime factor of the corres
*/
@main def main: Unit =
  val result = largestPrimeFactor(NUM)
  println("result: " + result)
