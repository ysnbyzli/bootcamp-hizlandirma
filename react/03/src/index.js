import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  const type = props.type || 'default'
  const stil =
    type === 'primary'
      ? styles.primary
      : type === 'dashed'
      ? styles.dashed
      : type === 'text'
      ? styles.text
      : type === 'link'
      ? styles.link
      : styles.default

  return (
    <button {...props} className={`${styles.btn} ${stil}`}>
      {props.text}
    </button>
  )
}
