export default class ModalBatalBeli{ 
    AlasanBatalBeliSelectComboBox(){
        return cy.get('.select-search__input');
    }
    KembaliSelectBox(){
        return cy.get(':nth-child(6) > .btn');
    }
    BatalBeliSelectBox(){
        return cy.get('.col-9 > .btn');
    }
}