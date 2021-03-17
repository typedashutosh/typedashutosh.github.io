import { AppProps } from 'next/app'
import { FC } from 'react'
import Meta from '../Components/Meta'

type T_app = AppProps

const _app: FC<T_app> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Meta title='Homepage' />
      <Component {...pageProps} />
    </>
  )
}

export default _app
