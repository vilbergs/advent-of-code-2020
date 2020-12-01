(async () => {
  const input = await Deno.readTextFile('01-expense-report/input.txt')
  const normalizedInput = input.split('\n').map(Number)

  const expenseTuple = normalizedInput.reduce((potentialNumbers, currentNumber) => {
    // Base case, If we already have our numbers we just keep going with it.
    // Note: Reduce is not optimal here since it would be great to just break at this point
    if (potentialNumbers.length === 2) {

      const tupleSum = potentialNumbers[0] + potentialNumbers[1]
        if (tupleSum === 2020) {
          return potentialNumbers
        }

    }
    
    // Check if current number adds up to any the rest
    // return current number and matched number if sum is 2020
    const [ match ] = potentialNumbers.filter((number) => currentNumber + number === 2020)

    if (match) {
      return [match, currentNumber]
    }

    return [...potentialNumbers, currentNumber]
  }, [0, 0])

  console.log(expenseTuple[0] * expenseTuple[1])
})()