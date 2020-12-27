import {els} from '../support/app-data';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    
    cy.get(els.username_input)
        .click()
        .clear()
        .type(username);
    cy.get(els.username_input)
        .should('have.value', username);
    
    cy.get(els.password_input)
        .click()
        .clear()
        .type(password);
    cy.get(els.password_input)
        .should('have.value', password);
       
    cy.get(els.login_button)
       .click();
});

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
