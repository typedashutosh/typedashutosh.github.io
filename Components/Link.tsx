import React, { ElementType, FC, ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import MaterialLink, {
  LinkProps as MaterialLinkProps
} from '@material-ui/core/Link'

type TLink = {
  NextLinkProps: NextLinkProps
  MaterialLinkProps: MaterialLinkProps & { component: ElementType }
  children: ReactNode
}

const Link: FC<TLink> = ({ NextLinkProps, MaterialLinkProps, children }) => {
  return (
    <NextLink {...NextLinkProps}>
      <MaterialLink {...MaterialLinkProps}>{children}</MaterialLink>
    </NextLink>
  )
}

export default Link
