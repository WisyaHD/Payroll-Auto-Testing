import SideMenuBase from "../../SideMenuBase";


export default class LaporanPesananSideMenu extends SideMenuBase{
    selectMenuLaporanPesanan(){
        this.generateSubMenuLaporan(2, true, false).click();
    }
}