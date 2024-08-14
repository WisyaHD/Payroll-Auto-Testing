export default class TambahDanAmbilStockAksesoris{
    KodeBarcodeInputBox(){
        return cy.get('#kode_barcode');
    }

    TypeInputBox(){
        return cy.get('.select-search__input');
    }

    TambahStockInputBox(){
        return cy.get('#stock_baru');
    }

    simpanDataButton(){
        return cy.get('.mt-4 > .btn');

    }

}