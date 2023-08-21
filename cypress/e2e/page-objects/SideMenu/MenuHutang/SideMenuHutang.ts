import SideMenuBase from "../SideMenuBase";

export default class SideMenuHutang extends SideMenuBase{
    selectMenuHutangParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, false, 16).click();
    }

    selectMenuTransaksiHutang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuHutangParent(url);
        }
        return this.generateSubMenu(1).click({scrollBehavior: false});
    }

    selectMenuLihatHutang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuHutangParent(url);
        }
        return this.generateSubMenu(2).click();
    }

    selectMenuBatalHutangLunas(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuHutangParent(url);
        }
        return this.generateSubMenu(3).click();
    }

   
}