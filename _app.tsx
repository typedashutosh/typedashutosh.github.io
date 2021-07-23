import React, { FC, ReactElement, useEffect } from 'react'
import { AppProps } from 'next/app'
import '../sass/globals.css'
import Layout from '../components/Layout'

const _app: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
	//- Tailwind Dark Theme
	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage['theme'] === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}

		// Whenever the user explicitly chooses light mode
		localStorage['theme'] = 'light'

		// Whenever the user explicitly chooses dark mode
		localStorage['theme'] = 'dark'

		// Whenever the user explicitly chooses to respect the OS preference
		localStorage.removeItem('theme')
	}, [])

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default _app
