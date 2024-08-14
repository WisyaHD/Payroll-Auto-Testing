import BarangPage from "./BarangPage/BarangPage";
import LaporanPage from "./LaporanPage/LaporanPage";
import ModalOtorisasi from "./ModalOtorisasi/ModalOtorisasi";
import PesananPage from "./PesananPage/PesananPage";
import PenjualanPage from "./PenjualanPage/PenjualanPage";
import PembelianPage from "./PembelianPage/PembelianPage";
import ServicePage from "./ServicePage/ServicePage";
import HutangPage from "./HutangPage/HutangPage";
import ModalSimpananPesanan from "./PesananPage/TransaksiPesananPage/ModalSimpananPesanan/ModalSimpananPesanan";
import ModalSimpananPenjualan from "./PenjualanPage/TransaksiPenjualanPage/ModalSimpananPenjualan/SimpananPenjualan";
import ModalSimpanBarang from "./PembelianPage/TransaksiPembelianPage/ModalSimpanBarang/ModalSimpanBarang";

export default class Page{
    public barangPage: BarangPage;
    public penjualanPage: PenjualanPage;
    public laporanPage: LaporanPage;
    public pesananPage: PesananPage;
    public pembelianPage: PembelianPage;
    public servicePage: ServicePage;
    public hutangPage: HutangPage;

    // Modal Otorisasi
    public modalOtorisasi: ModalOtorisasi;
    public modalSimpananPesanan: ModalSimpananPesanan;
    public modalSimpananPenjualan: ModalSimpananPenjualan;
    public modalSimpanBarang: ModalSimpanBarang;


    constructor(){
        this.barangPage = new BarangPage();
        this.penjualanPage = new PenjualanPage();
        this.laporanPage = new LaporanPage();
        this.pesananPage = new PesananPage(); 
        this.pembelianPage = new PembelianPage();
        this.servicePage = new ServicePage();
        this.hutangPage = new HutangPage();

        // Modal Otorisasi Register
        this.modalOtorisasi = new ModalOtorisasi();
        this.modalSimpananPesanan = new ModalSimpananPesanan();
        this.modalSimpananPenjualan = new ModalSimpananPenjualan();
        this.modalSimpanBarang = new ModalSimpanBarang();
        
    }
}