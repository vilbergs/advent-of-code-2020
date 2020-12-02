/**
 * How many passwords are valid according to their policies?
 
 */

;(async () => {
  const input = await Deno.readTextFile('02-password-checker/input.txt')

  // Going with array in case there are duplicate rules
  const normalizedInput = input
    .split('\n')
    .map((passwordWithRule) => passwordWithRule.split(': '))

  const validPasswords = normalizedInput.filter(([rule, password]) => {
    // This parsing is mostly for convenience, may not be the most optimal
    const [allowedLength, character] = rule.split(' ')
    const [firstPos, secondPos] = allowedLength
      .split('-')
      .map((pos) => (Number(pos) > 0 ? Number(pos) - 1 : Number(pos))) // 0 Indexing input positions

    const passArray = password.split('')

    if (
      passArray[firstPos] === character &&
      passArray[secondPos] !== character
    ) {
      return true
    }

    if (
      passArray[firstPos] !== character &&
      passArray[secondPos] === character
    ) {
      return true
    }

    return false
  })

  console.log(validPasswords.length)
})()
