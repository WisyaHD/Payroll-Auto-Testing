import SideMenu from '../../page-objects/SideMenu/SideMenu';
import Page from '../../page-objects/Page/Page';
import { LamaPinjam, berat, bunga, jumlah, jumlahHutang, kadar, kodeGroup, namaBarang, namaCustomer, noHp, password, username } from '../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('TransaksiHutangCash', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuHutang.selectMenuHutangParent(url);
        });
        sidemenu.sideMenuHutang.selectMenuTransaksiHutang(true, "-");
        cy.url().should('include', '/transaksi-hutang');
        page.hutangPage.transaksiHutangPage.tambahDataCustomerButton();
        var KodeSalesSelectComboBoxOpts = "BOY{enter}";
        for(var i = 1; i <= 10; i++){
            cy.log(`Barang Ke-${i}`);
            const splitted = KodeSalesSelectComboBoxOpts.split("-")
            const KodeSalesSelectComboBox = `BOY{-${Number(splitted[1]) + i}`
            cy.log(`TambahDataCustomerOpts: ${KodeSalesSelectComboBoxOpts}`);
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.modalDataCustomer.KodeSalesSelectComboBox().type(KodeSalesSelectComboBoxOpts);
        page.hutangPage.transaksiHutangPage.modalDataCustomer.namaCutomerInputBox().type(`${namaCustomer}`);
        page.hutangPage.transaksiHutangPage.modalDataCustomer.noHpInputBox().type(`${noHp}`);
        page.hutangPage.transaksiHutangPage.modalDataCustomer.simpanDataButton().click();
        cy.wait (1000);
        page.hutangPage.transaksiHutangPage.tambahDataBarangButton();
        cy.wait(1000);
        // page.hutangPage.transaksiHutangPage.modalDataBarang.KodeGroupComboBox().type(`${kodeGroup}{downArrow}{enter}`);
        page.hutangPage.transaksiHutangPage.modalDataBarang.NamaBarangInputBox().type(`${namaBarang}`);
        page.hutangPage.transaksiHutangPage.modalDataBarang.BeratBarangInputBox().type(`${berat}`);
        page.hutangPage.transaksiHutangPage.modalDataBarang.KadarInputBox().type(`${kadar}`);
        page.hutangPage.transaksiHutangPage.modalDataBarang.JumlahInputBox().type(`${jumlah}`);
        page.hutangPage.transaksiHutangPage.modalDataBarang.SimpanDataButton().click();
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.tambahDataHutangButton().click({force: true});
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.modalDataHutang.JumlahHutangInputBox().type(`${jumlahHutang}`);
        cy.wait(1000);
        // page.hutangPage.transaksiHutangPage.modalDataHutang.BungaPerBulanInputBox().type(`${bunga}`);
        page.hutangPage.transaksiHutangPage.modalDataHutang.LamaPinjamInputBox().clear().type(`${LamaPinjam}`);
        cy.wait(1000);
        // page.hutangPage.transaksiHutangPage.modalDataHutang.BungaPerBulanInputBox().type(`${bunga}`);
        page.hutangPage.transaksiHutangPage.modalDataHutang.SimpanDataButton(); 
        cy.wait(3000);
        
    }
    })
})