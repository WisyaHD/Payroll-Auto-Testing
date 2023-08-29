import TransaksiHutangPage from "./TransaksiHutangPage/TransaksiHutangPage";
import LihatHutangPage from "./LihatHutangPage/LihatHutangPage";

export default class HutangPage{
    public transaksiHutangPage: TransaksiHutangPage;
    public lihatHutangPage: LihatHutangPage;
    constructor(){
        this.transaksiHutangPage = new TransaksiHutangPage;
        this.lihatHutangPage = new LihatHutangPage;
    }
}