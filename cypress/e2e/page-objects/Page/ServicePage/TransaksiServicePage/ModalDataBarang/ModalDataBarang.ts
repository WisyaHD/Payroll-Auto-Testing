export default class ModalDataBarang{
    NamaBarangInputBox(){
        return cy.get('#nama_barang');
    }
    BeratBarangInputBox(){
        return cy.get(':nth-child(6) > .form-group > .form-control');
    }
    JumlahInputBox(){
       return cy.get('form > :nth-child(2) > :nth-child(1) > .form-group > .form-control');
    }
   OngkosInputBox(){
       return cy.get(':nth-child(2) > .form-group > .form-control'); 
    }
    TotalInputBox(){
       return cy.get(':nth-child(3) > .form-group > .form-control');
    }
    DeskripsiInputBox(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }
    SimpanDataButton(){
        return cy.get(':nth-child(2) > .btn')
    }
}