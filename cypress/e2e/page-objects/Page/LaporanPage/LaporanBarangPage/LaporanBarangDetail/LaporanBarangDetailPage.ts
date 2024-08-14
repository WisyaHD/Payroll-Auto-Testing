export default class LaporanBarangDetailPage{
    GroupSelectComboBox(){
        return cy.get(':nth-child(2) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    JenisSelectComboBox(){
        return cy.get(':nth-child(3) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    GudangSelectComboBox(){
        return cy.get(':nth-child(4) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    KodeBakiSelectComboBox(){
        return cy.get(':nth-child(5) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});
    }

    GroupBySelectComboBox(){
        return cy.get(':nth-child(6) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});
    }
    JenisGroupSelectComboBox(){
        return cy.get(':nth-child(8) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});
    }
    kadarInputBox(){
        return cy.get(':nth-child(10) > .form-group > .form-control');
    }
    FilterLaporanSelectComboBox(){
        return cy.get('.mb-4 > .btn').click({force: true});
    }
    exportPdfButton(){
        return  cy.get(':nth-child(13) > .btn');
    }    
    exportExcelButton(){
        return cy.get('#test-table-xls-button');
    }
}