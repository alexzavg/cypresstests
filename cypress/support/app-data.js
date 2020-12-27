export const URLs = {
    index: '/index.html',
    inventory: '/inventory.html',
    cart: '/cart.html',
    checkout_step_one: '/checkout-step-one.html'
 };

 export const els = {
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

 export const creds = {
    username: 'standard_user',
    password: 'secret_sauce'
 };

 export const buttons_text = {
    ADD_TO_CART: 'ADD TO CART',
    REMOVE: 'REMOVE',
    CHECKOUT: 'CHECKOUT',
    CONTINUE: 'CONTINUE',
    FINISH: 'FINISH'
 };

 export const product_names = {
    sauce_labs_backpack: 'Sauce Labs Backpack'
 };

 export const buyer_info = {
    first_name: 'test first name',
    last_name: 'test last name',
    postal_code: '37000',
    payment_info: 'SauceCard',
    shipping_info: 'FREE PONY EXPRESS DELIVERY!'
 };

 export const order_completion_info = {
    thank_you: 'THANK YOU FOR YOUR ORDER',
    order_dispatched: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
 };
 