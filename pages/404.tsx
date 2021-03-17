import React, { FC } from 'react'
import Link from 'next/link'

type T404 = {}

const _404: FC<T404> = (): JSX.Element => {
  return (
    <div>
      404 NOT FOUND
      <br />
      <Link href='/'>Go to home page...</Link>
    </div>
  )
}

export default _404
