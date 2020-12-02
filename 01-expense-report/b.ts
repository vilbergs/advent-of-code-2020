/**
 * In your expense report, what is the product of the three entries that sum to 2020?
 *
 * Note: Not proud of this one...
 */

(async () => {
  const input = await Deno.readTextFile("01-expense-report/input.txt");
  const normalizedInput = input.split("\n").map(Number);

  let result: number[] = [];
  for (let a of normalizedInput) {
    for (let b of normalizedInput) {
      for (let c of normalizedInput) {
        if (a + b + c === 2020) {
          result = [a, b, c];
          break;
        }
      }
    }
  }
})();
