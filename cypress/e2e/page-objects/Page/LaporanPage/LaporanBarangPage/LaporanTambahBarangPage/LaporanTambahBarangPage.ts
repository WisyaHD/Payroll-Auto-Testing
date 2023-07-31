export default class LaporanTambahBarangPage{
    tanggalDariInputBox(){
        return cy.get(':nth-child(2) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    tanggalAkhirInputBox(){
        return cy.get(':nth-child(3) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    lihatLaporanButton(){
        return cy.get(':nth-child(7) > .btn').click({force: true});
    }

    exportPdfButton(){
        return cy.get(':nth-child(13) > .btn').click({force: true});
    }

    exportExcelButton(){
        return cy.get('#test-table-xls-button').click({force: true});
    }
}