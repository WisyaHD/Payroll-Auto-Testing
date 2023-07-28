export default class DataBarangPage{
    kodeBarcodeInputBox(){
        return cy.get('#kode_barcode');
    }

    namaBarangInputBox(){
        return cy.get(':nth-child(2) > .form-group > .form-control');
    }

    kodeGroupInputBox(){
        return cy.get(':nth-child(3) > .form-group > .form-control');
    }

    kodeBakiInputBox(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }

    kodeJenisInputBox(){
        return cy.get(':nth-child(5) > .form-group > .form-control');
    }

    beratDariInputBox(){
        return cy.get(':nth-child(6) > .form-group > .form-control')
    }

    beratSampaiInputBox(){
        return cy.get(':nth-child(7) > .form-group > .form-control');
    }

    cariDataBarangButton(){
        return cy.get('.col-lg-12 > .btn');
    }
}