import SideMenuBase from "../../SideMenuBase";

export default class LaporanBarangSideMenu extends SideMenuBase {
    selectMenuLaporanBarangParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateSubMenuLaporan(2, false, false, get).click({force:true});
    }

    selectLaporanBarangDetail(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(1).click({force: true});
    }

    selectLaporanAcc(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(2).click({force: true});
    }

    selectLaporanTambahBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(3).click({force: true});
    }

    selectLaporanTimbangBaki(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(4).click({force: true});
    }

    selectLaporanHancurBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(5).click({force: true});
    }

    selectLaporanPindahBarang(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(6).click({force: true});
    }

    selectLaporanBarangSummary(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuLaporanBarangParent(url);
        }
        this.generateChildSubMenu(6).click({force: true});
    }
}