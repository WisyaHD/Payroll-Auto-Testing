import BarangPage from "./BarangPage/BarangPage";
import LaporanPage from "./LaporanPage/LaporanPage";
import ModalOtorisasi from "./ModalOtorisasi/ModalOtorisasi";
import PesananPage from "./PesananPage/PesananPage";
import PenjualanPage from "./PenjualanPage/PenjualanPage";
import ModalSimpananPesanan from "./PesananPage/TransaksiPesananPage/ModalSimpananPesanan/ModalSimpananPesanan";
import ModalSimpananPenjualan from "./PenjualanPage/TransaksiPenjualanPage/ModalSimpananPenjualan/SimpananPenjualan";

export default class Page{
    public barangPage: BarangPage;
    public penjualanPage: PenjualanPage;
    public laporanPage: LaporanPage;
    public pesananPage: PesananPage;

    // Modal Otorisasi
    public modalOtorisasi: ModalOtorisasi;
    public modalSimpananPesanan: ModalSimpananPesanan;
    public modalSimpananPenjualan: ModalSimpananPenjualan

    constructor(){
        this.barangPage = new BarangPage();
        this.penjualanPage = new PenjualanPage();
        this.laporanPage = new LaporanPage();
        this.pesananPage = new PesananPage(); 

        // Modal Otorisasi Register
        this.modalOtorisasi = new ModalOtorisasi();
        this.modalSimpananPesanan = new ModalSimpananPesanan();
        this.modalSimpananPenjualan = new ModalSimpananPenjualan();
    }
}