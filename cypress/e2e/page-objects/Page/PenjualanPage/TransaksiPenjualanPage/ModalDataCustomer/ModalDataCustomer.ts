export default class ModalDataCustomer{
    salesSelectComboBox(){
        return cy.get('.css-1wy0on6 > :nth-child(3)');
    }

    jenisPelangganSelectComboBox(){
        return cy.get('.select-search__input');
    }

    kodeMemberInputBox(){
        return cy.get('#kode_member');
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
        return cy.get('.col-4 > .btn');
    }
}