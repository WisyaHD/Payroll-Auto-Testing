export default class PindahBarangPage{
    KodeGudangInputBox(){
        return cy.get('#kode_gudang > .select-search__value > .select-search__input');
    }

    BakiTujuanInputBox(){
        return cy.get(':nth-child(2) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    kodeBarcodeInputBox(){
        return cy.get(':nth-child(3) > .form-group > .form-control');
    }

    simpanDataButton(){
        return cy.get('.btn-primary');

    }

}