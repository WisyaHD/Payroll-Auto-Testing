export default class PindahBarangSatuBakiPage{
    GudangAsalInputBox(){
        return cy.get(':nth-child(1) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    BakiAsalInputBox(){
        return cy.get(':nth-child(2) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    CariDataButtonBox(){
        return cy.get(':nth-child(3) > .btn');
    }

    GudangTujuanInputBox(){
        return cy.get(':nth-child(4) > .form-group > .select-search > .select-search__value > .select-search__input');
    }    
        BakiTujuanInputBox(){
            return cy.get(':nth-child(5) > .form-group > .select-search > .select-search__value > .select-search__input');

    }
    SimpanDataButtonBox(){
        return cy.get('.col-10 > .btn-primary');

    }          

}