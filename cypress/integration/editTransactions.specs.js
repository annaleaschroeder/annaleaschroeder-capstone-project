/// <reference types="cypress" />

context('Edit transaction', () => {
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

  it('edits a specific transaction', () => {
    cy.get('[data-cy=transactionsList] > li').then(($lis) => {
      expect($lis, '3 transactions').to.have.length(3)
      expect($lis.eq(2), 'third transaction')
    })

    cy.get(`[data-cy=transaction-${transactions[1].id}] #edit`).click()
    cy.get('#value').should('have.value', '15,89')
    cy.get('#dropdown').should('have.value', 'Leisure')
    cy.get('#notes').should('have.value', 'Lunch mit Lara und Janina')
    cy.get('#value')
      .type('{del}{selectall}{backspace}')
      .type('19,32')
      .should('have.value', '19,32')
    cy.get('#notes')
      .type(', danach Kaffee')
      .should('have.value', 'Lunch mit Lara und Janina, danach Kaffee')
    cy.get('#saveBtn').click()
    cy.get('[data-cy=monthlyBudget]').should('contain', '1.513,78')
  })
})
