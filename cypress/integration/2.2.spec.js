describe('2.2', function() {
 
    it('should check hexagons', function() {
    
        cy.visit('https://test:ObsidianTest9!@public.obsidiandemo.com/obsidian/dashboard/?view=strategic');

       /*
        * Create a javascript function returning position and color of every hexagon.
        elem.getBoundingClientRect()

        * Automate the following test case: if one or more hexagon are coloured in red the the test must be KO
       */
        cy.get('g.location #service-1').then((result)=>{
            cy.log(result);
        });
 
    });
 
 });