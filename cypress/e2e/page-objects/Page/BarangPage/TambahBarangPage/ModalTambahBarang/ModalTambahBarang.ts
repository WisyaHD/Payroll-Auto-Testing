export default class ModalTambahBarang{
    kodeInternInputBox(){
        return cy.get('#kode_intern')
    }

    markisSelectBox(){
        return cy.get('#is_markis > .select-search__value > .select-search__input');
    }

    namaBarangInputBox(){
        return cy.get(':nth-child(7) > .col-12 > .form-group > .form-control');
    }

    beratAsliInputBox(){
        return cy.get('#berat_asli');
    }

    beratInputBox(){
        return cy.get('#berat');
    }

    kadarCetakInputBox(){
        return cy.get(':nth-child(21) > .form-group > .form-control');
    }

    namaAtributInputBox(){
        return cy.get('#nama_atribut');
    }

    beratAtributInputBox(){
        return cy.get(':nth-child(9) > :nth-child(2) > .form-group > .form-control');
    }

    hargaAtributInputBox(){
        return cy.get('#harga_atribut');
    }

    beratPlastikInput(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }

    simpanDataButton(){
        return cy.get('.btn-success');
    }

    cancelButton(){
        return cy.get('.col-lg-6 > .btn-secondary');
    }
}