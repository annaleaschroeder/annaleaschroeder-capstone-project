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
    tag: 'leisure',
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

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('Transactions', JSON.stringify(mockData))
      },
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
