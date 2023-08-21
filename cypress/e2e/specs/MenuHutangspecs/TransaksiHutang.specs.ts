import SideMenu from '../../page-objects/SideMenu/SideMenu';
import Page from '../../page-objects/Page/Page';

const user_id = "helpdesk";
const password = "helpdesknagatechberasputih"
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTransaksiHutang', () => {
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
        page.hutangPage.transaksiHutangPage.modalDataCustomer.namaCutomerInputBox().type('IRVAN');
        page.hutangPage.transaksiHutangPage.modalDataCustomer.noHpInputBox().type('081313979117');
        page.hutangPage.transaksiHutangPage.modalDataCustomer.simpanDataButton().click();
        cy.wait (1000);
        page.hutangPage.transaksiHutangPage.tambahDataBarangButton();
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.modalDataBarang.KodeGroupComboBox().type('MT{downArrow}{enter}');
        page.hutangPage.transaksiHutangPage.modalDataBarang.NamaBarangInputBox().type('CINCIN EMAS TUA');
        page.hutangPage.transaksiHutangPage.modalDataBarang.BeratBarangInputBox().type('5');
        page.hutangPage.transaksiHutangPage.modalDataBarang.KadarInputBox().type('100');
        page.hutangPage.transaksiHutangPage.modalDataBarang.JumlahInputBox().type('1');
        page.hutangPage.transaksiHutangPage.modalDataBarang.SimpanDataButton().click();
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.tambahDataHutangButton().click({force: true});
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.modalDataHutang.JumlahHutangInputBox().type('2500000');
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.modalDataHutang.BungaPerBulanInputBox().type('5');
        page.hutangPage.transaksiHutangPage.modalDataHutang.LamaPinjamInputBox().clear().type('15');
        cy.wait(1000);
        page.hutangPage.transaksiHutangPage.modalDataHutang.BungaPerBulanInputBox().type('5');
        page.hutangPage.transaksiHutangPage.modalDataHutang.SimpanDataButton(); 
        cy.wait(3000);
        
    }
    })
})