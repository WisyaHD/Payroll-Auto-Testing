import SideMenuBarang from "./MenuBarang/SideMenuBarang";
import SideMenuLaporan from "./MenuLaporan/SideMenuLaporan";
import SideMenuPenjualan from "./MenuPenjualan/SideMenuPenjualan";
import SideMenuPesanan from "./MenuPesanan/SideMenuPesanan";
import SideMenuPembelian from "./MenuPembelian/SideMenuPembelian";
import SideMenuService from "./MenuService/SideMenuService";
import SideMenuHutang from "./MenuHutang/SideMenuHutang";



export default class SideMenu{
    public sideMenuBarang: SideMenuBarang;
    public sideMenuPenjualan: SideMenuPenjualan;
    public sideMenuLaporan: SideMenuLaporan;
    public sideMenuPesanan: SideMenuPesanan;
    public sideMenuPembelian: SideMenuPembelian;
    public sideMenuService: SideMenuService;
    public sideMenuHutang: SideMenuHutang;

    constructor(){
        this.sideMenuBarang = new SideMenuBarang();
        this.sideMenuPenjualan = new SideMenuPenjualan();
        this.sideMenuLaporan = new SideMenuLaporan();
        this.sideMenuPesanan = new SideMenuPesanan();
        this.sideMenuPembelian = new SideMenuPembelian();
        this.sideMenuService = new SideMenuService();
        this.sideMenuHutang = new SideMenuHutang();
        
    }
}