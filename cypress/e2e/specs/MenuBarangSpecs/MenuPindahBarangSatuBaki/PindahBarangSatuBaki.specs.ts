import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { type } from 'os';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuPindahBarangSatuBaki', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuPindahBarangSatuBaki(true, "-");
        cy.url().should('include', '/pindah-barang-satu-baki');
        cy.wait(1000);
        page.barangPage.pindahBarangSatuBakiPage.GudangAsalInputBox().type('TOKO-TOKO{downArrow}{enter}');
        page.barangPage.pindahBarangSatuBakiPage.BakiAsalInputBox().type('BK-GL{downArrow}{enter}');
        page.barangPage.pindahBarangSatuBakiPage.CariDataButtonBox().click();
        page.barangPage.pindahBarangSatuBakiPage.GudangTujuanInputBox().type('TOKO-TOKO{downArrow}{enter}');
        page.barangPage.pindahBarangSatuBakiPage.BakiTujuanInputBox().type('TEST TIMBANG BAKI{downArrow}{enter}');
        page.barangPage.pindahBarangSatuBakiPage.SimpanDataButtonBox().click();
        cy.wait(3000);

    });
});