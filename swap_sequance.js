const phrase = 'rocks is node';

const mirrorPhrase = phrase => {
  const swap = (str) => {
    return str.split('').reverse().join('')
  }
  const swapWords = (str) => {
    return str.split(' ').map(it => swap(it)).join(' ')
  }
  return swapWords(swap(phrase));
}

console.log(mirrorPhrase(phrase))
