import SideMenuBarang from "./MenuBarang/SideMenuBarang";
import SideMenuPenjualan from "./MenuPenjualan/SideMenuPenjualan";

export default class SideMenu{
    public sideMenuBarang: SideMenuBarang;
    public sideMenuPenjualan: SideMenuPenjualan;

    constructor(){
        this.sideMenuBarang = new SideMenuBarang();
        this.sideMenuPenjualan = new SideMenuPenjualan();
    }
}