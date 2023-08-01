import ModalDataBarang from "./ModalDataBarang/ModalDataBarang";
import ModalDataCustomer from "./ModalDataCustomer/ModalDataCustomer";
import ModalDataSimpananPesanan from "./ModalSimpananPesanan/ModalSimpananPesanan";

export default class TransaksiPesananPage{
    public modalDataCustomer = new ModalDataCustomer;
    public modalDataBarang: ModalDataBarang;
    public modalDataSimpananPesanan: ModalDataSimpananPesanan;
    
    constructor(){
        this.modalDataCustomer = new ModalDataCustomer();
        this.modalDataBarang = new ModalDataBarang();
        this.modalDataSimpananPesanan = new ModalDataSimpananPesanan();
        
    }

    tambahDataCustomerButton(){
        return cy.get('.text-right > .btn-primary').click({force: true});
    }

    tambahDataBarangButton(){
        return cy.get('.btn-success').click({force: true});
    }
    
    ModalDataSimpananPesanan(){    
        return cy.get('.col-6 > .btn-primary').click({force: true});
    }
}