import { io } from "socket.io-client"
import uuid from 'uuid';

let uid = uuid.v4();

export const getDataWithSocket = (url: string, urlSocket: string) => {
    let data: any = [];
    return async () => {
        let socket = io(`${url?.replace("/api/v1", "")}`);
        socket.on(urlSocket, async (res) => {
            if(uid === res.uid){
                cy.log("UUID SAME");
                if(res.status === "PROGRESS"){
                    data.push(...res.data);
                }else if(res.status === "DATA_KOSONG" && res.data.length === 0){
                    cy.log("DATA KOSONG")
                }else if(res.status === "FINISH"){
                    console.log("DONE");
                    socket.close();
                }else{
                    console.log("ERROR");
                    socket.close();
                };
            }
        });
        return data;
    }
}

const connectedSocket = (socket: any) => {
    return new Promise((resolve: any, reject: any) => {
        socket.on("disconnect", (response: any) => {
            if(response !== "io client disconnect"){
                socket.connect();
            };
            resolve("Reconnect");
        });
        socket.on("connect", () => {
            socket.connect();
            resolve("Connect");
        })
    });
}