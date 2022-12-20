export default function useGradeFormat(grade) {
  return `${grade.toLocaleString(undefined, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })}%`
}
