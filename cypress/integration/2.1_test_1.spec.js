describe('2.1 -> test case #1', function() {

 it('should purchase [Sauce Labs Backpack] as a [standard_user]', function() {

   const creds = {
      username: 'standard_user',
      password: 'secret_sauce'
   }
  
   cy.visit('/index.html');
 
   cy.get('#user-name')
      .click()
      .clear()
      .type(creds.username);

   cy.get('#user-name')
      .should('have.value', creds.username);
 
   cy.get('#password')
      .click()
      .clear()
      .type(creds.password);

   cy.get('#password')
      .should('have.value', creds.password);
   
   cy.get('#login-button')
      .click();

   cy.get('div.inventory_item:nth-child(1) > div.pricebar > button.btn_inventory')
      .click()
      .contains('REMOVE');
  
   cy.get('span.shopping_cart_badge')
      .contains('1');
/*
    cy.get('path').click();
 
    cy.visit('https://www.saucedemo.com/cart.html');
 
    cy.xpath('//a[text()="CHECKOUT"]').click();
 
    cy.visit('https://www.saucedemo.com/checkout-step-one.html');
 
    cy.get('#first-name').click();
 
    cy.get('#first-name').clear().type('test');
 
    cy.get('input[type="text"]:nth-child(2)').click();
 
    cy.get('input[type="text"]:nth-child(2)').clear().type('test');
 
    cy.get('#postal-code').click();
 
    cy.get('#postal-code').clear().type('36000');
 
    cy.get('input.btn_primary').click();
 
    cy.visit('https://www.saucedemo.com/checkout-step-two.html');
 
    cy.xpath('//a[text()="FINISH"]').click();
 
    cy.visit('https://www.saucedemo.com/checkout-complete.html');
*/
 });

});
