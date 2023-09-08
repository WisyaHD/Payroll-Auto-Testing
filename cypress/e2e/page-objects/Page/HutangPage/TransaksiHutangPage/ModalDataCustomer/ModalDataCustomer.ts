export default class ModalDataCustomer{
    KodeSalesSelectComboBox(){ 
        return cy.get('.css-yk16xz-control');
    }

    jenisPelangganSelectComboBox(){
        return cy.get('.select-search__input');
    }

    NamaCustomerInputBox(){
        return cy.get('#nama_customer')
    }

    namaCutomerInputBox(){
        return cy.get('#nama_customer');
    }

    noHpInputBox(){
        return cy.get(':nth-child(5) > .form-group > .form-control');
    }

    alamatCustomerInputBox(){
        return cy.get(':nth-child(6) > .form-group > .form-control');
    }

    simpanDataButton(){
        return cy.get(':nth-child(2) > .col-4 > .btn');
    }
}