describe('DEEP DIVE Landing Page E2E', () => {
  beforeEach(() => {
    // Зміни порт на свій, якщо у тебе не 5173
    cy.visit('http://localhost:5173');
  });

  it('повинен завантажити сторінку та відобразити головний заголовок', () => {
    cy.get('h1').contains('DEEP DIVE');
  });

  it('повинен відкривати мобільне меню при кліку на бургер', () => {
    cy.viewport('iphone-x'); // Емулюємо мобільний екран
    cy.get('#burgerBtn').click();
    cy.get('#mobileMenu').should('have.class', 'active');
  });
});
