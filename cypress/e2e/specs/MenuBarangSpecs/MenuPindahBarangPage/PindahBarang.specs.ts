import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { type } from 'os';
import { kodeBarcode, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuPindahBarang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuPindahBarang(true, "-");
        cy.url().should('include', '/pindah-barang');
        cy.wait(1000);
        page.barangPage.pindahBarangPage.KodeGudangInputBox().type('TOKO-TOKO{downArrow}{enter}');
        page.barangPage.pindahBarangPage.BakiTujuanInputBox().type('BK-GL{downArrow}{enter}');
        page.barangPage.pindahBarangPage.kodeBarcodeInputBox().type('20001116').wait(3500);
        page.barangPage.pindahBarangPage.simpanDataButton().click();
        cy.wait(3000);


    });
});