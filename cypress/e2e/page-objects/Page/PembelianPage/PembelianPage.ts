import TransaksiPembelianPage from "./TransaksiPembelianPage/TransaksiPembelianPage";
import LihatPembelianPage from "./LihatPembelianPage/LihatPembelianPage";
import HancurPembelianPage from "./HancurPembelianPage/HancurPembelianPage";

export default class PembelianPage{
    public transaksiPembelianPage:TransaksiPembelianPage ;
    public lihatPembelianPage:LihatPembelianPage ;
    public hancurPembelianPage:HancurPembelianPage ; 
    constructor(){
        this.transaksiPembelianPage = new TransaksiPembelianPage;
        this.lihatPembelianPage=new LihatPembelianPage;
        this.hancurPembelianPage= new HancurPembelianPage;
    }
}