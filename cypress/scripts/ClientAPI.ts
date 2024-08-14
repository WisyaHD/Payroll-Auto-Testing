import Config from '../fixtures/config.json';

const token = Config['x-auth-token'];

export default class ClientAPI{
    async getWithBody(url: string, body: any){
        let data: any = [];
        cy.request({
            method: "GET",
            url: url,
            body: body,
            headers: {
                "x-auth-token": token,
            }
        }).then(async (res: any) => {
            await data.push(res.data);
        });
        return data;
    }

    async getWithParams(url: string){
        let data: any = [];
        cy.request({
            method: "GET",
            url: url,
            headers: {
                "x-auth-token": token,
            }
        }).then(async (res:any) => {
            await data.push(res.data);
        })
        return data;
    }
}