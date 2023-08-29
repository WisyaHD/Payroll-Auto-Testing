export default class AmbilBarangContohPage{
    NoPesananInputBox(){
        return cy.get('#no_pesanan');
    }

    CariButton(){
        return cy.get('.col-4.mt-4 > .btn');
   
    }
    batalPesananButton(){
        return cy.get('.swal2-confirm');
    }
    FilterPesananButtonBox(){
        return cy.get('.btn-warning');
    }
    AmbilBarangContohButtonBox(){
        return cy.get('.col-12.mt-4 > .btn');
    
    }
}
