import SideMenuBase from "../SideMenuBase";

export default class SideMenuPenjualan extends SideMenuBase{
    selectMenuPenjualanParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, false, 10).click();
    }

    selectMenuTransaksiPenjualan(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPenjualanParent(url);
        }
        return this.generateSubMenu(1).click({scrollBehavior: false});
    }

    selectMenuLihatPenjualan(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPenjualanParent(url);
        }
        return this.generateSubMenu(2).click();
    }

    selectMenuBatalPenjualan(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPenjualanParent(url);
        }
        return this.generateSubMenu(3).click();
    }

    selectMenuLihatTitipan(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPenjualanParent(url);
        }
        return this.generateSubMenu(4).click();
    }
}