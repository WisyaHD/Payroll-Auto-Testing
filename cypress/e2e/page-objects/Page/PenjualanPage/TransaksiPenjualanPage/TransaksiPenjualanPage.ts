import ModalDataBarang from "./ModalDataBarang/ModalDataBarang";
import ModalDataCustomer from "./ModalDataCustomer/ModalDataCustomer";
import ModalSimpananPenjualan from "./ModalSimpananPenjualan/SimpananPenjualan";

export default class TransaksiPenjualanPage{
    public modalDataCustomer: ModalDataCustomer;
    public modalDataBarang: ModalDataBarang;
    public modalSimpananPenjualan: ModalSimpananPenjualan;

    constructor(){
        this.modalDataCustomer = new ModalDataCustomer();
        this.modalDataBarang = new ModalDataBarang();
        this.modalSimpananPenjualan = new ModalSimpananPenjualan();
    }

    tambahDataCustomerButton(){
       return cy.get('.text-right > .btn-primary').click({force: true});
    }

    tambahBarangButton(){
        return cy.get('.btn-success').click({force: true});
    }

    ambilTitipanButton(){
        return cy.get('.text-right > .btn-warning').click({force: true});
    }
    ambilPesananButton(){
        return cy.get('.btn-danger').click({force: true});
    }
    simpananDataPenjualan(){
       return cy.get('.col-12 > .btn-primary').click({force: true});
    }
}