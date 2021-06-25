import '../sass/global.sass'
import { AppProps } from 'next/app'
import { FC, ReactElement, useEffect } from 'react'
import Layout from '../components/Layout'

interface I_app extends AppProps {}

const _app: FC<I_app> = ({ Component, pageProps }): ReactElement => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default _app
