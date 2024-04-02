import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { alamat, card, jenisBayarDebit, jenisBayarKredit, jenisBayarTransfer, kodeSales, namaCustomer, noHp, noRekening, nominal, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('TransaksiPenjualanTransferDebitCredit', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuPenjualan.selectMenuPenjualanParent(url);
        });
        sidemenu.sideMenuPenjualan.selectMenuTransaksiPenjualan(true, "-");
        cy.url().should('include', '/transaksi-penjualan');
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.tambahDataCustomerButton().click({force: true});
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.KodeSalesSelectComboBox().type(`${kodeSales}{downArrow}{enter}`);
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.namaCutomerInputBox().type(`${namaCustomer}`);
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.noHpInputBox().type(`${noHp}`);
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.alamatCustomerInputBox().type(`${alamat}`);
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.simpanDataButton().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.tambahBarangButton().click({force: true});
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalDataBarang.KodeBarcodeInputBox().type('00002267');
        cy.wait(5000);
        page.penjualanPage.transaksiPenjualanPage.modalDataBarang.SimpananDataButtonBox().click({force: true});
        cy.wait(1500);
        page.penjualanPage.transaksiPenjualanPage.simpananDataPenjualan().click({force: true});
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.PilihJenisBayarSelectComboBox().type(`${jenisBayarTransfer}{downArrow}{enter}`,{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.NoRekeningSelectComboBox().type(`${noRekening}{downArrow}{enter}`,{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.CardNoInputBox().type(`${card}`, {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiNominalInputBox().type(`${nominal}`, {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.PilihJenisBayarSelectComboBox().type(`${jenisBayarDebit}{downArrow}{enter}`,{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.NoRekeningSelectComboBox().type(`${noRekening}{downArrow}{enter}`,{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.CardNoInputBox().type(`${card}`, {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiNominalInputBox().type(`${nominal}`, {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.PilihJenisBayarSelectComboBox().type(`${jenisBayarKredit}{downArrow}{enter}`,{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.NoRekeningSelectComboBox().type(`${noRekening}{downArrow}{enter}`,{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.CardNoInputBox().type(`${card}`, {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.SisaButtonBox().click({force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiBayarSekarangButtonBox().click();
    
        
        
        



        
        

    })
})