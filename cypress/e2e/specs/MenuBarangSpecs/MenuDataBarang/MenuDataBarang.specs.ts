import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('Full Access Data Barang All Filter', () => {
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
        page.barangPage.dataBarangPage.kodeBarcodeInputBox().type('20001117');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.kodeBarcodeInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.namaBarangInputBox().type('BARANG BARU GUYS');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.namaBarangInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.kodeGroupInputBox().type('70KA');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.kodeGroupInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.kodeBakiInputBox().type('BK-GL');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.kodeBakiInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.kodeJenisInputBox().type('GLMT');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.kodeJenisInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.beratDariInputBox().type('1');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.beratDariInputBox().clear();
        cy.wait(500);
        page.barangPage.dataBarangPage.beratSampaiInputBox().type('5');
        page.barangPage.dataBarangPage.cariDataBarangButton().click();
        page.barangPage.dataBarangPage.beratSampaiInputBox().clear();
        cy.wait(500);
    })
})