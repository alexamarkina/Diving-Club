import React from 'react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders title, subtitle and CTA links correctly', () => {
    cy.mount(<Hero />);

    cy.get('section#hero').should('exist');
    cy.contains('h1', 'DEEP DIVE').should('be.visible');
    cy.contains('Discover the beauty of the underwater world with us').should('be.visible');

    cy.get('a[href="#booking"] img[alt="Book a dive"]').should('exist');
    cy.get('a[href="#about"] img[alt="Learn more"]').should('exist');
  });
});
