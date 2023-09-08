import ModalSimpanBarang from "./ModalSimpanBarang/ModalSimpanBarang";
export default class TransaksiPembelianPage{
    public modalSimpanBarang: ModalSimpanBarang;
    constructor(){
        this.modalSimpanBarang = new ModalSimpanBarang();
    

    }
    KodeBarcodeInputBox(){
        return cy.get('#kode_barcode');
    }

    TypeKondisiSelectComboBox(){
        return cy.get(':nth-child(2) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    KondisiSelectComboBox(){
        return cy.get(':nth-child(3) > .form-group > .select-search > .select-search__value > .select-search__input');
    }

    KodeJenisSelectComboBox(){
        return cy.get(':nth-child(4) > .form-group > .select-search > .select-search__value > .select-search__input');
    }
    NamaBaranginputBox(){
        return cy.get(':nth-child(5) > .form-group > .form-control');
    }
    HargaNotaSelectBox(){
        return cy.get(':nth-child(11) > .form-group > .form-control');
    }
    HargaBeliInputBox(){
        return cy.get(':nth-child(12) > .form-group > .form-control');
    }
    SimpanBarangSelect(){
        return cy.get('.col-md-12 > .btn');
    }
    ResetDataSelect(){
        return cy.get('.text-left > .btn');
    }
    nextDataSelect(){
        return cy.get(':nth-child(3) > .text-right > .btn');
    }
}