export default class ModalDataCustomer{
    PilihKodeSalesSelectComboBox(){
        return cy.get('.css-yk16xz-control');
    }

    PilihPelangganSelectComboBox(){
        return cy.get(':nth-child(3) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    kodeCustomerInputBox(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }

    PilihTypePembayaranSelectComboBox(){
        return cy.get(':nth-child(8) > .form-group > .select-search > .select-search__value > .select-search__input');
    }
    PilihNoRekeningSelectComboBox(){
        return cy.get(':nth-child(9) > .form-group > .select-search > .select-search__value > .select-search__input');
    }
    NoRekeningPelangganInputBox(){
        return cy.get(':nth-child(10) > .form-group > .form-control');
    }
    KembaliSelectBox(){
        return cy.get('.text-left > .btn');
    }

    SelesaiPembelianSelectBox(){
        return cy.get('.text-right > .btn');
        
    }
}