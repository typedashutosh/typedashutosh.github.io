import '../styles/global.sass'

import { AppProps } from 'next/app'
import { FC, ReactElement } from 'react'

import Layout from '../components/Layout'
import dynamic from 'next/dynamic'
// const DynamicComponentWithNoSSR = dynamic(() => import('../scripts/main.js'), { ssr: false })

interface I_app extends AppProps {}

const _app: FC<I_app> = ({ Component, pageProps }): ReactElement => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default _app
