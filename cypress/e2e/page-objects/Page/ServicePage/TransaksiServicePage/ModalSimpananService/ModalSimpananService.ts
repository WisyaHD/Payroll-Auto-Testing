export default class ModalSimpananService{
    PilihJenisBayarSelectComboBox(){
       return cy.get(':nth-child(3) > .form-group > .select-search > .select-search__value > .select-search__input');
    }
    NoRekeningSelectComboBox(){
        return cy.get('#nama_bank > .select-search__value > .select-search__input');
    }
    CardNoInputBox(){
       return cy.get('#no_card');
    }
    NoRekeningPelangganInputBox(){
    return cy.get('#nama_bank > .select-search__value > .select-search__input');
    }

    DeskripsiNominalInputBox(){
        return cy.get('#cash_trx_penjualan');
    }
    FeeInputBox(){
    return cy.get('#fee')
    }
    SisaButtonBox(){
        return cy.get('#sisa_bayar');
    }
    DeskripsiTambahTransaksiButtonBox(){
        return cy.get(':nth-child(1) > .row > .col-12 > .btn');
    }
    DeskripsiPlusTransaksiButtonBox(){
       return cy.get(':nth-child(1) > .row > .text-right > .btn');
    }
    DeskripsiBayarSekarangButtonBox(){
       return cy.get('.modal-body > :nth-child(3) > :nth-child(2) > .text-right > .btn');
    }
    DeskripsiDariTokoButtonBox(){
       return cy.get(':nth-child(19) > .form-group > :nth-child(3)'); 
    }
    DeskripsiAddButtonBox(){
       return cy.get('.row > .text-right > .btn');
            
    }
}