import SideMenu from '../../page-objects/SideMenu/SideMenu';
import Page from '../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTransaksiPenjualan', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuPenjualan.selectMenuPenjualanParent(url);
        });
        sidemenu.sideMenuPenjualan.selectMenuTransaksiPenjualan(true, "-");
        cy.url().should('include', '/transaksi-penjualan');
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.tambahDataCustomerButton();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.salesSelectComboBox().type('Rani{enter}');
        

        
        

    })
})