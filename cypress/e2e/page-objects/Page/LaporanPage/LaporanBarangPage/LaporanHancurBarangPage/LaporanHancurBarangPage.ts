export default class LaporanHancurBarangPage{
    TanggalDariDatePickerInputBox(){
        return cy.get(':nth-child(1) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }
    TanggalAkhirDatePickerInputBox(){
        return cy.get(':nth-child(2) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    GroupBySelectComboBox(){
        return cy.get(':nth-child(3) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

   
    KodeJenisSelectComboBox(){
        return cy.get(':nth-child(4) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});
    }
    JenisGroupSelectComboBox(){
        return cy.get(':nth-child(5) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});        
    }
    KodeBarcodeInputBox(){
        return cy.get(':nth-child(6) > .form-group > .form-control');
    }
    CariButton(){
        return  cy.get('.text-right > .btn');
    }    
    exportPdfButton(){
        return cy.get('.row > :nth-child(1) > .btn');
    }
    exportExcelButton(){
        return cy.get('#test-table-xls-button');
    }
}