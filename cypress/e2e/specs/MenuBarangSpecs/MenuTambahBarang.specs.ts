import SideMenu from '../../page-objects/SideMenu/SideMenu';
import Page from '../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTambahBarang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', { scrollBehavior: false }, () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuTambahBarang(true, "-");
        cy.url().should('include', '/tambah-data-barang');
        page.barangPage.tambahBarangPage.kodeGroupSelectBox().type('MT');
        // page.barangPage.tambahBarangPage.kodeGroupSelectBox().type('{downArrow}{enter}');
    })
})