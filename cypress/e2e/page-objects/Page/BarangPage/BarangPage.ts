import DataBarangPage from "./DataBarangPage/DataBarangPage"
import HancurBarangPage from "./HancurBarangPage/HancurBarangPage";
import TambahBarangPage from "./TambahBarangPage/TambahBarangPage";

export default class BarangPage{
    public dataBarangPage: DataBarangPage;
    public tambahBarangPage: TambahBarangPage;
    public hancurBarangPage: HancurBarangPage;

    constructor(){
        this.dataBarangPage = new DataBarangPage();
        this.tambahBarangPage = new TambahBarangPage();
        this.hancurBarangPage = new HancurBarangPage();
    }
}