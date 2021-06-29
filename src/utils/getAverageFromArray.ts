export const getAverageFromArray = (arr: number[]) => {
  const numCount = arr.length
  if (numCount === 0) return 0
  const sum = arr.reduce((a, c) => a + c, 0)

  console.log(sum, numCount)

  return sum / numCount
}
