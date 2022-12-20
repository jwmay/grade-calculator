import React from 'react'
import { Slider, Tooltip } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'
import useMinGrade from '../hooks/useMinGrade'

export default function GradeSlider({ term }) {
  const { settings, setSetting } = React.useContext(SettingsContext)

  const minGrade = useMinGrade(term)

  const handleChange = (event, newGrade) => {
    updateGrades(newGrade)
  }

  const updateGrades = (newGrade) => {
    const newGrades = [...settings.grades]
    newGrades[term] = newGrade ? parseFloat(newGrade) : 0
    setSetting('grades', newGrades)
  }

  const ValueLabelComponent = ({ children, value }) => (
    <Tooltip enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  )

  React.useEffect(() => {
    updateGrades(minGrade)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minGrade])

  return (
    <Slider
      valueLabelDisplay='auto'
      slots={{
        valueLabel: ValueLabelComponent,
      }}
      aria-label='semester final exam grade'
      defaultValue={minGrade}
      onChange={handleChange}
      value={settings.grades[term] || minGrade}
    />
  )
}
