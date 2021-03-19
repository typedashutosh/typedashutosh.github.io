import { AppProps } from 'next/app'
import { FC } from 'react'
import { createMuiTheme, ThemeOptions, ThemeProvider } from '@material-ui/core'
import '../Styles/global.css'
import Header from '../Components/Header'

type T_app = AppProps

const themeOptions: ThemeOptions = {}

const _app: FC<T_app> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={createMuiTheme(themeOptions)}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default _app
