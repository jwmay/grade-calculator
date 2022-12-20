import React from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'
import { QUARTER_NUMBERS } from '../constants/QuarterNumbers'
import GradeCard from './GradeCard'
import GradeInput from './GradeInput'
import GradeSlider from './GradeSlider'
import useGradeCalc from '../hooks/useGradeCalc'
import useGradeFormat from '../hooks/useGradeFormat'
import useLetterGrade from '../hooks/useLetterGrade'

const Grade = ({ score }) => useGradeFormat(score)

export default function SemesterGradePrediction() {
  const { settings } = React.useContext(SettingsContext)

  const semesterGrade = useGradeCalc()
  const letterGrade = useLetterGrade(semesterGrade)

  const quarterNames = settings.quarterNames[settings.semester]

  return (
    <Box>
      <Typography align='center' gutterBottom variant='h4'>
        Semester Grade Prediction
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <GradeCard grade={semesterGrade} title='Semester Grade'>
            <Typography align='center' gutterBottom variant='body1'>
              This is your predicted semester grade
            </Typography>
            <Stack direction='row' sx={{ justifyContent: 'space-around' }}>
              <Typography align='center' gutterBottom variant='h4'>
                <Grade score={semesterGrade} />
              </Typography>
              <Typography align='center' gutterBottom variant='h3'>
                {letterGrade}
              </Typography>
            </Stack>
          </GradeCard>
        </Grid>
        <Grid item xs={12}>
          <GradeCard grade={settings.grades[2]} title='Semester Final Exam'>
            <Typography gutterBottom variant='body1'>
              Use the slider to change your possible semester final exam score
            </Typography>
            <Typography align='center' gutterBottom variant='h5'>
              {settings.grades[2]}%
            </Typography>
            <GradeSlider term={2} />
          </GradeCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <GradeCard
            grade={settings.grades[0]}
            title={`${QUARTER_NUMBERS[quarterNames[0]]} Quarter`}
          >
            <GradeInput
              autoFocus={false}
              fullWidth={true}
              showHelp={false}
              showText={false}
              size='small'
              term={0}
              variant='standard'
            />
          </GradeCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <GradeCard
            grade={settings.grades[1]}
            title={`${QUARTER_NUMBERS[quarterNames[1]]} Quarter`}
          >
            <GradeInput
              autoFocus={false}
              fullWidth={true}
              showHelp={false}
              showText={false}
              size='small'
              term={1}
              variant='standard'
            />
          </GradeCard>
        </Grid>
      </Grid>
    </Box>
  )
}
