import BarangPage from "./BarangPage/BarangPage";
import LaporanPage from "./LaporanPage/LaporanPage";
import PenjualanPage from "./PenjualanPage/PenjualanPage";

export default class Page{
    public barangPage: BarangPage;
    public penjualanPage: PenjualanPage;
    public laporanPage: LaporanPage

    constructor(){
        this.barangPage = new BarangPage();
        this.penjualanPage = new PenjualanPage();
        this.laporanPage = new LaporanPage();
    }
}