import React from 'react'

export default function Transaction({ createdAt, newTransaction }) {
  return <section>{createdAt + ' ' + newTransaction}</section>
}
