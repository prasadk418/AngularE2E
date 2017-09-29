import { Injectable } from '@angular/core';

@Injectable()

export class AppModel{
    qnObj;
    attemptedMail;

    setSecretQn(qn){
        this.qnObj = qn;
    }
    getSecretQn(){
        return this.qnObj;
    }
    setAttemptedMail(mail){
        this.attemptedMail = mail;
    }
    getAttemptedMail(){
        return this.attemptedMail;
    }
    constructor(){}
}