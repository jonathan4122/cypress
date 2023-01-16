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
import testCoreOmf from "../pages/coreOmf_PO_test";

Cypress.Commands.add("loginCoreOhmyfi", () => {
    cy.window().then(win => {
        cy.visit(Cypress.env('UrlCoreDemo'));
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });
        testCoreOmf.typeNameLogin(Cypress.env('UserCoreDemo'));
        testCoreOmf.typePassLogin(Cypress.env('PassUserCoreDemo'));
        cy.wait(3000);
        testCoreOmf.buttonSubmitForm('#boton_se_fue button[type="submit"]');
    });
});