import { couldStartTrivia } from "typescript";

// const baseUrl = "https://qc.nagatech.id/";
// const baseUrl = "https://pantes-cirebon-qc.nagatech.id//";
const baseUrl = "https://qc-cabang.goldstore.id//";
const kodeIntern = "KI-212"
const hargaAtribut = "20000"
const beratAtribut = getRandomBerat(0.5, 10);
const beratPlastik = getRandomBerat(1, 10);
const namaBarang = "Cincin Emas Tua"
const kodeBarang = "KodeBarang1"
const username = "helpdesk"
const password = "helpdesknagatechberasputih"
const validuser = "helpdesk"
const validpass  = "helpdesknagatechberasputih"
const kodeGroup = "70KA"
const kodeJenis = "AG"
const Baki = "BK-GL"
const berat = getRandomBerat(1, 10);
const kadar = getRandomKadar(20, 90);
const namaAtribut = "ACC-CINCIN"
const kodeBarcode ="00001971"
const kondisiBarang = "RUSAK"
const contoh = "Contoh"
const Gudang = "TOKO-TOKO"
const bakiTujuan = "TEST TIMBANG BAKI"
const kodeSales = "BOY" 
const namaCustomer = "iki"
const noHp = "0851217233"
const alamat = "cilengkrang no 46"
const jenisBayarCash = "CASH"
const jenisBayarTransfer = "TRANSFER"
const jenisBayarDebit = "DEBIT"
const jenisBayarKredit = "KREDIT"
const noRekening = "100001"
const card = "89423"
const nominal = "50000"
const kondisiBeli = "PRESENTASE"
const jumlah = getRandomJumlah(1, 10)
const jumlahHutang = "250000"
const bunga = "5"
const LamaPinjam = "20"
const DeskripsiNominal = "50000"
const kategori = "MT"
const deskripsiPesanan = "Cincin Mas Tua"
const ongkos = "1000000"


function getRandomBerat(min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min - max + 1)) + min;
}
function getRandomKadar(min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min - max + 1)) + min;
}
function getRandomJumlah(min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (min - max + 1)) + min;
}

export {
    kodeIntern,
    baseUrl,
    hargaAtribut,
    beratAtribut,
    beratPlastik,
    kadar, 
    namaAtribut,
    namaBarang,
    kodeBarang,
    username,
    password,
    validuser,
    validpass,
    kodeGroup,
    kodeJenis,
    Baki,
    berat,
    kodeBarcode,
    kondisiBarang,
    contoh,
    Gudang,
    bakiTujuan, 
    kodeSales,
    namaCustomer, 
    noHp,
    alamat,
    jenisBayarTransfer,
    jenisBayarCash,
    jenisBayarDebit,
    jenisBayarKredit,
    noRekening,
    card,
    nominal,
    kondisiBeli, 
    jumlah,
    jumlahHutang,
    bunga,
    LamaPinjam,
    DeskripsiNominal, 
    kategori,
    deskripsiPesanan,
    ongkos, 
}