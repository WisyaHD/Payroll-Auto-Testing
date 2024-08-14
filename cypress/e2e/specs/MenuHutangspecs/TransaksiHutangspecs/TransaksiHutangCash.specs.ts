import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('TransaksiHutangCash', () => {
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
        cy.get(':nth-child(1) > .react-datepicker__day--001').click({force: true});
        page.hutangPage.lihatHutangPage.CariHutangSelectBox().click({force: true});
        page.hutangPage.lihatHutangPage.PelunasanButton().click({force: true});
        cy.wait(1000);
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.PelunasanHutangButton().click();
        cy.wait(1000);
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.SisaButtonBox().click({force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.DeskripsiTambahTransaksiButtonBox().click({force: true});
        page.hutangPage.lihatHutangPage.modalPelunasanHutang.modalPelunasanHutangPembayaran.DeskripsiBayarSekarangButtonBox().click({force: true});
    })
})