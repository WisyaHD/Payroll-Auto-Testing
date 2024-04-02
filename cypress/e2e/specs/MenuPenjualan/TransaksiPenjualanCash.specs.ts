import SideMenu from '../../page-objects/SideMenu/SideMenu';
import Page from '../../page-objects/Page/Page';
import { alamat, kodeSales, namaCustomer, noHp, password, username } from '../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

let kode_barcode: string;

describe('TransaksiPenjualanCash', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuDataBarang(true, "-")
        cy.url().should('include', '/data-barang');
        cy.wait(1000);
        cy.get('tbody > :nth-child(1) > :nth-child(2)').then($value => {
            kode_barcode = `${$value.text()}`;
            cy.log(($value.text()));
        })
        cy.visit('/transaksi-penjualan');
        cy.url().should('include', '/transaksi-penjualan')
        cy.wait(1500);
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
        page.penjualanPage.transaksiPenjualanPage.modalDataBarang.KodeBarcodeInputBox().type(`${kode_barcode}` , {force: true});
        cy.wait(3000);
        page.penjualanPage.transaksiPenjualanPage.modalDataBarang.SimpananDataButtonBox().click({force: true});
        cy.wait(1500);
        page.penjualanPage.transaksiPenjualanPage.simpananDataPenjualan().click({force: true});
        cy.wait(1500);  
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.SisaButtonBox().click({force: true});
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiTambahTransaksiButtonBox().click({force: true});
        cy.wait(1000);
        page.penjualanPage.transaksiPenjualanPage.modalSimpananPenjualan.DeskripsiBayarSekarangButtonBox().click({force: true});
        
    
        
        
        



        
        

    })
})