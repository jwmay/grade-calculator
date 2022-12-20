export default function useLetterGrade(numGrade) {
  if (numGrade >= 90) return 'A'
  if (numGrade >= 80) return 'B'
  if (numGrade >= 70) return 'C'
  if (numGrade >= 60) return 'D'
  if (numGrade >= 0) return 'F'
}
