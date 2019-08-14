import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'setting',
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-center" style="height:60px">
                <p style="line-height:60px;font-size:20px">Settings</p>
            </div>
            <button class="back" (click)="back()"><img src="../../assets/back.png"></button>
        </div>
        <div class="func" style="margin-bottom:10px;">
            <span>Account Security</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func" *ngFor="let func of ffuncs">
            <span>{{ func }}</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func" style="margin-top:10px;">
            <span>Help & Feedback</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func">
            <span>About</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func" style="margin-top:10px;">
            <span>Wechat Services</span>
            <img src="../../assets/light.png" style="width:24px;height:24px;margin-left:6px;" />
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func text-center" style="margin-top:10px;">
            <span>Switch Account</span>
        </div>
        <div class="func text-center" style="margin-top:10px;" (click)="logout()">
            <span>Log out</span>
        </div>
    </div>
    `,
    styles: [`
    .container-fluid {
        background-color: rgba(237,237,237,.85);
        position: fixed;
        top: 0;
        bottom: 0;
        font-weight: 500;
    }
    .title {
        background: rgba(237,237,237,.95);
        border-bottom: #dcdcdc 1px solid;
        color: #222222;
    }
    p > img {
        width: 18px;
        height: 22px;
    }
    .title > button {
        outline: none;
        border: 0;
        background: rgba(237,237,237,.85);
        position: absolute;
        line-height: 60px;
        padding: 0;
    }
    button > img {
        width: 36px;
        height: 36px;
    }
    .back {
        left: 6px;
        top: -2px;
    }
    .func {
        margin: 0 -15px;
        height: 54px;
        background: white;
        border-bottom:  rgba(0,0,0,.08) 1px solid;
        line-height: 54px;
    }
    span {
        margin-left: 18px;
    }
    .enter {
        position: fixed;
        right: 14px;
        width: 20px;
        height: 20px;
        margin-top: 18px;
    }
    `]
})
export class SettingComponent {
    public ffuncs = ["Message Notifications", "Privacy", "General"];

    constructor(private router: Router) {}

    back() {
        history.back();
    }

    logout() {
        this.router.navigateByUrl("/login");
    }
}