import { createMuiTheme } from '@material-ui/core/styles'
import { teal, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#89cff0',
      main: '#89cff0',
      dark: '#000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#000',
      main: '#89cff0',
      dark: '#000',
      contrastText: '#000',
    },
      openTitle: teal['100'],
      protectedTitle: teal['100'],
      type: 'light'
    }
  })

  export default theme  