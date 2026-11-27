import React from 'react';
import Coaches from './Coaches';

describe('Coaches Component', () => {
  it('renders coaches list and triggers horizontal scroll on arrow clicks', () => {
    cy.mount(<Coaches />);

    cy.get('section#coach').should('exist');
    cy.contains('h2', 'Coaches').should('be.visible');
    cy.contains('Micle').should('be.visible');
    cy.contains('James Gordon').should('be.visible');
    cy.get('h3').should('have.length', 6);

    cy.get('img[alt="next cards"]').parent().click();
    cy.get('img[alt="previous cards"]').parent().click();
  });
});
