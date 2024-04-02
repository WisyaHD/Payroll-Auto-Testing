import LaporanTambahBarangPage from "./LaporanTambahBarangPage/LaporanTambahBarangPage";
import LaporanBarangDetailPage from "./LaporanBarangDetail/LaporanBarangDetailPage";
import LaporanBarangAccPage from "./LaporanBarangACCPage/LaporanBarangACCPage";
import LaporanTimbangBakiPage from "./LaporanTimbangBakiPage/LaporanTimbangBakiPage";


export default class LaporanBarangPage{
    public laporanTambahBarangPage: LaporanTambahBarangPage;
    public laporanBarangDetailPage: LaporanBarangDetailPage;
    public laporanBarangAccPage: LaporanBarangAccPage;
    public laporanTimbangBakiPage: LaporanTimbangBakiPage
    constructor(){
        this.laporanTambahBarangPage = new LaporanTambahBarangPage();
        this.laporanBarangDetailPage = new LaporanBarangDetailPage();
        this.laporanBarangAccPage = new LaporanBarangDetailPage();
        this.laporanTimbangBakiPage = new LaporanTimbangBakiPage();
    }
}