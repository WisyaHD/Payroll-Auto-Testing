import SideMenuBase from "../SideMenuBase";

export default class SideMenuBarang extends SideMenuBase{
    selectMenuBarangParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, true, 6).click();
    }

    selectMenuTambahBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(1).click();
    }

    selectMenuDataBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(2).click();
    }

    selectMenuHancurBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(3).click();
    }

    selectMenuPindahBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(4).click();
    }

    selectPindahBarangSatuBaki(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(5).click();
    }

    selectMenuTimbangBaki(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(6).click();
    }

    selectMenuTambahDanAmbilStockAksesoris(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuBarangParent(url);
        }
        return this.generateSubMenu(6).click();
    }
}