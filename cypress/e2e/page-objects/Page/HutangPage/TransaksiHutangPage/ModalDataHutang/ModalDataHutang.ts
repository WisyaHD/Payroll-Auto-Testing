export default class ModalDataHutang{
    TypePlafondSelectComboBox(){
       return cy.get('.select-search__input');
    }
    NoFakturManualInputBox(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }
    JumlahHutangInputBox(){
       return cy.get('#jml_hutang');
    }
    BungaPerBulanInputBox(){
    return cy.get(':nth-child(6) > .form-group > .form-control');
    }
    LamaPinjamInputBox(){
        return cy.get(':nth-child(7) > .form-group > .form-control');
    }
    SimpanDataButton(){
    return cy.get('.col-2 > .btn').click({force: true});

            
    }
}