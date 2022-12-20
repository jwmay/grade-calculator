import React from 'react'
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'

export default function SemesterSelector() {
  const { settings, setSetting } = React.useContext(SettingsContext)

  const [semester, setSemester] = React.useState(settings.semester)

  const handleChange = (event, semester) => {
    if (semester !== null) {
      setSemester(semester)
      setSetting('semester', semester)
    }
  }

  return (
    <Box>
      <ToggleButtonGroup
        exclusive
        fullWidth
        onChange={handleChange}
        orientation='vertical'
        value={semester}
      >
        <ToggleButton value={0} aria-label='Semester 1'>
          <Typography variant='h6'>Semester 1</Typography>
        </ToggleButton>
        <ToggleButton value={1} aria-label='Semester 2'>
          <Typography variant='h6'>Semester 2</Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
