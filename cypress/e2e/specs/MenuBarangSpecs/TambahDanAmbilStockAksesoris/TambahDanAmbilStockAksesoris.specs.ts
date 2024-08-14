import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { type } from 'os';
import { password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTambahDanAmbilStockAksesoris', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuTambahDanAmbilStockAksesoris(true, "-");
        cy.url().should('include', '/tambah-dan-ambil-stock-aksesoris');
        cy.wait(1000);
        page.barangPage.tambahDanAmbilStockAksesorisPage.KodeBarcodeInputBox().type('00000916').wait(2000);
        page.barangPage.tambahDanAmbilStockAksesorisPage.TypeInputBox().type('TAMBAH{downArrow}{enter}');
        page.barangPage.tambahDanAmbilStockAksesorisPage.TambahStockInputBox().type('5');
        page.barangPage.tambahDanAmbilStockAksesorisPage.simpanDataButton().click();
        cy.wait(3000);
        page.barangPage.tambahDanAmbilStockAksesorisPage.KodeBarcodeInputBox().type('00000916').wait(2000);
        page.barangPage.tambahDanAmbilStockAksesorisPage.TypeInputBox().type('AMBIL{downArrow}{enter}');
        page.barangPage.tambahDanAmbilStockAksesorisPage.TambahStockInputBox().type('5');
        page.barangPage.tambahDanAmbilStockAksesorisPage.simpanDataButton().click();
        cy.wait(3000);

    });
});