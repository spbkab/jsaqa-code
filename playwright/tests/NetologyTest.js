const { email, password } = require('./user.js');

describe('Успешная авторизация', () => {
  it('Должна успешно авторизоваться', () => {
    cy.visit('https://netology.ru/');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/profile');
    cy.get('h2').should('contain', 'Ваш профиль');
  });
});
describe('Неуспешная авторизация', () => {
  it('Должна показать ошибку при вводе неверных данных', () => {
    cy.visit('https://netology.ru/');
    cy.get('input[name="email"]').type('invalid_email@example.com');
    cy.get('input[name="password"]').type('invalid_password');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'Неверный email или пароль');
  });
});