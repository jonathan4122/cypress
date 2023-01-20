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
        // cy.get('#g-recaptcha *> iframe').then(($el) => {
        //     Cypress.dom.isVisible($el) // true
        // });
        
        // POST https://recaptchaenterprise.googleapis.com/v1/projects/605044276/assessments?key=6Lc0PhAkAAAAAJwRS7Knc0ag3GXjP9bl_3Fi-I-R
        
        // clave sitio: 6Lc0PhAkAAAAAJwRS7Knc0ag3GXjP9bl_3Fi-I-R
        // clave secreta: 6Lc0PhAkAAAAAAnWSrGfxW5xJkp7LDcdxm-97cMN

        cy.get("body").then($body => {
            if ($body.find("#g-recaptcha *> iframe").length > 0) {   
                cy.get('iframe')
                    .first()
                    .then((recaptchaIframe) => {
                        const body = recaptchaIframe.contents()
                        cy.wrap(body).find('.recaptcha-checkbox-border').should('be.visible').click()
                    })
            }else{
                cy.log('no esta');
            }
        });
        testCoreOmf.typeNameLogin(Cypress.env('UserCoreDemo'));
        testCoreOmf.typePassLogin(Cypress.env('PassUserCoreDemo'));
            cy.window().then(win => {
            win.document
                .querySelector("iframe[src*='recaptcha']")
                .contentDocument.getElementById("recaptcha-token")
                .click();
            });
        cy.wait(3000);
        testCoreOmf.buttonSubmitForm('#boton_se_fue button[type="submit"]');
    });
});