import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
    selector: 'login',
    templateUrl: `login.component.html`,
    styleUrls: [`login.component.css`]
})
export class LoginComponent {
    public isQq = true;
    constructor(private router: Router,
                private dataService: DataService) {}

    public account = this.dataService.account;
    /**
     * 点击改变登录方式
     * @memberof LoginComponent
     */
    changeOption() {
        this.isQq = !this.isQq;
    }

    /**
     * 获取用户输入的密码，并进行比对
     * @param {*} psw
     * @memberof LoginComponent
     */
    getPsw(psw) {
        if (psw == this.account.psw) {
            this.enterIndex();
        } else {
            alert("密码错误");
        }
    }

    enterIndex() {
        this.router.navigateByUrl("/index");
    }
}