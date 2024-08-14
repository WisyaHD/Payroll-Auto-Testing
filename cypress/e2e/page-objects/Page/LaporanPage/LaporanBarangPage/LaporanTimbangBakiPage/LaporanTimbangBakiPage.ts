export default class LaporanTimbangBakiPage{
    TanggalDariDatePickerInputBox(){
        return cy.get('.input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    LihatLaporanButtonBox(){
        return cy.get('.col-4 > .btn').click({force: true});        
    }
    exportPdfButtonBox(){
        return cy.get(':nth-child(5) > .btn');
    }
    exportExcelButton(){
        return cy.get('#test-table-xls-button');
    }
}