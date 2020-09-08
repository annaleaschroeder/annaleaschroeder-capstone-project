import React from 'react'

export default function Transaction({ createdAt, newTransaction, type }) {
  const style = {
    color: type === 'spending' ? 'red' : 'green',
  }

  const value = `${type === 'spending' ? '-' : '+'}${newTransaction}`

  return <section style={style}>{createdAt + ' ' + value}</section>
}
