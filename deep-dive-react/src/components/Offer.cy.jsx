import React from 'react';
import Offer from './Offer';

describe('Offer Component', () => {
  it('renders section heading and all 5 offer cards', () => {
    cy.mount(<Offer />);

    cy.get('section#offer').should('exist');
    cy.contains('h2', 'What do we offer?').should('be.visible');
    cy.get('h3').should('have.length', 5);
    cy.contains('h3', 'Amazing experience').should('be.visible');
    cy.contains('h3', 'Boat trips').should('be.visible');
    cy.contains('h3', 'Photography').should('be.visible');
  });
});
