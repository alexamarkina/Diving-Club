import React from 'react';
import About from './About';

describe('About Component', () => {
  it('renders club description and founder quote', () => {
    cy.mount(<About />);

    cy.get('section#about').should('exist');
    cy.contains('h2', 'About us').should('be.visible');
    cy.contains('UNDER Water is a diving club for all people').should('be.visible');
    cy.contains('Sasha').should('be.visible');
    cy.get('img[alt="Sasha founder of UNDER"]').should('exist');
  });
});
