export default class BatalPenjualanPage{

    KodeBarcodeInputBox(){
        return cy.get('#kode_barcode');
    }

    AlasanSelectComboBox(){
        return cy.get('.select-search__input');
    }

    CariDataButton(){
        return cy.get('.text-right > .btn');
    }
    BatalButton(){
        return cy.get('.col-12 > .btn');
    }
    SimpanBatalPenjualanButton(){
        return cy.get(':nth-child(5) > .btn-primary');
    }    
    batalPenjualanButton(){
        return cy.get('.btn-warning');
    
   
    }
}