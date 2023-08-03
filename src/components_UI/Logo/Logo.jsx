import React from 'react'

import styles from './Logo.module.scss';

export function Logo({children, className, ...rest}) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}
