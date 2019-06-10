// Code your solution here!

function printString(myString) {
  console.log(myString.charAt(0))
  if (myString.length === 1) {
    return myString
  } else {
    printString(myString.slice(1, myString.length))
  }
}

function reverseString(string) {
  if (string.length < 1) {
    return string
  } else {
    return string[string.length - 1] + reverseString([...string.slice(0, string.length-1)])
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  } else if (string.charAt(0) !== string.charAt(string.length - 1)) {
    return false
  } else {
    return isPalindrome(string.slice(1, string.length-1))
  }
}

function addUpTo(arr, i) {
  if (i === 0){
    return arr[i]
  } else {
    return arr[i] + addUpTo(arr, i - 1)
  }
}

function maxOf(arr) {
  if (arr.length === 1) {
    return arr[0]
  } else {
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
      return maxOf([...arr.slice(0, arr.length - 2), arr[arr.length - 1]])
    } else {
      return maxOf([...arr.slice(0,arr.length - 1)])
    }
  }
}

function includesNumber(arr, n){
  if (arr.length === 1) {
    return arr[0] === n ? true : false
  } else {
    if (arr[0] === n) {
      return true
    } else {
      return includesNumber(arr.slice(1), n)
    }
  }
}
