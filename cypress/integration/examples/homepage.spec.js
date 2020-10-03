/// <reference types="cypress" />

const mockData = [
  {
    timestamp: '1.10.2020',
    value: '2133.99',
    type: 'income',
    notes: 'Gehalt September',
    tag: 'Earnings',
    id: '15d7ce40-9442-46b9-95ae-bad6e0096cfb',
  },
  {
    timestamp: '5.10.2020',
    value: '600.89',
    type: 'spending',
    notes: 'Miete Oktober',
    tag: 'FixedCosts',
    id: '15d7ce40-9442-46b9-95ae-bad6e0096asd',
  },
  {
    timestamp: '3.10.2020',
    value: '15.89',
    type: 'spending',
    notes: 'Lunch mit Lara und Janina',
    tag: 'leisure',
    id: '15d7ce40-9442-46b9-95ae-bad6e0096poi',
  },
]

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('has the right App title', () => cy.title().should('contain', 'Budgetly'))

  it('has a header with the rigth page title', () => {
    cy.get('header').should('contain', 'Budget Overview')
  })

  it('contains the lable Monthly Balance', () => {
    cy.get('div').should('contain', 'Monthly Balance')
  })

  it('renders the value dynamically by adding all transaction values', () => {
    mockData.forEach((data) => {
      cy.get('div').should('contain', '1517,21 €')
    })
  })
})
