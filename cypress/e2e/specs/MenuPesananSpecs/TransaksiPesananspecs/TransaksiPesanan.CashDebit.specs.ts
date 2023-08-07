import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { cli } from 'cypress';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
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
        page.pesananPage.transaksiPesananPage.modalDataCustomer.KodeSalesSelectComboBox().type('BOY{enter}');
        page.pesananPage.transaksiPesananPage.modalDataCustomer.namaCutomerInputBox().type('IRVAN');
        page.pesananPage.transaksiPesananPage.modalDataCustomer.noHpInputBox().type('081313979117');
        page.pesananPage.transaksiPesananPage.modalDataCustomer.simpanDataButton().click();
        cy.wait (1000);
        page.pesananPage.transaksiPesananPage.tambahDataBarangButton();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataBarang.KategoriSelectComboBox().type('MT{downArrow}{enter}');
        page.pesananPage.transaksiPesananPage.modalDataBarang.NamaBarangInputBox().type('CINCIN EMAS TUA');
        page.pesananPage.transaksiPesananPage.modalDataBarang.BeratInputBox().type('5');
        page.pesananPage.transaksiPesananPage.modalDataBarang.DeskripsiPesananInputBox().type('CINCIN EMAS TUA');
        page.pesananPage.transaksiPesananPage.modalDataBarang.DeskripsiAddButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.SimpananPesanan().click({force: true});
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiNominalInputBox().type('2000000', {force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.PilihJenisBayarSelectComboBox().type('DEBIT{downArrow}{enter}',{force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.NoRekeningSelectComboBox().type('708956432{downArrow}{enter}',{force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.SisaButtonBox().click({force: true});
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiPlusTransaksiButtonBox().click({force: true});
        cy.wait(1000);
        page.pesananPage.transaksiPesananPage.modalDataSimpananPesanan.DeskripsiBayarSekarangButtonBox().click();
        

    })
})