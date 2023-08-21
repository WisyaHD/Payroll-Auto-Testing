import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTransaksiPenjualan', () => {
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
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.KodeSalesSelectComboBox().type('Boy{downArrow}{enter}');
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.namaCutomerInputBox().type('ALFI');
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.noHpInputBox().type('0812198328');
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.alamatCustomerInputBox().type('cilengkrang');
        page.penjualanPage.transaksiPenjualanPage.modalDataCustomer.simpanDataButton().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.tambahBarangButton().click({force: true});
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalDataBarang.KodeBarcodeInputBox().type('00000930');
        cy.wait(5000);
        page.penjualanPage.transaksiPenjualanPage.modalDataBarang.SimpananDataButtonBox().click({force: true});
        cy.wait(1500);
        page.penjualanPage.transaksiPenjualanPage.simpananDataPenjualan().click({force: true});
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiNominalInputBox().type('1000000', {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.PilihJenisBayarSelectComboBox().type('TRANSFER{downArrow}{enter}',{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.NoRekeningSelectComboBox().type('708956432{downArrow}{enter}',{force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.CardNoInputBox().type('89423', {force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.SisaButtonBox().click({force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiBayarSekarangButtonBox().click();
    
        
        
        



        
        

    })
})