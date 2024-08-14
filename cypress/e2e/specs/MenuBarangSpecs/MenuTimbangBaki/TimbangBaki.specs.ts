import SideMenu from '../../../page-objects/SideMenu/SideMenu';
import Page from '../../../page-objects/Page/Page';
import { type } from 'os';
import { Gudang, password, username } from '../../../../constant';

const user_id = `${username}`;
const pass = `${password}`;
const sidemenu = new SideMenu();
const page = new Page();

describe('AccessMenuTimbangBaki', () => {
    beforeEach(() => {
        cy.login(user_id, password);
    });
    it('click menu', () => {
        cy.visit('/dashboard');
        cy.url().should('include', '/dashboard');
        cy.url().then((url: any) => {
            sidemenu.sideMenuBarang.selectMenuBarangParent(url);
        });
        sidemenu.sideMenuBarang.selectMenuTimbangBaki(true, "-");
        cy.url().should('include', '/timbang-baki');
        cy.wait(1000);
        page.barangPage.timbangBakiPage.KodeGudangInputBox().type(`${Gudang}{downArrow}{enter}`);
        page.barangPage.timbangBakiPage.KodeBakiInputBox().type('SEMUA{downArrow}{enter}');
        page.barangPage.timbangBakiPage.MulaiTimbangButtonBox().click();
        page.barangPage.timbangBakiPage.ResetButton().click();
        page.barangPage.timbangBakiPage.MulaiTimbangButtonBox().click();
        page.barangPage.timbangBakiPage.simpanDataButton().click();
        cy.wait(3000);

    });
});