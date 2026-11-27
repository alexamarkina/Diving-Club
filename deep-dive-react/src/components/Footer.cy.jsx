import React from 'react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders logo, contact details and copyright', () => {
    cy.mount(<Footer />);

    cy.get('section#footer').should('exist');
    cy.contains('h3', 'DEEP DIVE').should('be.visible');
    cy.contains('info@underwater.com').should('be.visible');
    cy.contains('© Маркіна Олександра Русланівна , 2025').should('be.visible');
  });
});
