export default function useGradeColor(grade) {
  if (grade >= 80) {
    return 'success'
  } else if (grade >= 70) {
    return 'info'
  } else if (grade >= 60) {
    return 'warning'
  } else {
    return 'error'
  }
}
