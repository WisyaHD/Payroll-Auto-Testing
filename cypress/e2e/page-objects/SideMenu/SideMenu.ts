import SideMenuBarang from "./MenuBarang/SideMenuBarang";
import SideMenuLaporan from "./MenuLaporan/SideMenuLaporan";
import SideMenuPenjualan from "./MenuPenjualan/SideMenuPenjualan";
import SideMenuPesanan from "./MenuPesanan/SideMenuPesanan";

export default class SideMenu{
    public sideMenuBarang: SideMenuBarang;
    public sideMenuPenjualan: SideMenuPenjualan;
    public sideMenuLaporan: SideMenuLaporan;
    public sideMenuPesanan: SideMenuPesanan;

    constructor(){
        this.sideMenuBarang = new SideMenuBarang();
        this.sideMenuPenjualan = new SideMenuPenjualan();
        this.sideMenuLaporan = new SideMenuLaporan();
        this.sideMenuPesanan = new SideMenuPesanan();
        
    }
}