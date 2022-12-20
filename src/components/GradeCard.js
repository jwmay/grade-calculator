import React from 'react'
import { Alert, Typography } from '@mui/material'
import useGradeColor from '../hooks/useGradeColor'

export default function GradeCard({ children, grade, title }) {
  return (
    <Alert icon={false} severity={useGradeColor(grade)}>
      <Typography align='center' gutterBottom variant='h5'>
        {title}
      </Typography>
      {children}
    </Alert>
  )
}
