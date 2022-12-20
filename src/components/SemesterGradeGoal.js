import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'
// import { QUARTER_NUMBERS } from '../constants/QuarterNumbers'
import GradeCard from './GradeCard'
// import GradeInput from './GradeInput'
import GradeSlider from './GradeSlider'
// import useGradeFormat from '../hooks/useGradeFormat'

// const Grade = ({ score }) => useGradeFormat(score)

export default function SemesterGradeGoal() {
  const { settings } = React.useContext(SettingsContext)

  // const quarterNames = settings.quarterNames[settings.semester]

  return (
    <Box>
      <Typography align='center' gutterBottom variant='h4'>
        Semester Grade Goal
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GradeCard grade={settings.grades[3]} title='Semester Grade Goal'>
            <Typography align='center' gutterBottom variant='body1'>
              Use the slider to change your semester grade goal
            </Typography>
            <Stack>
              <Typography align='center' gutterBottom variant='h4'>
                {settings.grades[3]}%
              </Typography>
              <Typography align='center' gutterBottom variant='h3'></Typography>
            </Stack>
            <GradeSlider term={3} />
          </GradeCard>
        </Grid>
      </Grid>
    </Box>
  )
}
