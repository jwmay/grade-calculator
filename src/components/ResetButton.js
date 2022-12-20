import React from 'react'
import { Button } from '@mui/material'
import { SettingsContext } from '../contexts/SettingsContext'

export default function ResetButton() {
  const { settings, resetSettings } = React.useContext(SettingsContext)

  const handleClick = () => {
    resetSettings()
  }

  return (
    <>
      {settings.isDone ? (
        <Button color='inherit' onClick={handleClick} variant='outlined'>
          Reset
        </Button>
      ) : null}
    </>
  )
}
