import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders logo, navigation links and toggles mobile menu', () => {
    cy.mount(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    cy.contains('h3', 'DEEP DIVE').should('exist');
    cy.contains('a', 'About').should('have.attr', 'href', '/#about');
    cy.contains('a', 'Pricing').should('have.attr', 'href', '/#pricing');
    cy.get('a[href="/login"]').should('exist');
    cy.get('a[href="/cart"]').should('exist');

    cy.get('section div').eq(0).click({ force: true });
    cy.wrap(document.body).should('have.css', 'overflow', 'hidden');

    cy.contains('×').click({ force: true });
    cy.wrap(document.body).should('have.css', 'overflow', 'visible');
  });
});
