import React from 'react';
import Booking from './Booking';

describe('Booking Component', () => {
  it('filters non-numeric phone chars and validates short phone number', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.mount(<Booking />);

    cy.get('input[placeholder="Name"]').type('Olena');
    cy.get('input[type="tel"]').type('abc+38099').should('have.value', '+38099');

    cy.get('form').submit();
    cy.then(() => {
      expect(alertStub).to.be.calledWith('Please enter a valid phone number.');
    });
  });

  it('submits valid form data and clears inputs on success', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.intercept('POST', '**/api/call', {
      statusCode: 200,
      body: { success: true },
    }).as('sendCall');

    cy.mount(<Booking />);

    cy.get('input[placeholder="Name"]').type('Olena');
    cy.get('input[type="tel"]').type('+380991234567');
    cy.get('form').submit();

    cy.wait('@sendCall').its('request.body').should('deep.equal', {
      name: 'Olena',
      phone: '+380991234567',
    });

    cy.then(() => {
      expect(alertStub).to.be.calledWith(
        'Your request has been successfully submitted! A manager will call you shortly.'
      );
    });
    cy.get('input[placeholder="Name"]').should('have.value', '');
    cy.get('input[type="tel"]').should('have.value', '');
  });

  it('handles server error response gracefully', () => {
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub);

    cy.intercept('POST', '**/api/call', {
      statusCode: 500,
      body: { success: false },
    }).as('sendCallError');

    cy.mount(<Booking />);

    cy.get('input[placeholder="Name"]').type('Olena');
    cy.get('input[type="tel"]').type('+380991234567');
    cy.get('form').submit();

    cy.wait('@sendCallError');
    cy.then(() => {
      expect(alertStub).to.be.calledWith('Sending error. Check the backend terminal.');
    });
  });
});
