describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title', () => {
    cy.get('h1').contains('Noodle - Student productivity platform.');
  });
});
