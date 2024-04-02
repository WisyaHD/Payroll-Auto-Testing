import ModalDataCustomer from "./ModalDataCustomer/ModalDataCustomer";
import ModalDataBarang from "./ModalDataBarang/ModalDataBarang";
import ModalSimpananService from "./ModalSimpananService/ModalSimpananService";

export default class TransaksiServicePage{
    public modalDataCustomer = new ModalDataCustomer;
    public modalDataBarang: ModalDataBarang;
    public modalSimpananService: ModalSimpananService;

    constructor(){
        this.modalDataCustomer = new ModalDataCustomer();
        this.modalDataBarang = new ModalDataBarang();
        this.modalSimpananService = new ModalSimpananService();
        
    }

    tambahDataCustomerButton(){
        return cy.get('.text-right > .btn-primary').click({force: true});
    }

    tambahDataBarangButton(){
        return cy.get('.btn-success').click({force: true});
    }
    SimpanDataServiceButton(){
        return cy.get(':nth-child(2) > .btn').click({force: true});
        

    }
}