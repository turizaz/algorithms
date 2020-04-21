const a = 12313;
const b = 322;

function lessCommonDividerMinus(a, b) {
  if(a === b) {
    return a
  }
  if(a > b) {
    return lessCommonDividerMinus(b, a-b);
  } else {
    return lessCommonDividerMinus(a, b-a);
  }
}
console.log(lessCommonDividerMinus(a,b))

function lessCommonDividerDivide(a, b) {
  if(b === 0) {
    return a
  }
  return lessCommonDividerDivide(b, a%b);
}

console.log(lessCommonDividerDivide(a,b))
