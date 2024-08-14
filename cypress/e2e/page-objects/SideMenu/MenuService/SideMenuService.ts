import SideMenuBase from "../SideMenuBase";

export default class SideMenuService extends SideMenuBase{
    selectMenuServiceParent(url: string){
        const splitted = url.split('/');
        const get = splitted[3];
        this.generateMenu(get, true, 16).click();
    }

    selectMenuTransaksiService(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuServiceParent(url);
        }
        return this.generateSubMenu(1).click({scrollBehavior: false});
    }

    selectLihatService(isActive: boolean, url: string = "-"){
        if(!isActive){
            this.selectMenuServiceParent(url);
        }
        return this.generateSubMenu(2).click();
    }
  
}