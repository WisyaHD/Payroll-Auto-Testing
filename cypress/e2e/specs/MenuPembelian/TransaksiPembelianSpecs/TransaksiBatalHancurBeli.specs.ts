import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('TransaksiBatalHancurBeli', () => {
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
        page.pembelianPage.transaksiPembelianPage.KodeBarcodeInputBox().type('00001685');
        cy.wait(3000);
        page.pembelianPage.transaksiPembelianPage.TypeKondisiSelectComboBox().type('PRESENTASE{downArrow}{enter}')
        page.pembelianPage.transaksiPembelianPage.KondisiSelectComboBox().type('MULUS{DownArrow}{enter}');
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.HargaNotaSelectBox().click();
        page.pembelianPage.transaksiPembelianPage.HargaBeliInputBox().click();
        page.pembelianPage.transaksiPembelianPage.SimpanBarangSelect().click();
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.NextSelectBox().click();
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.modalDataCustomer.SelesaiPembelianSelectBox().click();
        cy.wait(1000);
        sidemenu.sideMenuPembelian.selectMenuLihatPembelian(true, "-");
        cy.url().should('include', '/lihat-pembelian');
        page.pembelianPage.lihatPembelianPage.BatalBeliSelectBox().click();
        page.pembelianPage.lihatPembelianPage.modalBatalBeli.AlasanBatalBeliSelectComboBox().type('PATAH{downArrow}{enter}');
        page.pembelianPage.lihatPembelianPage.modalBatalBeli.BatalBeliSelectBox().click();
        page.modalOtorisasi.usernameInputBox().type(user_id);
        page.modalOtorisasi.passwordInputBox().type(password);
        page.modalOtorisasi.keteranganInputBox().type('Batal Beli');
        page.modalOtorisasi.otorasisiBeliButton().click();
        cy.wait(3000);
        sidemenu.sideMenuPembelian.selectMenuHancurPembelian(true, "-");
        cy.url().should('include', '/hancur-pembelian');
        page.pembelianPage.hancurPembelianPage.CariPembelianSelectBox().click();
        page.pembelianPage.hancurPembelianPage.HancurPembelianSelectBox().click();
        page.pembelianPage.hancurPembelianPage.ConfirmHancurSelectBox().click();
    })
})