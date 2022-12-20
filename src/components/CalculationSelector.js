import React from 'react'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'
import { SEMESTER_GOAL, SEMESTER_PREDICTION } from '../constants/CalcTypes'

export default function CalculationSelector() {
  const { settings, setSetting } = React.useContext(SettingsContext)

  const [calcType, setCalcType] = React.useState(settings.calcType)

  const handleChange = (event, calcType) => {
    if (calcType !== null) {
      setCalcType(calcType)
      setSetting('calcType', calcType)
    }
  }

  return (
    <Box>
      <ToggleButtonGroup
        exclusive
        fullWidth
        onChange={handleChange}
        orientation='vertical'
        value={calcType}
      >
        <ToggleButton
          value={SEMESTER_PREDICTION}
          aria-label='Semester Prediction'
        >
          <Typography variant='h6'>Predict Your Semester Grade</Typography>
        </ToggleButton>
        <ToggleButton value={SEMESTER_GOAL} aria-label='Semester Goal'>
          <Typography variant='h6'>Reach a Semester Grade Goal</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
