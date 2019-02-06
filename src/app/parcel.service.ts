import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable()
export class ParcelService {
    // private url = 'http://192.168.0.106:3000';
    private url = 'http://192.168.100.5:3000';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public sendJump() {
        console.log("Sending request to server...");
        this.socket.emit('jump');
    }

    // public joinRoom(data) {
    //     console.log(data);
    //     this.socket.emit('join', data);
    // }
    
    // public newMessage(): any {
    //     let obs = new Observable<{ user: String, room: String }>((observer) => {
    //         this.socket.on('new-message', (data) => {
    //             observer.next(data);
    //         });
    //         return () => { this.socket.disconnect(); }
    //     });
    //     return obs;
    // }
    public jumped(): any {
        let obs = new Observable<{ user: String, room: String }>((observer) => {
            this.socket.on('jumped', function() {
                observer.next();
            });
            return () => { this.socket.disconnect(); }
        });
        return obs;
    }



}