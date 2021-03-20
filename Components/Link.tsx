import React, { ElementType, FC, ReactNode } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import MaterialLink, {
  LinkProps as MaterialLinkProps
} from '@material-ui/core/Link'

type TLink = {
  NextLinkProps: NextLinkProps
  MaterialLinkProps: MaterialLinkProps & { component: ElementType }
  children: ReactNode
  className?: string
}

const Link: FC<TLink> = ({
  className,
  NextLinkProps,
  MaterialLinkProps,
  children
}) => {
  return (
    <div className={className}>
      <NextLink {...NextLinkProps}>
        <MaterialLink {...MaterialLinkProps}>{children}</MaterialLink>
      </NextLink>
    </div>
  )
}

export default Link
