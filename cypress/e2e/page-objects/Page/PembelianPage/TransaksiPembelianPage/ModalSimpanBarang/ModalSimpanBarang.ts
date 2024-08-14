import ModalDataCustomer from "./ModalDataCustomer/ModalDataCustomer";

export default class ModalSimpanBarang{
    public modalDataCustomer: ModalDataCustomer;
    constructor(){
        this.modalDataCustomer = new ModalDataCustomer();
    }
    NextSelectBox(){
        return cy.get('.text-right > .btn');
    }
    KembaliSelectBox(){
        return cy.get('.text-left > .btn');
    }
    HapusSelectBox(){
        return cy.get('.col-12 > .btn');
    }
}