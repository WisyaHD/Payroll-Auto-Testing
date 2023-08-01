import DataBarangPage from "./DataBarangPage/DataBarangPage"
import TambahBarangPage from "./TambahBarangPage/TambahBarangPage";
import HancurBarangPage from "./HancurBarangPage/HancurBarangPage";
import PindahBarangPage from "./PindahBarangPage/PindahBarangPage";
import PindahBarangSatuBakiPage from "./PindahBarangSatuBakiPage/PindahBarangSatuBakiPage";
import TimbangBakiPage from "./TimbangBakiPage/TimbangBakiPage";
import TambahDanAmbilStockAksesoris from "./TambahDanAmbilStockAksesoris/TambahDanAmbilStockAksesoris";

export default class BarangPage{
    public dataBarangPage: DataBarangPage;
    public tambahBarangPage: TambahBarangPage;
    public hancurBarangPage: HancurBarangPage;
    public pindahBarangPage: PindahBarangPage;  
    public pindahBarangSatuBakiPage: PindahBarangSatuBakiPage;
    public timbangBakiPage: TimbangBakiPage;
    public tambahDanAmbilStockAksesorisPage: TambahDanAmbilStockAksesoris;

    constructor(){
        this.dataBarangPage = new DataBarangPage();
        this.tambahBarangPage = new TambahBarangPage();
        this.hancurBarangPage = new HancurBarangPage();
        this.pindahBarangPage = new PindahBarangPage();
        this.pindahBarangSatuBakiPage = new PindahBarangSatuBakiPage();
        this.timbangBakiPage = new TimbangBakiPage();
        this.tambahDanAmbilStockAksesorisPage = new TambahDanAmbilStockAksesoris();
        
    }
}