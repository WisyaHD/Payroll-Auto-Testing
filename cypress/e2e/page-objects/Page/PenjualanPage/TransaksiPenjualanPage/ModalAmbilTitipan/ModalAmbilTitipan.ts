export default class ModalDataCustomer{
    FilterSelectComboBox(){
        return cy.get('.select-search__input');
    }

    PencarianInputBox(){
        return cy.get('.select-search__input');
    }

    CariButton(){
        return cy.get('.row > :nth-child(3) > .btn');
    }
}