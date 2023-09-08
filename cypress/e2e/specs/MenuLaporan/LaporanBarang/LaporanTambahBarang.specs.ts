import SideMenu from "../../../page-objects/SideMenu/SideMenu";
import Page from "../../../page-objects/Page/Page";
import { password, username } from "../../../../constant";

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('Access Laporan Tambah Barang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('access pertama', () => {
        cy.visit('/dashboard')
        cy.url().should('include', '/dashboard');
    });
    it('menuju laporan tambah barang lalu click cari', () => {
        cy.visit('/dashboard')
        cy.wait(5000);
        cy.url().then((url: any) => {
            sidemenu.sideMenuLaporan.selectMenuLaporanParent(url);
            sidemenu.sideMenuLaporan.laporanBarangSideMenu.selectMenuLaporanBarangParent(url);
        })
        sidemenu.sideMenuLaporan.laporanBarangSideMenu.selectLaporanTambahBarang(true, "-");
        cy.wait(5000);
        cy.url().should('include', '/laporan-tambah-barang');
        page.laporanPage.laporanBarangPage.laporanTambahBarangPage.lihatLaporanButton();
        cy.wait(6000);
        page.laporanPage.laporanBarangPage.laporanTambahBarangPage.exportPdfButton();
    });
    it('click download pdf dan membaca judul', () => {
        cy.task('readPdf', './cypress/downloads/LAPORAN BARANG DETAIL.pdf').should('include', 'TAMBAH BARANG');
    });
})