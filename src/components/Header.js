import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material'
import ModeButton from './ModeButton'
import ResetButton from './ResetButton'

export default function Header() {
  return (
    <AppBar position='static'>
      <Container maxWidth='sm'>
        <Toolbar disableGutters>
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            Grade Calculator
          </Typography>
          <Stack direction='row' spacing={2}>
            <ModeButton />
            <ResetButton />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
