import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { DeskripsiNominal, bunga, card, jenisBayarDebit, jenisBayarKredit, noRekening, nominal, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuLihatHutang', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuHutang.selectMenuHutangParent(url);
        });
        sidemenu.sideMenuHutang.selectMenuLihatHutang(true, "-");
        cy.url().should('include', '/lihat-hutang');
        page.hutangPage.lihatHutangPage.FilterHutangSelectBox().click({force: true});
        page.hutangPage.lihatHutangPage.TanggalDariDatePickerInputBox().click();
        cy.get(':nth-child(1) > .react-datepicker__day--001').click();
        page.hutangPage.lihatHutangPage.CariHutangSelectBox().click({force: true});
        page.hutangPage.lihatHutangPage.PelunasanButton().click({force: true});
        cy.wait(1000);
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.PelunasanHutangButton().click();
        cy.wait(1000);
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.DeskripsiNominalInputBox().type(`${DeskripsiNominal}`, {force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.DeskripsiTambahTransaksiButtonBox().click({force: true});
        cy.wait(1000);
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.PilihJenisBayarSelectComboBox().type(`${jenisBayarDebit}{downArrow}{enter}`,{force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.NoRekeningSelectComboBox().type(`${noRekening}{downArrow}{enter}`,{force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.CardNoInputBox().type(`${card}`, {force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.FeeInputBox().type(`${bunga}`, {force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.SisaButtonBox().click({force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.DeskripsiTambahTransaksiButtonBox().click();
        cy.wait(1000);
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.DeskripsiBayarSekarangButtonBox().click();
    })
})