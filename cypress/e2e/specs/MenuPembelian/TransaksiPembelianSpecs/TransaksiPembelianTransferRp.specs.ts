import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
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
        page.pembelianPage.transaksiPembelianPage.KodeBarcodeInputBox().type('00000929');
        cy.wait(3000);
        page.pembelianPage.transaksiPembelianPage.TypeKondisiSelectComboBox().type('RP{downArrow}{enter}')
        page.pembelianPage.transaksiPembelianPage.KondisiSelectComboBox().type('MULUS{DownArrow}{enter}');
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.HargaNotaSelectBox().click();
        page.pembelianPage.transaksiPembelianPage.HargaBeliInputBox().click();
        page.pembelianPage.transaksiPembelianPage.SimpanBarangSelect().click();
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.NextSelectBox().click();
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.modalDataCustomer.PilihTypePembayaranSelectComboBox().type('TRANSFER{downArrow}{enter}');
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.modalDataCustomer.PilihNoRekeningSelectComboBox().type('BCA{downArrow}{enter}');
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.modalDataCustomer.NoRekeningPelangganInputBox().type('2707031998');
        cy.wait(1000);
        page.pembelianPage.transaksiPembelianPage.modalSimpanBarang.modalDataCustomer.SelesaiPembelianSelectBox().click();
    })
})