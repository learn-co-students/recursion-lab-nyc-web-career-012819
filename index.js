// Code your solution here!

// const myString = 'BE MY WIFE';
// const myString = 'JANEAENAJ';

// Refactoring instruction
// const printString = (string) => {
function printString(string) {
    console.log(string[0]);
    if (string.length > 1) {
        let myNewString = string.substring(1, string.length);
        return printString(myNewString);
    } else {
        return true;
    }
}
// printString(myString);

// Reverse string
// const reverseString = (string) => {
function reverseString(string) {
    console.log(string[string.length - 1]);
    if (string.length > 1) {
        let newString = string.slice(0, -1);
        return string[string.length - 1] + reverseString(newString);
    } else {
        return string;
    }
}
// reverseString(myString);

// Palindrome
// const isPalindrome = (string) => {
function isPalindrome(string) {
    console.log(string);
    if (string.length > 1) {
        let firstStr = string[0];
        let lastStr = string[string.length -1];
        return firstStr === lastStr ? isPalindrome(string.slice(1, -1)) : false;
    } else if (string.length === 1) {
        return true;
    }
}
// isPalindrome(myString) ? console.log('true') : console.log('false');

function addUpTo(array, n) {
    // if (n === 0) {
    //     return array[0];
    // } else {
    //     return array[n] + addUpTo(array, n - 1);
    // }
    return n === 0 ? array[0] : array[n] + addUpTo(array, n - 1);
}

function maxOf(array) {
    // let maxNum = 0;
    if (array.length === 1) {
        return array[0];
    } else {
        return Math.max(array[0], maxOf(array.slice(1)))
        // return Math.max(array.pop(), maxOf(array));
    }
}

function includesNumber(array, element) {
    // return array.includes(element);
    if (array.length === 0) {
        return false;
    } else if (array[0] === element) {
        return true;
    } else {
        return includesNumber(array.slice(1), element);
    }
}
