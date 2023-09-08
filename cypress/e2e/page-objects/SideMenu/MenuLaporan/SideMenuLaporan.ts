import SideMenuBase from "../SideMenuBase";
import LaporanBarangSideMenu from "./LaporanBarang/LaporanBarangSideMenu";
import LaporanPesananSideMenu from "./LaporanPesanan/LaporanPesananSideMenu";

export default class SideMenuLaporan extends SideMenuBase{
    public laporanBarangSideMenu: LaporanBarangSideMenu;
    public laporanPesananSideMenu: LaporanPesananSideMenu;

    constructor(){
        super()
        this.laporanBarangSideMenu = new LaporanBarangSideMenu();
        this.laporanPesananSideMenu = new LaporanPesananSideMenu();
    }
    
    selectMenuLaporanParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, false, 24).click();
    }
}