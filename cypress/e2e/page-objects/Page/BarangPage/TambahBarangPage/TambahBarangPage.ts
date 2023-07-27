import ModalTambahBarang from "./ModalTambahBarang/ModalTambahBarang";

export default class TambahBarangPage{
    public modalTambahBarang: ModalTambahBarang;
    constructor(){
        this.modalTambahBarang = new ModalTambahBarang();
    }
    kodeGroupSelectBox(){
        return cy.get('#kode_kategori > .select-search__value > .select-search__input');
    }

    kodeJenisSelectBox(){
        return cy.get('#kode_jenis > .select-search__value > .select-search__input');
    }

    kodeBakiSelectBox(){
        return cy.get('#kode_lokasi_toko > .select-search__value > .select-search__input');
    }

    tambahBarangButton(){
        return cy.get('.col-lg-1 > .btn');
    }

    barangPesananButton(){
        return cy.get('.col-lg-4 > .btn');
    }
}