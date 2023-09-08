export default class HancurPembelianPage{

    NoFakturBeliInputBox(){
        return cy.get(':nth-child(3) > .form-group > .form-control');
    }

    KodeSalesSelectComboBox(){
        return cy.get('.select-search__input');
    }

    CariPembelianSelectBox(){
        return cy.get(':nth-child(12) > .btn');
    }

    HancurPembelianSelectBox(){
        return cy.get('.col-12 > .btn');
    }
    ConfirmHancurSelectBox(){
        return cy.get('.swal2-confirm');
    
   
    }
}