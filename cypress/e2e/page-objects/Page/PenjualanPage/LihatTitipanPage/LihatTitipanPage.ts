export default class LihatTitipanPage{
    TanggalDariSelectDateBox(){
        return cy.get(':nth-child(1) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }

    TanggalAkhirSelectDateBox(){
        return cy.get(':nth-child(2) > .input-group > .customDatePickerWidth > .react-datepicker-wrapper > .react-datepicker__input-container > .form-control');
    }
    CariTitipanButton(){
        return cy.get('.text-right > .btn');
    }
}