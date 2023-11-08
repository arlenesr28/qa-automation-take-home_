/// <reference types="cypress" />

export function navigateSite() {
    cy.visit("/")
}

export function checkAppRender() {
    cy.get('h2')
    .should('be.visible')
    .should('contain.text', 'QA Automation Cypress Test');
}

export function noEntriesLoaded() {
    cy.get('.list-container')
    .children()
    .should('be.empty')
}

export function addNotes() {
    // Adding 3 notes at the same time
    for (let i = 1; i <= 3; i++) {
        const note = `note-${i}`
        cy.get('#text-input').type(note);
        cy.get('form > button').click();
    }
}

export function checkingNotesAdded() {
    cy.get('.list-container')
    .children()
    .should('not.be.empty')
}

export function deleteNotesAndCheck() {
    // Choosing a random number between 1 and 3 to delete a random note
    var randomNoteId = Math.floor(Math.random() * 3) + 1
    cy.get(`ul > :nth-child(${randomNoteId}) > button`)
    .click()

    // Checking if the random note was deleted
    cy.get('.note-container')
    .children()
    .should('not.contain.text', `note-${randomNoteId}`)
}