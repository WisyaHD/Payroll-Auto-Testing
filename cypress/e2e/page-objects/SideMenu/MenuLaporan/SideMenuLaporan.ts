import SideMenuBase from "../SideMenuBase";

export default class SideMenuLaporan extends SideMenuBase{
    selectMenuLaporanParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, false, 23).click();
    }

    selectMenuLaporanBarangParent(){
        
    }
}