export default class HancurBarangPage{
    KondisiBarangInputBox(){
        return cy.get(':nth-child(1) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    TujuanGudangInputBox(){
        return cy.get(':nth-child(2) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    kodeBarcodeInputBox(){
        return cy.get(':nth-child(3) > .form-group > .form-control');
    }

    kodeHancurDataBarangInputBox(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }

    simpanDataButton(){
        return cy.get('.btn-primary');
    }

    batalSimpanButton(){
        return cy.get('.btn-warning')
    }
}