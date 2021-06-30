export const getAverageFromArray = (arr: number[]) => {
  const numCount = arr.length
  if (numCount === 0) return 0
  const sum = arr.reduce((a, c) => a + c, 0)
  const average = sum / numCount

  return Math.round((average + Number.EPSILON) * 10) / 10
}
