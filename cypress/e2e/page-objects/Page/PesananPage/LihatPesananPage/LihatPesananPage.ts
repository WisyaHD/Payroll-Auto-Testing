export default class LihatPesananPage{
    ReprintSelectBox(){
        return cy.get(':nth-child(1) > :nth-child(9) > .row > .col-12 > .btn-secondary');
    }

    BatalButton(){
        return cy.get(':nth-child(1) > :nth-child(9) > .row > .col-12 > .btn-danger');
   
    }

    FilterPesananButtonBox(){
        return cy.get('.btn-warning');
    }
}