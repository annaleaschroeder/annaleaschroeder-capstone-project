import React from 'react'

export default function Transaction({ createdAt, newTransaction, type }) {
  const style = {
    color: type === 'spending' ? 'red' : 'green',
  }

  const value = `${type === 'spending' ? '-' : '+'}${newTransaction}`

  const formattedvalue = value
    .replace(/^0*/, '')
    .replace(/^,/, '0,')
    .replace('.', ',')

  return <section style={style}>{createdAt + ' ' + formattedvalue}</section>
}
