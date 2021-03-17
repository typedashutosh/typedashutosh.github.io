import { FC } from 'react'
import Head from 'next/head'

type TMeta = {
  title: string
  favicon?: string
}

const Meta: FC<TMeta> = ({ title, favicon }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='shortcut icon' href={favicon ? favicon : './favicon.svg'} type='image/svg' />
    </Head>
  )
}

export default Meta
