function palindrome(mots){
const inverse = mots.split('').reverse().join('');
if (mots === inverse) {
    return true;
  } else {
    return false;
  }
}

const hello = "samira"
console.log(palindrome(hello));


