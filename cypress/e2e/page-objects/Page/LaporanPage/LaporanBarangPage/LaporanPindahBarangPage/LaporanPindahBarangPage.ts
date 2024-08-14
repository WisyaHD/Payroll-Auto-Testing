export default class LaporanPindahBarangPage{
    TanggalDariDatePickerInputBox(){
        return cy.get(':nth-child(2) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }
    TanggalAkhirDatePickerInputBox(){
        return cy.get(':nth-child(3) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    KodeGroupSelectComboBox(){
        return cy.get(':nth-child(4) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

   
    BakiAsalSelectComboBox(){
        return cy.get(':nth-child(5) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});
    }
    BakiTujuanSelectComboBox(){
        return cy.get(':nth-child(6) > .form-group > .select-search > .select-search__value > .select-search__input').click({force: true});        
    }
    exportPdfButton(){
        return cy.get('.row > :nth-child(1) > .btn');
    }
    exportExcelButton(){
        return cy.get('#test-table-xls-button');
    }
}