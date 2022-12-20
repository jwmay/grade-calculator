import React from 'react'
import {
  Button,
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'
// import CalculationSelector from './CalculationSelector'
import GradeInput from './GradeInput'
import SemesterSelector from './SemesterSelector'

export default function SetupStepper() {
  const { settings, setSetting } = React.useContext(SettingsContext)

  const steps = [
    {
      component: <SemesterSelector />,
      disabled: false,
      label: 'Select a semester',
    },
    {
      component: <GradeInput term={0} />,
      disabled: settings.grades[0] === 0,
      label: `Enter ${
        settings.quarterNames[settings.semester][0]
      } quarter grade`,
    },
    {
      component: <GradeInput term={1} />,
      disabled: settings.grades[1] === 0,
      label: `Enter ${
        settings.quarterNames[settings.semester][1]
      } quarter grade`,
    },
    // {
    //   component: <CalculationSelector />,
    //   disabled: false,
    //   label: 'Select calculation type',
    // },
  ]

  const handleFinish = () => {
    handleNext()
    setSetting('isDone', true)
  }

  const handleNext = () => {
    setSetting('activeStep', settings.activeStep + 1)
  }

  const handleBack = () => {
    setSetting('activeStep', settings.activeStep - 1)
  }

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={settings.activeStep} orientation={'vertical'}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Box sx={{ mb: 4, mt: 2 }}>{step.component}</Box>
              <Box sx={{ mb: 4, mt: 2 }}>
                <Button
                  variant='contained'
                  disabled={step.disabled}
                  onClick={
                    index === steps.length - 1 ? handleFinish : handleNext
                  }
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
