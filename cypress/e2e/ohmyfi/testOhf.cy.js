describe('Primer prueba de portales', () => {
    beforeEach(() => {
        cy.visit("https://ohmyfi.com/clientes");
    })
    it('relleno de formulario!', () => {
        cy.get('.gLFyf').type('hola') // Click on buttonaaaaaaa
    })
})
