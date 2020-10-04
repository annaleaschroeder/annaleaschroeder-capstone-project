/// <reference types="cypress" />

//delete a specific transaction from TransactionList on Transaction Overview Page

context('Transaction Overview Page', () => {
  let transactions = []

  beforeEach(() => {
    cy.fixture('transactions.json').then((data) => {
      transactions.push(...data)

      cy.visit('http://localhost:3000', {
        onBeforeLoad: function (window) {
          window.localStorage.setItem('Transactions', JSON.stringify(data))
        },
      })
    })
  })

  it('delets a specific transaction', () => {
    cy.get('[data-cy=transactionsList] > li').then(($lis) => {
      expect($lis, '3 transactions').to.have.length(3)
      expect($lis.eq(2), 'third transaction')
      cy.get(`[data-cy=transaction-${transactions[2].id}] #delete`).click({
        force: true,
      })
      cy.get('[data-cy=monthlyBudget]').should('contain', '-616,78')
    })
  })
})
