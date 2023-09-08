import SideMenuBase from "../SideMenuBase";

export default class SideMenuPembelian extends SideMenuBase{
    selectMenuPembelianParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, false, 15).click();
    }

    selectMenuTransaksiPembelian(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPembelianParent(url);
        }
        return this.generateSubMenu(1).click({scrollBehavior: false});
    }

    selectMenuLihatPembelian(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPembelianParent(url);
        }
        return this.generateSubMenu(2).click();
    }

    selectMenuHancurPembelian(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPembelianParent(url);
        }
        return this.generateSubMenu(3).click();
    }
}