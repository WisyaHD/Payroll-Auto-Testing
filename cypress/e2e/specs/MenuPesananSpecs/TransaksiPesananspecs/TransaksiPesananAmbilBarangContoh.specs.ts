import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { berat, deskripsiPesanan, kategori, kodeBarcode, kodeSales, namaBarang, namaCustomer, noHp, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('TransaksiPesananAmbilBarangContoh', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuPesanan.selectMenuPesananParent(url);
        });
        sidemenu.sideMenuPesanan.selectMenuTransaksiPesanan(true, "-");
        cy.url().should('include', '/transaksi-pesanan');
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.tambahDataCustomerButton();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataCustomer.KodeSalesSelectComboBox().type(`${kodeSales}{enter}`);
        page.pesananPage.transaksiPesananPage.modalDataCustomer.namaCutomerInputBox().type(`${namaCustomer}`);
        page.pesananPage.transaksiPesananPage.modalDataCustomer.noHpInputBox().type(`${noHp}`);
        page.pesananPage.transaksiPesananPage.modalDataCustomer.simpanDataButton().click();
        cy.wait (1000);
        page.pesananPage.transaksiPesananPage.tambahDataBarangButton();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataBarang.KategoriSelectComboBox().type(`${kategori}{downArrow}{enter}`);
        page.pesananPage.transaksiPesananPage.modalDataBarang.NamaBarangInputBox().type(`${namaBarang}`);
        page.pesananPage.transaksiPesananPage.modalDataBarang.BeratInputBox().type(`${berat}`);
        page.pesananPage.transaksiPesananPage.modalDataBarang.DeskripsiPesananInputBox().type(`${deskripsiPesanan}`);
        page.pesananPage.transaksiPesananPage.modalDataBarang.DeskripsiDariTokoButtonBox().click();
        page.pesananPage.transaksiPesananPage.modalDataBarang.KodeBarcodeInputBox().type(`${kodeBarcode}`, {force: true});
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataBarang.DeskripsiAddButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.SimpananPesanan().click({force: true});
        cy.wait(1000);
        // page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiNominalInputBox().type('200000', {force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.SisaButtonBox().click({force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiBayarSekarangButtonBox().click();
        cy.wait(1000);
        
    })
})