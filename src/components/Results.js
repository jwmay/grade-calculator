import React from 'react'
// import { Box, Tab, Tabs } from '@mui/material'
// import { SettingsContext } from '../contexts/SettingsContext'
// import { SEMESTER_GOAL, SEMESTER_PREDICTION } from '../constants/CalcTypes'
// import SemesterGradeGoal from './SemesterGradeGoal'
import SemesterGradePrediction from './SemesterGradePrediction'

// const TabPanel = ({ children, index, value }) => (
//   <Box hidden={value !== index}>
//     {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//   </Box>
// )

export default function Results() {
  // const { settings, setSetting } = React.useContext(SettingsContext)

  // const [value, setValue] = React.useState(settings.calcType)

  // const handleChange = (event, newValue) => {
  //   setSetting('calcType', newValue)
  //   setValue(newValue)
  // }

  // return (
  //   <Box sx={{ width: '100%' }}>
  //     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //       <Tabs
  //         centered={true}
  //         onChange={handleChange}
  //         value={value}
  //         variant='fullWidth'
  //       >
  //         <Tab
  //           label='Predict Your Semester Grade'
  //           value={SEMESTER_PREDICTION}
  //         />
  //         <Tab label='Reach a Semester Grade Goal' value={SEMESTER_GOAL} />
  //       </Tabs>
  //     </Box>
  //     <TabPanel value={value} index={SEMESTER_PREDICTION}>
  //       <SemesterGradePrediction />
  //     </TabPanel>
  //     <TabPanel value={value} index={SEMESTER_GOAL}>
  //       <SemesterGradeGoal />
  //     </TabPanel>
  //   </Box>
  // )

  return <SemesterGradePrediction />
}
