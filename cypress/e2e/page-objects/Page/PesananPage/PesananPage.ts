import TransaksiPesananPage from "./TransaksiPesananPage/TransaksiPesananPage";
import LihatPesananPage from "./LihatPesananPage/LihatPesananPage";

export default class PesananPage{
    public transaksiPesananPage: TransaksiPesananPage;
    public lihatPesananPage: LihatPesananPage;
    
    constructor(){
        this.transaksiPesananPage = new TransaksiPesananPage;
        this.lihatPesananPage = new LihatPesananPage;
    }
}