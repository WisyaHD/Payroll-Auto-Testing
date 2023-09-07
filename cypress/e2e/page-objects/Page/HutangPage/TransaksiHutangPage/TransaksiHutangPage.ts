import ModalDataCustomer from "./ModalDataCustomer/ModalDataCustomer";
import ModalDataBarang from "./ModalDataBarang/ModalDataBarang";
import ModalDataHutang from "./ModalDataHutang/ModalDataHutang";

export default class TransaksiHutangPage{
    public modalDataCustomer : ModalDataCustomer;
    public modalDataBarang: ModalDataBarang;
    public modalDataHutang: ModalDataHutang;
    
    constructor(){
        this.modalDataCustomer = new ModalDataCustomer();
        this.modalDataBarang = new ModalDataBarang();
        this.modalDataHutang = new ModalDataHutang();
        
    }

    tambahDataCustomerButton(){
        return cy.get('.btn-primary').click({force: true});
    }

    tambahDataBarangButton(){
        return cy.get('.btn-success').click({force: true});
    }
    
    tambahDataHutangButton(){    
        return cy.get('.text-right > .btn-warning').click({force: true});
    }
}