import {URLs, creds} from '../support/app-data';

describe('2.1 -> test case #2', function() {
 
    it('should login as a [standard_user]', function() {
    
       cy.login(creds.username, creds.password);
 
       cy.url().should('contain', URLs.inventory);
 
    });
 
 });
 