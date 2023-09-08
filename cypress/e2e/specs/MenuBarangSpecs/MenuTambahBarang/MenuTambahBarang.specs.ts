import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { berat, beratPlastik, hargaAtribut, kadar, kodeBaki, kodeGroup, kodeIntern, kodeJenis, namaAtribut, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('Full Access Tambah Barang', () => {
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
    it('full access tambah barang', () => {
        cy.visit('/tambah-data-barang');
        cy.url().should('include', '/tambah-data-barang');
        cy.wait(2000);
        page.barangPage.tambahBarangPage.kodeGroupSelectBox().type('MT{downArrow}{enter}');
        page.barangPage.tambahBarangPage.kodeJenisSelectBox().type('GLMT{downArrow}{enter}');
        cy.wait(3000);
        page.barangPage.tambahBarangPage.kodeBakiSelectBox().type('BK-GL{downArrow}{enter}');
        page.barangPage.tambahBarangPage.tambahBarangButton().click();
        page.barangPage.tambahBarangPage.modalTambahBarang.kodeInternInputBox().type(`${kodeIntern}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.beratAsliInputBox().type(`${berat}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.beratInputBox().clear().type(`${berat}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.kadarCetakInputBox().type(`${kadar}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.namaAtributInputBox().type(`${namaAtribut}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.beratAtributInputBox().type(`${berat}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.hargaAtributInputBox().type(hargaAtribut);
        page.barangPage.tambahBarangPage.modalTambahBarang.beratPlastikInput().type(`${beratPlastik}`);
        page.barangPage.tambahBarangPage.modalTambahBarang.simpanDataButton().click();
    })
})