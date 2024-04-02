import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { type } from 'os';
import { kodeBarcode, kondisiBarang, password , username, validpass, validuser } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuDataBarang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuHancurBarang(true, "-");
        cy.url().should('include', '/hancur-data-barang');
        cy.wait(1000);
        page.barangPage.hancurBarangPage.KondisiBarangInputBox().type(`${kondisiBarang}{downArrow}{enter}`);
        // page.barangPage.hancurBarangPage.TujuanGudangInputBox().type
        page.barangPage.hancurBarangPage.kodeBarcodeInputBox().type('20001117').wait(3500);
        page.barangPage.hancurBarangPage.simpanDataButton().click();
        page.modalOtorisasi.usernameInputBox().type(`${validuser}`);
        page.modalOtorisasi.passwordInputBox().type(`${validpass}`);
        page.modalOtorisasi.keteranganInputBox().type('Hancur Barang');
        cy.wait(1000);
        page.modalOtorisasi.otorisasiButton().click();
        cy.wait(3000);
    });
});