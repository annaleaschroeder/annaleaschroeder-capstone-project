/// <reference types="cypress" />

const mockData = [
  {
    timestamp: '5.10.2020',
    value: 600.89,
    type: 'spending',
    notes: 'Miete Oktober',
    tag: 'FixedCosts',
    id: '15d7ce40-9442-46b9-95ae-bad6e0096asd',
  },
  {
    timestamp: '3.10.2020',
    value: 15.89,
    type: 'spending',
    notes: 'Lunch mit Lara und Janina',
    tag: 'Leisure',
    id: '15d7ce40-9442-46b9-95ae-bad6e0096poi',
  },
  {
    timestamp: '1.10.2020',
    value: 2133.99,
    type: 'income',
    notes: 'Gehalt September',
    tag: 'Earnings',
    id: '15d7ce40-9442-46b9-95ae-bad6e0096cfb',
  },
]

//delete a specific transaction from TransactionList on Transaction Overview Page

context('Transaction Overview Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('Transactions', JSON.stringify(mockData))
      },
    })
  })

  it('delets a specific transaction', () => {
    cy.get('[data-cy=transactionsList] > li').then(($lis) => {
      expect($lis, '3 transactions').to.have.length(3)
      expect($lis.eq(2), 'third transaction')
      cy.get(`[data-cy=transaction-${mockData[2].id}] #delete`).click({
        force: true,
      })
      cy.get('[data-cy=monthlyBudget]').should('contain', '-616,78')
    })
  })
})
