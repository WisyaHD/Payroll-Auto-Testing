export default class ModalDataBarang{
    KodeBarcodeInputBox(){
       return cy.get('#kode_barcode');
    }
    hargaJualInputBox(){
        return cy.get('#harga_jual');
    }

    KategoriSelectComboBox(){
        return cy.get('.select-search__input');
    }

    NamaBarangInputBox(){
        return cy.get('#jenis_barang');
    }
    BeratInputBox(){
        return cy.get('#betat');
    }
    DeskripsiPesananInputBox(){
       return cy.get(':nth-child(15) > .form-group > .form-control');
    }
    DeskripsiDariTokoButtonBox(){
       return cy.get(':nth-child(19) > .form-group > :nth-child(3)'); 
    }
    DeskripsiAddButtonBox(){
       return cy.get('.row > .text-right > .btn');
    }
    SimpananDataButtonBox(){
        return cy.get('form > :nth-child(2) > :nth-child(1) > .btn');
    }
}