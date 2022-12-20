import React from 'react'
import { SettingsContext } from '../contexts/SettingsContext'

export default function useGradeCalc() {
  const { settings } = React.useContext(SettingsContext)

  const grades = settings.grades
  const weights = settings.weights

  const semesterGrade = grades.reduce(
    (totalGrade, currentGrade, term) =>
      totalGrade + currentGrade * weights[term],
    0
  )

  return Math.round(semesterGrade * 100) / 100
}
