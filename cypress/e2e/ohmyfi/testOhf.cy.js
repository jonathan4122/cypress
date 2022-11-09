describe('Primer prueba de portales', () => {
    beforeEach(() => {
        cy.visit("https://google.com");
    })
    it('relleno de formulario!', () => {
        cy.get('.lnXdpd').click() // Click on button
    })
})
