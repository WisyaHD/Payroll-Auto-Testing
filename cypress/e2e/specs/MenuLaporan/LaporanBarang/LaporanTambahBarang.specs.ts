const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"

describe('AccessMenuDataBarang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', { scrollBehavior: false }, () => {
        cy.visit('/laporan-tambah-barang');
        cy.url().should('include', '/laporan-tambah-barang');
        cy.get(':nth-child(7) > .btn').click();
        cy.wait(6000);
        cy.get(':nth-child(13) > .btn').click({force: true});
        cy.task('readPdf', './cypress/downloads/LAPORAN BARANG DETAIL.pdf').should('include', 'TAMBAH BARANG');
    })
})