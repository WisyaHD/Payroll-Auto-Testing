export default class SideMenuBase{
    generateMenu(url: string, isScrollable: boolean, child: number){
        if(!isScrollable){
            return cy.get(`:nth-child(${child}) > [href="/${url}"] > span`)
        }else{
            return cy.get(`.scrollbar-container > :nth-child(2) > :nth-child(${child}) > [href="/${url}"] > span`)
        }
    }

    generateSubMenu(selectedSubMenu: number){
        return cy.get(`.expand > .sub-menu > :nth-child(${selectedSubMenu}) > a > span`)
    }

    generateSubMenuLaporan(selectedSubMenu: number, isDBlock: boolean, isNeedLink: boolean, url: string = "-"){
        if(!isDBlock){
            return cy.get(`:nth-child(${selectedSubMenu}) > [href="/${url}"] > span`);
        }else{
            if(isNeedLink){
                return cy.get(`.d-block > :nth-child(${selectedSubMenu}) > [href="/${url}"] > span`);
            }else{
                return cy.get('.d-block > :nth-child(2) > a > span')
            }
        }
    }

    generateChildSubMenu(selectedChildSubMenu: number){
        return cy.get(`:nth-child(23) > :nth-child(2) > .expand > .sub-menu > :nth-child(${selectedChildSubMenu}) > a > span`)
    }
}