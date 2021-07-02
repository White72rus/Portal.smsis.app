import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public login: string;
    public pass: string;
    public passNotice: string;
    public loginNotice: string;
    public authSuccess: boolean = false;

    @Output() authEmitt : EventEmitter<boolean>;
    
    constructor(/*private account: AccountService*/) { 
        this.authEmitt = new EventEmitter<boolean>();
    }

    public onLogin(): void {
        // this.account.login({ "Name": this.login, "Password": this.pass }).subscribe(d => {
        //     console.log("Response state: " + d.ok + " Code: " + d.status);
        //     if (d.ok) {
        //         AccountService.authSuccess = true;
        //         console.log("onLogin: account success = " + AccountService.authSuccess);
        //         this.authSuccess = true;
        //         this.authEmitt.emit(this.authSuccess);
        //         this.account.token = d.body["Token"];
        //     }
        // })
    }

    public onChange(wors: string): void {

    }
    
    ngOnInit() {
    }

}
