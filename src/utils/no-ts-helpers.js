export function compose(...functions) {
  return (initialValue) =>
    functions.reduceRight((allPreviousFunctions, currentFunction) => currentFunction(allPreviousFunctions), initialValue)
}

export function pipe(...functions) {
  return (initialValue) =>
    functions.reduce((allPreviousFunctions, currentFunction) => currentFunction(allPreviousFunctions), initialValue)
}

