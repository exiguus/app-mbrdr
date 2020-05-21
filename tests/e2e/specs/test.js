// https://docs.cypress.io/api/introduction/api.html

describe('App Title', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'mbrdr');
  });
});
