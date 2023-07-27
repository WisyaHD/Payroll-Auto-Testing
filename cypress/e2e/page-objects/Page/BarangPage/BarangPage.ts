import DataBarangPage from "./DataBarangPage/DataBarangPage"
import TambahBarangPage from "./TambahBarangPage/TambahBarangPage";

export default class BarangPage{
    public dataBarangPage: DataBarangPage;
    public tambahBarangPage: TambahBarangPage;

    constructor(){
        this.dataBarangPage = new DataBarangPage();
        this.tambahBarangPage = new TambahBarangPage();
    }
}