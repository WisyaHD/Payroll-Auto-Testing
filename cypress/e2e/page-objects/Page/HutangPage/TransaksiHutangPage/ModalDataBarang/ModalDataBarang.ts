export default class ModalDataBarang{
    NamaBarangInputBox(){
        return cy.get('#nama_barang_hutang');
    }
    KodeGroupComboBox(){
        return cy.get('.select-search__input');
    }

    BeratBarangInputBox(){
        return cy.get(':nth-child(8) > .form-group > .form-control');
    }
    JumlahInputBox(){
       return cy.get(':nth-child(10) > .form-group > .form-control');
    }
   KadarInputBox(){
       return cy.get(':nth-child(9) > .form-group > .form-control'); 
    }
    SimpanDataButton(){
        return cy.get('.row > .text-right > .btn');
    }
}