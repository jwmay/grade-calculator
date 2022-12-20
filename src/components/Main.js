import React from 'react'
import { Box, Container } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'
import Header from './Header'
import Results from './Results'
import SetupStepper from './SetupStepper'

export default function Main() {
  const { settings } = React.useContext(SettingsContext)

  return (
    <Box>
      <Header />
      <Container maxWidth='sm' sx={{ pt: 4 }}>
        {settings.isDone ? <Results /> : <SetupStepper />}
      </Container>
    </Box>
  )
}
