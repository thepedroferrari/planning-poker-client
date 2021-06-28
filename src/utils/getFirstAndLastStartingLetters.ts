export const getFirstAndLastStartingLetters = (s: string) => {
  const words = s.split(" ")
  const firstLetter = words[0].charAt(0)
  const lastLetter = words[words.length - 1].charAt(0)

  return `${firstLetter}${lastLetter}`.toUpperCase()
}
