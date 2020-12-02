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
    const [minLength, maxLength] = allowedLength.split('-').map(Number)

    const occurences = password.split('').filter((char) => char === character)
      .length

    return occurences <= maxLength && occurences >= minLength
  })

  console.log(validPasswords.length)
})()
