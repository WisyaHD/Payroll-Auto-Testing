export default class LaporanBarangSummaryPage{
    TanggalDariDatePickerInputBox(){
        return cy.get(' .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }
    TanggalAkhirDatePickerInputBox(){
        return cy.get(':nth-child(2) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    GudangSelectComboBox(){
        return cy.get(':nth-child(3) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

   
    BakiSelectComboBox(){
        return cy.get(':nth-child(4) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});
    }
    JenisSelectComboBox(){
        return cy.get(':nth-child(5) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});        
    }
    CetakLaporanSelectComboBox(){
        return cy.get(':nth-child(6) > .form-group > .select-search > .select-search__value > .select-search__input');
    }
    TypeLaporanSelectComboBox(){
        return  cy.get(':nth-child(7) > .form-group > .select-search > .select-search__value > .select-search__input');
    }
    cariLaporanButtonBox(){
        return cy.get('.text-right > .btn');
    }    
    exportPdfButton(){
        return cy.get('.row > :nth-child(1) > .btn');
    }
    exportExcelButton(){
        return cy.get('#test-table-xls-button');
    }
}