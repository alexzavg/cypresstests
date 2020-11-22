describe('Template', () => {
    before(() => {
        cy.clearCookies();
    });

    after(() => {
        cy.clearCookies();
    });

    it('does everything', () => {
        cy.visit('/');
    });
});