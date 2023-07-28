import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuDataBarang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', { scrollBehavior: false }, () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuDataBarang(true, "-");
        cy.url().should('include', '/data-barang');
        page.barangPage.dataBarangPage.kodeBarcodeInputBox().type('00000667');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.kodeBarcodeInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.namaBarangInputBox().type('CINCIN MAS KAWIN');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.namaBarangInputBox().clear();
    })
})