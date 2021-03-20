import { FC } from 'react'
import Link from '../Components/Link'

type Tindex = {}

const index: FC<Tindex> = (): JSX.Element => {
  return (
    <>
      <Link
        NextLinkProps={{ href: '/' }}
        MaterialLinkProps={{ component: 'h1', variant: 'h5' }}
      >
        Link demo
      </Link>
    </>
  )
}

export default index
