import ModalBatalBeli from "./ModalBatalBeli/ModalBatalBeli";

export default class LihatPembelianPage{
    public modalBatalBeli: ModalBatalBeli;
    constructor(){
        this.modalBatalBeli = new ModalBatalBeli();
    }
    BatalBeliSelectBox(){
        return cy.get(':nth-child(1) > :nth-child(10) > .row > .col-12 > .btn-danger');
    }

    ReprintSelectBox(){
        return cy.get(':nth-child(1) > :nth-child(10) > .row > .col-12 > .btn-success');
    }

    BatalBeli2SelectBox(){
        return cy.get(':nth-child(2) > :nth-child(10) > .row > .col-12 > .btn-danger');
    }

    Reprint2SelectBox(){
        return cy.get(':nth-child(2) > :nth-child(10) > .row > .col-12 > .btn-success');
   
    }
}