import SideMenuBase from "../SideMenuBase";

export default class SideMenuBarang extends SideMenuBase{
    selectMenuBarangParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, true, 7).click({scrollBehavior: false});
    }

    selectMenuTambahBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(1).click({scrollBehavior: false});
    }

    selectMenuDataBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(2).click({scrollBehavior: false});
    }

    selectMenuHancurBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(5).click({scrollBehavior: false});
    }

    selectMenuPindahBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(6).click({scrollBehavior: false});
    }

    selectMenuPindahBarangSatuBaki(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(7).click({scrollBehavior: false});
    }

    selectMenuTimbangBaki(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(8).click({scrollBehavior: false});
    }

    selectMenuTambahDanAmbilStockAksesoris(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(9).click({scrollBehavior: false});
    }
}