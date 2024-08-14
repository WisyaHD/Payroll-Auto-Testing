import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { DeskripsiNominal, berat, deskripsiPesanan, jenisBayarDebit, kodeSales, namaBarang, namaCustomer, noHp, noRekening, ongkos, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTransaksiService', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuService.selectMenuServiceParent(url);
        });
        sidemenu.sideMenuService.selectMenuTransaksiService(true, "-");
        cy.url().should('include', '/transaksi-service');
        cy.wait(1000);
        page.servicePage.transaksiServicePage.tambahDataCustomerButton();
        cy.wait(1000);
        page.servicePage.transaksiServicePage.modalDataCustomer.KodeSalesSelectComboBox().type(`${kodeSales}{enter}`);
        page.servicePage.transaksiServicePage.modalDataCustomer.namaCutomerInputBox().type(`${namaCustomer}`);
        page.servicePage.transaksiServicePage.modalDataCustomer.noHpInputBox().type(`${noHp}`);
        page.servicePage.transaksiServicePage.modalDataCustomer.simpanDataButton().click();
        cy.wait (1000);
        page.servicePage.transaksiServicePage.tambahDataBarangButton();
        page.servicePage.transaksiServicePage.modalDataBarang.NamaBarangInputBox().type(`${namaBarang}`);
        page.servicePage.transaksiServicePage.modalDataBarang.BeratBarangInputBox().type(`${berat}`);
        page.servicePage.transaksiServicePage.modalDataBarang.OngkosInputBox().type(`${ongkos}`);
        page.servicePage.transaksiServicePage.modalDataBarang.DeskripsiInputBox().type(`${deskripsiPesanan}`);
        page.servicePage.transaksiServicePage.modalDataBarang.SimpanDataButton().click();
        cy.wait(1000);
        page.servicePage.transaksiServicePage.SimpanDataServiceButton().click({force: true});
        cy.wait(1000);
        page.servicePage.transaksiServicePage.modalSimpananService.DeskripsiNominalInputBox().type(`${DeskripsiNominal}`, {force: true});
        page.servicePage.transaksiServicePage.modalSimpananService.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.servicePage.transaksiServicePage.modalSimpananService.PilihJenisBayarSelectComboBox().type(`${jenisBayarDebit}{downArrow}{enter}`,{force: true});
        page.servicePage.transaksiServicePage.modalSimpananService.NoRekeningSelectComboBox().type(`${noRekening}{downArrow}{enter}`,{force: true});
        page.servicePage.transaksiServicePage.modalSimpananService.SisaButtonBox().click({force: true});
        page.servicePage.transaksiServicePage.modalSimpananService.DeskripsiPlusTransaksiButtonBox().click({force: true});
        cy.wait(1000);
        page.servicePage.transaksiServicePage.modalSimpananService.DeskripsiBayarSekarangButtonBox().click();

    })
})