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

    generateChildSubMenu(selectedChildSubMenu: number){
        return cy.get(`.expand`);
    }
}