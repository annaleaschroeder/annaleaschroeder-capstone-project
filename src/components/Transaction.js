import React from 'react'

export default function Transaction({ createdAt, newTransaction }) {
  return (
    <section>
      <p>{createdAt + ' ' + newTransaction}</p>
    </section>
  )
}
