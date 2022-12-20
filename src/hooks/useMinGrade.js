import React from 'react'
import { SettingsContext } from '../contexts/SettingsContext'

export default function useMinGrade(term) {
  const { settings } = React.useContext(SettingsContext)

  const grades = settings.grades
  const weights = settings.weights

  const terms = new Set([0, 1, 2])
  terms.delete(term) // remove the term we are solving for to exclude it from the calc loop

  // SE = ( 60 - T0W * T0G - T1W * T1G ) / T2W
  let minGrade = 60
  terms.forEach((term) => {
    minGrade -= grades[term] * weights[term]
  })
  minGrade = minGrade / weights[term]

  minGrade = minGrade >= 50 ? minGrade : 50

  return Math.ceil(minGrade)
}
