const seqA = 'ABBAZDC'; //ABAD
const seqB = 'BACBAD';

const lcs = (a, b, m, n) => {
  if(m === 0 || n === 0) {
    return 0
  }
  else if (a[m-1] === b[n-1]) {
    return 1 + lcs(a, b, n-1, m-1)
  } else {
    return Math.max(lcs(a, b, n-1, m), lcs(a, b, n, m-1) )
  }
}

const max = lcs(seqA, seqB, seqA.length, seqB.length);

console.log(max)

function printLcs(seqA, seqB, seqAIdx=0, seqBIdx=0) {
  let results = [];
  for(let i = seqAIdx; i < seqA.length - 1; i++) {
    const result = []
    const indexLetter = seqB.indexOf(seqA[i], seqBIdx);
    if(indexLetter !== -1) {
      result.push(seqA[i], printLcs(seqA, seqB, i+1, indexLetter + 1));
    }
    results.push(result)
  }
  const longest = findLongest(results);
  return longest.join('')
}

function findLongest(array) {
  let max = [];
  for(let i = 0; i < array.length; i++) {
    const candidate = array[i];
    if(candidate.length > max.length) {
      max = candidate
    }
  }
  return max
}

console.log(printLcs(seqA, seqB))
