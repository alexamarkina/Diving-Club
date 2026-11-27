import React from 'react';
import Reviews from './Reviews';

describe('Reviews Component', () => {
  it('renders member reviews and external link', () => {
    cy.mount(<Reviews />);

    cy.get('section#reviews').should('exist');
    cy.contains('h2', 'What do our club members think?').should('be.visible');
    cy.contains('h3', 'Kali Soy').should('be.visible');
    cy.contains('h3', 'Karina').should('be.visible');
    cy.contains('a', 'Read more...').should(
      'have.attr',
      'href',
      'https://www.instagram.com/oleskein/'
    );
  });
});
