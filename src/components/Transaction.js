import React from 'react'

export default function Transaction({ createdAt, newTransaction, type }) {
  const style = {
    color: type === 'spending' ? 'red' : 'green',
  }

  const formatCurrency = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(newTransaction)
  const value = `${type === 'spending' ? '-' : '+'}${formatCurrency}`

  // const formattedValue = value
  //   .replace(/^0*/, '')
  //   .replace(/^,/, '0,')
  //   .replace('.', ',')

  return <section style={style}>{createdAt + ' ' + value}</section>
}
