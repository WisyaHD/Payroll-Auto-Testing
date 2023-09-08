import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('Full Access Tambah Barang With Looping', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('access pertama', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
    });
    it('menuju menu tambah barang', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuTambahBarang(true, "-");
        cy.url().should('include', '/tambah-data-barang');
        cy.wait(2000);
    });

    it('langsung full access tambah barang dengan pengulangan 10x', () => {
        cy.visit('/tambah-data-barang');
        cy.url().should('include', '/tambah-data-barang');
        cy.wait(2000);
        page.barangPage.tambahBarangPage.kodeGroupSelectBox().type('MT{downArrow}{enter}');
        page.barangPage.tambahBarangPage.kodeJenisSelectBox().type('GLMT{downArrow}{enter}');
        cy.wait(3000);
        page.barangPage.tambahBarangPage.kodeBakiSelectBox().type('BK-GL{downArrow}{enter}');
        var kode_intern = "KI-211";
        for(var i = 1; i <= 10; i++){
            cy.log(`Barang Ke-${i}`);
            const splitted = kode_intern.split("-")
            const kodeInternOpts = `KI-${Number(splitted[1]) + i}`
            cy.log(`Kode Intern: ${kodeInternOpts}`);
            cy.wait(1000);
            page.barangPage.tambahBarangPage.tambahBarangButton().click();
            page.barangPage.tambahBarangPage.modalTambahBarang.kodeInternInputBox().type(kodeInternOpts);
            page.barangPage.tambahBarangPage.modalTambahBarang.beratAsliInputBox().type('2.5');
            page.barangPage.tambahBarangPage.modalTambahBarang.beratInputBox().clear().type('3');
            page.barangPage.tambahBarangPage.modalTambahBarang.kadarCetakInputBox().type('100');
            page.barangPage.tambahBarangPage.modalTambahBarang.namaAtributInputBox().type('ACC-CINCIN');
            page.barangPage.tambahBarangPage.modalTambahBarang.beratAtributInputBox().type('0.5');
            page.barangPage.tambahBarangPage.modalTambahBarang.hargaAtributInputBox().type('200000');
            page.barangPage.tambahBarangPage.modalTambahBarang.beratPlastikInput().type('0.2');
            page.barangPage.tambahBarangPage.modalTambahBarang.simpanDataButton().click();
            cy.wait(3000);
        }
    })
})