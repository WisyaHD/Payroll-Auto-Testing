import ModalDataBarang from "./ModalDataBarang/ModalDataBarang";
import ModalDataCustomer from "./ModalDataCustomer/ModalDataCustomer";

export default class TransaksiPenjualanPage{
    public modalDataCustomer: ModalDataCustomer;
    public modalDataBarang: ModalDataBarang;

    constructor(){
        this.modalDataCustomer = new ModalDataCustomer();
        this.modalDataBarang = new ModalDataBarang();
    }

    tambahDataCustomerButton(){
        return cy.get('.text-right > .btn-primary');
    }

    tambahBarangButton(){
        return cy.get('.btn-success');
    }

    ambilTitipanButton(){
        return cy.get('.text-right > .btn-warning');
    }

    ambilPesananButton(){
        return cy.get('.btn-danger');
    }
}