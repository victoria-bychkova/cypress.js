describe('Покупка аватара', function () {

    it('e2e автотест для покемонов на покупку нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get('.available > button').first().click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 5555 5557');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('05/25');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(125);
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('LudmilaVasilievna');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         cy.contains('Покупка прошла успешно').should('be.visible');
         

     })

     

    

    

    

    
      
 })