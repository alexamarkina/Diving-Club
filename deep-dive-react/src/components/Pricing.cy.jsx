import React from 'react';
import Pricing from './Pricing';

describe('Pricing Component', () => {
  const mockTickets = [
    {
      id: '1',
      title: 'Solo',
      price: 240,
      description1: 'One-on-one coaching with a pro trainer.',
      description2: 'Duration: 2 hours',
      description3: 'Access to unique dive locations',
    },
    {
      id: '2',
      title: 'Group',
      price: 399,
      description1: 'Small group dives.',
      description2: 'Duration: 4 hours',
      description3: 'Access to unique dive locations',
    },
  ];

  it('displays loading state and then renders fetched tickets', () => {
    cy.intercept('GET', '**/api/tickets', {
      delay: 150,
      statusCode: 200,
      body: mockTickets,
    }).as('getTickets');

    cy.mount(<Pricing />);

    cy.contains('h2', 'Loading tickets...').should('be.visible');
    cy.wait('@getTickets');

    cy.contains('h3', 'Solo').should('be.visible');
    cy.contains('$240').should('be.visible');
    cy.contains('h3', 'Group').should('be.visible');
  });

  it('displays error message when tickets fetch fails', () => {
    cy.intercept('GET', '**/api/tickets', {
      statusCode: 500,
      body: { message: 'Server error' },
    }).as('getTicketsError');

    cy.mount(<Pricing />);
    cy.wait('@getTicketsError');

    cy.contains('h2', 'Error:').should('be.visible');
  });

  it('opens tour modal, submits booking successfully and closes modal', () => {
    cy.intercept('GET', '**/api/tickets', {
      statusCode: 200,
      body: mockTickets,
    }).as('getTickets');

    cy.intercept('POST', '**/api/bookings', {
      statusCode: 201,
      body: { id: 101, title: 'Solo', price: 240 },
    }).as('bookTour');

    cy.mount(<Pricing />);
    cy.wait('@getTickets');

    cy.contains('button', 'Details & Book').first().click({ force: true });
    cy.contains('what people choose').should('be.visible');

    cy.contains('button', 'Want to dive!').click({ force: true });
    cy.wait('@bookTour').its('request.body').should('deep.equal', {
      title: 'Solo',
      price: 240,
    });

    cy.contains('button', 'Booked! ✓').should('be.visible');

    cy.contains('button', '✖').click({ force: true });
    cy.contains('what people choose').should('not.exist');
  });
});
