/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

export {};

declare global {
    namespace Cypress {
        interface Chainable {
            login: typeof login,
            login1: typeof login1
        }
    }
}
const login1 = (validuser1: string, validpass1: string) => {
    cy.session(validuser1, () => {
        cy.visit('/');
        cy.get("input[name=validuser1]").type(validuser1);
        cy.get("input[name=validpass1]").type(validpass1);
        cy.get("button").click();
        cy.url().should('include', '/dashboard');
    },{
        cacheAcrossSpecs: true
    });
}
const login = (user_id: string, password: string) => {
    cy.session(user_id, () => {
        cy.visit('/');
        cy.get("input[name=user_id]").type(user_id);
        cy.get("input[name=password]").type(password);
        cy.get("button").click();
        cy.url().should('include', '/dashboard');
    },{
        cacheAcrossSpecs: true
    });
}

Cypress.Commands.addAll({
    login,
})