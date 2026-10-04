import React from 'react';
import Hero from './Hero';

describe(' Component', () => {
  it('рендерить заголовок та підзаголовок', () => {
    cy.mount();
    cy.get('h1').contains('DEEP DIVE');
    cy.get('.hero-subtitle').should('exist');
  });
});
