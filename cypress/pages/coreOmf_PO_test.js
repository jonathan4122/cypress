class testCoreOmf {
    elements = {
        textContains: () => cy,
        nameLogin: () => cy.get('#login-divLogin [name="usuario"]'),
        passLogin: () => cy.get('#login-divLogin [name="clave"]'),
        menuLateral: () => cy.get('#side-menu > li'),
        winAlertSeccion: () => cy.get('.sweet-alert').should('has.class', 'visible'),
        functionCy: () => cy,
    }
    selectField(objContains, optionSelect, valueSelect){
        this.elements.functionCy().get(objContains).select(optionSelect).should('have.value', valueSelect);
    }
    textContains(textgetcont, infoContains){
        this.elements.textContains().get(textgetcont).contains(infoContains)
    }
    textInputFormModal(nameInput, envToType){
        this.elements.functionCy().get('[name="' + nameInput + '"]').type(Cypress.env(envToType))
    }
    openSeccionLateral(seccionToOpen){
        this.elements.menuLateral()
            .children('a[href="' + seccionToOpen + '"]').click();
    }
    closeAlertSeccion(contentButton){
        this.elements.winAlertSeccion()
            .children('button')
            .contains(contentButton)
            .click();
    }
    typeNameLogin(usernameLogin){
        this.elements.nameLogin().type(usernameLogin)
    }
    typePassLogin(userpassLogin){
        this.elements.passLogin().type(userpassLogin)
    }
    buttonSubmitForm(idFormSend){
        this.elements.functionCy().get(idFormSend).click()
    }
    clickMultiple(idContent){
        this.elements.functionCy().get(idContent).click({ multiple: true })
    }
}
module.exports = new testCoreOmf();