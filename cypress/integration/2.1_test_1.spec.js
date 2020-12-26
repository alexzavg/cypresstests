describe('2.1 -> test case #1', function() {

 it('should purchase [Sauce Labs Backpack] as a [standard_user]', function() {
      const URLs = {
         index: '/index.html',
         inventory: '/inventory.html',
         cart: '/cart.html',
         checkout_step_one: '/checkout-step-one.html'
      };
      const els = {
         username_input: '#user-name',
         password_input: '#password',
         login_button: 'input.btn_action',
         inventory_item: 'div.inventory_item',
         first_product_add_to_cart_button: 'div.inventory_item:nth-child(1) > div.pricebar > button.btn_inventory',
         shopping_cart_badge: 'span.shopping_cart_badge',
         shopping_cart_icon: '[data-icon="shopping-cart"]',
         checkout_button: 'a.checkout_button',
         cart_item: 'div.cart_item',
         first_name: '#first-name',
         last_name: '#last-name',
         postal_code: '#postal-code',
         continue_button: '[type="submit"]',
         checkout_summary_container: '#checkout_summary_container',
         finish_button: 'a.btn_action',
         checkout_complete_container: '#checkout_complete_container',
         pony_express_image: '[src="img/pony-express.png"]',
         menu_button: 'div.bm-burger-button',
         reset_app_state: '#reset_sidebar_link'
      };
      const creds = {
         username: 'standard_user',
         password: 'secret_sauce'
      };
      const buttons_text = {
         ADD_TO_CART: 'ADD TO CART',
         REMOVE: 'REMOVE',
         CHECKOUT: 'CHECKOUT',
         CONTINUE: 'CONTINUE',
         FINISH: 'FINISH'
      };
      const product_names = {
         sauce_labs_backpack: 'Sauce Labs Backpack'
      };
      const buyer_info = {
         first_name: 'test first name',
         last_name: 'test last name',
         postal_code: '37000',
         payment_info: 'SauceCard',
         shipping_info: 'FREE PONY EXPRESS DELIVERY!'
      };
      const order_completion_info = {
         thank_you: 'THANK YOU FOR YOUR ORDER',
         order_dispatched: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
      }
   
      cy.visit('/');
   
      cy.get(els.username_input)
         .click()
         .clear()
         .type(creds.username);

      cy.get(els.username_input)
         .should('have.value', creds.username);
   
      cy.get(els.password_input)
         .click()
         .clear()
         .type(creds.password);

      cy.get(els.password_input)
         .should('have.value', creds.password);
      
      cy.get(els.login_button)
         .click();

      cy.url()
         .should('contain', URLs.inventory);

      cy.get(els.first_product_add_to_cart_button)
         .contains(buttons_text.ADD_TO_CART);
      cy.get(els.first_product_add_to_cart_button)
         .click()
         .contains(buttons_text.REMOVE);
   
      cy.get(els.shopping_cart_badge)
         .contains('1');

      cy.get(els.shopping_cart_icon)
         .click();
      
      cy.url()
         .should('contain', URLs.cart);

      cy.get(els.cart_item)
         .contains(product_names.sauce_labs_backpack);

      cy.get(els.checkout_button)
         .contains(buttons_text.CHECKOUT)
         .click();

      cy.url()
         .should('contain', URLs.checkout_step_one);

      cy.get(els.first_name)
         .click()
         .clear()
         .type(buyer_info.first_name);

      cy.get(els.last_name)
         .click()
         .clear()
         .type(buyer_info.last_name);

      cy.get(els.postal_code)
         .click()
         .clear()
         .type(buyer_info.postal_code);
      
      cy.get(els.continue_button)
         .click();
      
      cy.get(els.checkout_summary_container)
         .children()
         .should('contain', product_names.sauce_labs_backpack)
         .and('contain', buyer_info.payment_info)
         .and('contain', buyer_info.shipping_info);

      cy.get(els.finish_button)
         .contains(buttons_text.FINISH)
         .click();
      
      cy.contains(order_completion_info.thank_you);
      cy.contains(order_completion_info.order_dispatched);

      cy.get(els.menu_button)
         .click();

      cy.get(els.reset_app_state)
         .click();

      cy.visit('/index.html');
 });

});
