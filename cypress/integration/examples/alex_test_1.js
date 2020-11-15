import * as data from '../../fixtures/urls.json';

describe('Alex spec example 1', () => {
    const baseUrl = data.baseUrl;

    it('Alex test example 1', () => {
        cy.visit(baseUrl);
    });
});