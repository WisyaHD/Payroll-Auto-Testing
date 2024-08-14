import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { type } from 'os';
import { Baki, Gudang, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
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
        page.barangPage.pindahBarangSatuBakiPage.GudangAsalInputBox().type(`${Gudang}{downArrow}{enter}`);
        page.barangPage.pindahBarangSatuBakiPage.BakiAsalInputBox().type(`${Baki}{downArrow}{enter}`);
        page.barangPage.pindahBarangSatuBakiPage.CariDataButtonBox().click();
        page.barangPage.pindahBarangSatuBakiPage.GudangTujuanInputBox().type(`${Gudang}{downArrow}{enter}`);
        page.barangPage.pindahBarangSatuBakiPage.BakiTujuanInputBox().type(`${Baki}TEST TIMBANG BAKI{downArrow}{enter}`);
        page.barangPage.pindahBarangSatuBakiPage.SimpanDataButtonBox().click();
        cy.wait(3000);

    });
});