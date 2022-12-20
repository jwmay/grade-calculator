import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { NumericFormat } from 'react-number-format'
import { SettingsContext } from '../contexts/SettingsContext'

export default function GradeInput({
  showHelp = true,
  showText = true,
  term,
  ...props
}) {
  const { settings, setSetting } = React.useContext(SettingsContext)

  const handleChange = (event) => {
    const newGrade = event.target.value
    const newGrades = [...settings.grades]
    newGrades[term] = newGrade ? parseFloat(newGrade) : 0
    setSetting('grades', newGrades)
  }

  const quarterName = settings.quarterNames[settings.semester][term]

  return (
    <Box>
      {showText && (
        <Typography gutterBottom>
          Enter your {quarterName} quarter grade
        </Typography>
      )}
      <NumericFormat
        allowNegative={false}
        autoFocus={true}
        customInput={TextField}
        decimalScale={2}
        id='grade'
        helperText={
          showHelp
            ? term === 0
              ? 'You can find this value on Infinite Campus'
              : 'This is your current grade on Infinite Campus'
            : null
        }
        label='Grade'
        name='grade'
        onChange={handleChange}
        suffix='%'
        value={settings.grades[term] || ''}
        {...props}
      />
    </Box>
  )
}
