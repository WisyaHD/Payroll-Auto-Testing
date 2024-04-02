export default class LaporanBarangAccPage{
    FilterLaporanSelectComboBox(){
        return cy.get('.mb-4 > .btn');
    }
    exportPdfButton(){
        return  cy.get(':nth-child(5) > .btn');
    }    
    exportExcelButton(){
        return cy.get('#test-table-xls-button');
    }
}