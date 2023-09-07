export default class TimbangBakiPage{
    KodeGudangInputBox(){
        return cy.get('#kode_gudang > .select-search__value > .select-search__input');
    }

    KodeBakiInputBox(){
        return cy.get('#kode_baki > .select-search__value > .select-search__input');
    }

    MulaiTimbangButtonBox(){
        return cy.get(':nth-child(3) > .btn');
    }

    LanjutkanButton(){
        return cy.get('.btn-success');
    }

    ResetButton(){
        return cy.get('.btn-warning');
    }

    simpanDataButton(){
        return cy.get(':nth-child(3) > .col-lg-4 > .btn');


    }

}