export default class LihatPenjualanPage{
    ReprintSelectBox(){
        return cy.get('#PopoverClick0');
    }

    ReprintButton(){
        return cy.get('tbody > :nth-child(1) > :nth-child(11)');
   
    }

    onHoverPrintFaktur(){
        return cy.get('#PopoverClick0').realHover({pointer: "mouse"});
    }
}