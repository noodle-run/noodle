describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display hello world', () => {
    cy.get('h1').contains('Hello World');
  });
});
