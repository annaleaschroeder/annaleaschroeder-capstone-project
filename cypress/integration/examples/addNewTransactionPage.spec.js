/// <reference types="cypress" />

context('Add new Transaction Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/add-new-transaction')
  })

  it('contains the headline Add new Transaction in Header', () => {
    cy.get('header').should('contain', 'Add new Transaction')
  })

  it('contains a toggle switch that outputs the value spending per default', () => {
    cy.get('[data-cy=toggle]').should('contain', 'Spending')
  })

  it('changes the value onClick() to income ', () => {
    cy.get('[data-cy=toggle]').click().should('contain', 'Income')
  })

  it('calls an error message if no value is entered', () => {
    cy.get('#value').focus().blur()
    cy.get('#errorValue').should('contain', 'Required')
  })

  it('calls an error message when an invalid value is entered', () => {
    cy.get('#value').type('77,90 Euro').blur()
    cy.get('#errorValue').should('contain', 'Invalid format')
  })

  it('demonstrates the happy path of user-input to create transactions, filling local storage and the transaction list on homescreen', () => {
    cy.get('#value').type('89,99').should('have.value', '89,99')
    cy.get('#dropdown').should('contain', '-- Choose a tag --')
    cy.get('#dropdown').select('FixedCosts')
    cy.get('#notes').type('Heizkosten-Nachzahlung')
    cy.get('#saveBtn').click()

    // user adds another transaction
    cy.get('a').click()
    cy.get('[data-cy=toggle]').click().should('contain', 'Income')
    cy.get('#value').type('2389,74').should('have.value', '2389,74')
    cy.get('#dropdown').should('contain', '-- Choose a tag --')
    cy.get('#dropdown').select('FixedCosts')
    cy.get('#notes').type('Gehalt')
    cy.get('#saveBtn').click()
  })
})
