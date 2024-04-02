export default class ModalDataBarang{
    NamaBarangInputBox(){
        return cy.get('#nama_barang_hutang');
    }
    KodeGroupComboBox(){
        return cy.get('.select-search__input');
    }

    BeratBarangInputBox(){
        return cy.get(':nth-child(6) > .form-group > .form-control');
    }
    JumlahInputBox(){
       return cy.get(':nth-child(8) > .form-group > .form-control');
    }
   KadarInputBox(){
       return cy.get(':nth-child(7) > .form-group > .form-control'); 
    }
    SimpanDataButton(){
        return cy.get('.row > .text-right > .btn');
    }
}