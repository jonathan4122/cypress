import testCoreOmf from "../../pages/coreOmf_PO_test";

describe('Administrar preguntas (crear, modificar y borrar) - Core OMF', () => {
    it('Modulo Preguntas Plataforma', () => {
        cy.loginCoreOhmyfi();
        testCoreOmf.openSeccionLateral('preguntas');
        cy.get('#abrirForm-Pregunta').click();
        testCoreOmf.closeAlertSeccion('OK');
        testCoreOmf.textInputFormModal('Pregunta[pregunta]', 'nombreFormPregunta');
        testCoreOmf.textInputFormModal('Pregunta[nombre]', 'nombreCortoFormPregunta');
        cy.get('[name="Pregunta[unica]"]').siblings('label').contains('Recurrente').click();
        cy.get('[name="Pregunta[unica]"]').siblings('label').contains('Sólo una vez').click();
        cy.get('#inputTagPublicacion_chosen').type('tagpreguntatestcypresss{enter}');
        cy.wait(1000);
        cy.get('#formOpciones input').type('Respuesta A{enter}');
        cy.get('#formOpciones input').type('Respuesta B{enter}');
        cy.get('#formodal-botonSubmit').click();
        cy.wait(1500);
        cy.get('.omf_archivar').click();
        cy.wait(1000);
        cy.get('.sweet-confirm').contains('Si, archivar').click();
    });
});