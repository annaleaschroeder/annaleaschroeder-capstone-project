/// <reference types="cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.fixture('transactions.json').then((data) => {
      cy.visit('http://localhost:3000', {
        onBeforeLoad: function (window) {
          window.localStorage.setItem('Transactions', JSON.stringify(data))
        },
      })
    })
  })

  it('has the right App title', () => cy.title().should('contain', 'Budgetly'))

  it('has a header with the rigth page title', () => {
    cy.get('header').should('contain', 'Budget Overview')
  })

  it('contains the styled headline Monthly Balance', () => {
    cy.get('[data-cy=balanceHeadline]').should('contain', 'Monthly Balance')
  })

  it('renders the value dynamically by adding all transaction values', () => {
    cy.get('[data-cy=monthlyBudget]').should('contain', '1.517,21')
  })

  it('renders the transacion list', () => {
    cy.get('ul')
  })

  it('.click() - on the Add-Button', () => {
    cy.get('a').click()
    cy.url().should('contain', '/add-new-transaction')
    cy.get('header').should('contain', 'Add new Transaction')
  })
})
