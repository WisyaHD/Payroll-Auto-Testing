import ModalPelunasanHutang from "./PelunasanHutangPage/ModalPelunasanHutang";


export default class LihatHutangPage{
    public modalPelunasanHutang : ModalPelunasanHutang;
    constructor(){
        this.modalPelunasanHutang = new ModalPelunasanHutang();
    
    }
    CariHutangSelectBox(){
        return cy.get(':nth-child(11) > .form-group > .btn');
    }
    FilterHutangSelectBox(){
        return cy.get('.btn-warning');
    }
    PelunasanButton(){
        return cy.get(':nth-child(1) > :nth-child(7) > .row > .col-12 > .btn-success');
   
    }
    TanggalDariDatePickerInputBox(){
        return cy.get(':nth-child(1) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }
    TanggalAkhirDatePickerInputBox(){
        return cy.get(':nth-child(2) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }
        reactDatePickerInputBox(){
        return cy.get(':nth-child(1) > .react-datepicker__day--001');
    }

    PrintFaktur(){
        return cy.get(':nth-child(1) > :nth-child(7) > .row > .col-12 > .btn-info');
        
    }
}