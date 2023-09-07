import SideMenu from "../../../page-objects/SideMenu/SideMenu";
import Page from "../../../page-objects/Page/Page";
import { password, username } from "../../../../constant";

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuDataBarang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard')
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuLaporan.selectMenuLaporanParent(url);
            sidemenu.sideMenuLaporan.laporanBarangSideMenu.selectMenuLaporanBarangParent(url);
        })
    });
    it('click cari', () => {
        cy.wait(5000);
        sidemenu.sideMenuLaporan.laporanBarangSideMenu.selectLaporanTambahBarang(true, "-");
        page.laporanPage.laporanBarangPage.laporanTambahBarangPage.lihatLaporanButton();
    });
    it('click download pdf dan reading', () => {
        cy.wait(6000);
        page.laporanPage.laporanBarangPage.laporanTambahBarangPage.exportPdfButton();
        cy.task('readPdf', './cypress/downloads/LAPORAN BARANG DETAIL.pdf').should('include', 'TAMBAH BARANG');
    })
})