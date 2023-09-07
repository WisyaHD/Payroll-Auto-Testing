import SideMenu from '../../page-objects/SideMenu/SideMenu';
import Page from '../../page-objects/Page/Page';
import { DeskripsiNominal, berat, card, deskripsiPesanan, jenisBayarKredit, kategori, kodeBarang, kodeSales, namaBarang, namaCustomer, noHp, noRekening, password, username } from '../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTransaksiPesanan', () => {
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
        page.pesananPage.transaksiPesananPage.modalDataBarang.DeskripsiAddButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.SimpananPesanan().click({force: true});
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiNominalInputBox().type(`${DeskripsiNominal}`, {force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.PilihJenisBayarSelectComboBox().type(`${jenisBayarKredit}{downArrow}{enter}`,{force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.NoRekeningSelectComboBox().type(`${noRekening}{downArrow}{enter}`,{force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.CardNoInputBox().type(`${card}`, {force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.SisaButtonBox().click({force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiPlusTransaksiButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiBayarSekarangButtonBox().click();
        

    })
})