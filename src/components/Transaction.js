import React from 'react'
//import styled from 'styled-components/macro'

export default function Transaction({ timestamp, newTransaction }) {
  return (
    <section>
      <p>{timestamp + ' ' + newTransaction}</p>
    </section>
  )
}
