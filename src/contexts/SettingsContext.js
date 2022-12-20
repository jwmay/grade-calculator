import React from 'react'
import { SEMESTER_PREDICTION } from '../constants/CalcTypes'

export const SettingsContext = React.createContext({
  settings: {},
  setSetting: () => {},
  setSettings: () => {},
  resetSettings: () => {},
})

export const SettingsContextProvider = ({ children }) => {
  const defaultSettings = {
    activeStep: 0,
    calcType: SEMESTER_PREDICTION,
    darkMode: false,
    grades: [0, 0, 0, 0],
    isDone: false,
    quarterNames: [
      ['first', 'second'],
      ['third', 'fourth'],
    ],
    semester: 0,
    weights: [0.4, 0.4, 0.2, 1.0],
  }

  const [settings, setSettings] = React.useState(defaultSettings)

  const setSetting = (setting, value) =>
    setSettings({ ...settings, [setting]: value })

  const resetSettings = () =>
    setSettings({ ...defaultSettings, darkMode: settings.darkMode }) // preserve darkMode setting when resetting calculator

  const value = React.useMemo(
    () => ({ settings, setSetting, setSettings, resetSettings }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [settings]
  )

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}
