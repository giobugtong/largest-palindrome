/* 
    Prosperna hands on test
    Deadline: 28 Mar 2022
    Largest Palindrome Product
    source: https://projecteuler.net/problem=4
*/

/* 
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.
*/

const reverseNumber = (number) => {
    let result;
    let array = [...number.toString()]; // Converts number to string, then spreads each character to an array
    array.reverse(); // Reverses the order of the array
    const string = array.join(""); // Converts the reversed array back to a string
    result = parseInt(string); // Converts the string to a number
    return result;
}

const isPalindrome = (number) => {
    // Returns true if the reversed number is equal to the original number -- a palindrome.
    const reversed = reverseNumber(number);
    if (reversed === number) return true;
    return false;
}

const getLargestPalindromeProduct = (firstNum, secondNum) => {
    // This function gets all possible products of two numbers, checks for palindromes, then stores them in an array.
    let palindromes = [];
    let largest;
    for (let i = firstNum; i > 0; i--) {
        for (let j = secondNum; j > 0; j--) {
            let product = i * j;
            if (isPalindrome(product)) {
                palindromes.push(product);
            }
        }
    }
    largest = Math.max(...palindromes); // Returns the largest of the stored palindromes
    return largest;
}

console.log(getLargestPalindromeProduct(99, 99));
// output: 9009 -- largest for 2-digit numbers

console.log(getLargestPalindromeProduct(999, 999));
// output: 906609 -- largest for 3-digit numbers

console.log(getLargestPalindromeProduct(69,420));
// output: 27872 -- works for different numbers