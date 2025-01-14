import SideMenuBase from "../SideMenuBase";

export default class SideMenuPesanan extends SideMenuBase{
    selectMenuPesananParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, true, 14).click();
    }

    selectMenuTransaksiPesanan(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPesananParent(url);
        }
        return this.generateSubMenu(1).click({scrollBehavior: false});
    }

    selectAmbilBarangContoh(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPesananParent(url);
        }
        return this.generateSubMenu(2).click();
    }

    selectMenuLihatPesanan(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuPesananParent(url);
        }
        return this.generateSubMenu(3).click();
    }

   
}