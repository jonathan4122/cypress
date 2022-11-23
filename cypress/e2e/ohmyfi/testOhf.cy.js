describe('Test Login Plataforma', () => {
    beforeEach(() => {
        cy.visit("https://ohmyfi.com/clientes");
    })
    it('relleno de formulario!', () => {
        cy.get('input[name="usuario"]').type('hola') // Click on buttonaaaaaaa
        cy.get('input[name="clave"]').type('111111') // Click on buttonaaaaaaa
    })
})
