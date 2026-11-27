import React from 'react';
import Faq from './Faq';

describe('Faq Component', () => {
  it('renders all 7 FAQ items and expands answer on click', () => {
    cy.mount(<Faq />);

    cy.get('section#faq').should('exist');
    cy.contains('h2', 'Want to know more?').should('be.visible');
    cy.get('details').should('have.length', 7);

    cy.contains('Everyone! We have coaches who train children').should('not.be.visible');
    cy.contains('Who can join the diving club?').click();
    cy.contains('Everyone! We have coaches who train children').should('be.visible');
  });
});
