import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTransaksiPembelian', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuPembelian.selectMenuPembelianParent(url);
        });
        sidemenu.sideMenuPembelian.selectMenuTransaksiPembelian(true, "-");
        cy.url().should('include', '/transaksi-pembelian');
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.KodeBarcodeInputBox().type('00001081  ');
        cy.wait(3000);
        page.pembelianPage.transaksiPembelianPage.TypeKondisiSelectComboBox().type('RP{downArrow}{enter}')
        page.pembelianPage.transaksiPembelianPage.KondisiSelectComboBox().type('MULUS{DownArrow}{enter}');
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.HargaNotaSelectBox().click();
        page.pembelianPage.transaksiPembelianPage.HargaBeliInputBox().click();
        page.pembelianPage.transaksiPembelianPage.SimpanBarangSelect().click();
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.NextSelectBox().click();
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.modalDataCustomer.SelesaiPembelianSelectBox().click();
    })
})