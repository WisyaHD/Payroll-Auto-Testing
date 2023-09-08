import ModalPelunasanHutangPembayaran from "./PelunasanHutangPembayaranPage/PelunasanHutangPembayaran";
export default class ModalPelunasanHutang{
        public modalPelunasanHutangPembayaran: ModalPelunasanHutangPembayaran;
        constructor(){
            this.modalPelunasanHutangPembayaran = new ModalPelunasanHutangPembayaran();
        }
    PelunasanHutangButton(){
        return cy.get('.btn-success');
    }
    PeremajaanButton(){
        return cy.get('.col-12.text-right > .btn-primary');
    }
    KembaliButton(){
        return cy.get('.col-3 > .btn');
    }
}
