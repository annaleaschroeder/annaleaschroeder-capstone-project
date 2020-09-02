import React from 'react'
//import styled from 'styled-components/macro'

export default function Transaction({ createdAt, newTransaction }) {
  return (
    <section>
      <p>{createdAt + ' ' + newTransaction}</p>
    </section>
  )
}
