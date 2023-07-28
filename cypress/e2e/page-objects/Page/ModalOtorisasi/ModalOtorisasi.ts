export default class ModalOtorisasi{
    usernameInputBox(){
        return cy.get('#username');
    }

    passwordInputBox(){
        return cy.get(':nth-child(4) > .form-group > .form-control');
    }

    keteranganInputBox(){
        return cy.get(':nth-child(5) > .form-group > .form-control');
    }

    otorisasiButton(){
        return cy.get(':nth-child(6) > .btn');
    }
}