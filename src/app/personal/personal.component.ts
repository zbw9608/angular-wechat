import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'personal',
    template: `
    <div class="container-fluid">
        <img class="camera" src="../../assets/camera_me.png" />
        <div class="account">
            <img class="portrait" src="../../assets/{{ account.portrait }}.jpg" />
            <p>{{ account.name }}</p>
            <span class="text-secondary">WeChat ID: {{ account.id }}</span>
            <img class="code" src="../../assets/code.png" />
            <img class="code" src="../../assets/enter.png" style="margin-left:30px" />
        </div>
        <div class="pay">
            <img class="icon" src="../../assets/WeChat Pay.png" />
            <span>WeChat Pay</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <table>
            <tr *ngFor="let func of funcs"> 
                <td style="width:64px;"><img class="icon" src="../../assets/{{ func }}.png" /></td>
                <td style="border-bottom: 1px rgba(0,0,0,.08) solid">
                    {{ func }}
                    <img class="enter" src="../../assets/enter.png" />
                </td>
            </tr>         
        </table>
        <div class="setting" (click)="enter('settings')">
            <img class="icon" src="../../assets/Settings.png" />
            <span>Settings</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
    </div>
    `,
    styles: [`
    .container-fluid {
        background-color: rgba(237,237,237,.85);
        padding: 0;
        height: 607px;
    }
    .account {
        background: white;
        padding: 90px 20px 0 24px;
        height: 200px;
        border-bottom:  rgba(0,0,0,.08) 1px solid;
    }
    .camera {
        position: fixed;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
    }
    .portrait {
        width: 60px;
        height: 60px;
        border-radius: 6px;
    }
    .account > p {
        width: 50%;
        position: relative;
        top: -60px;
        left: 80px;
        font-size: 20px;
        font-weight: 600;
    }
    .account > span {
        position: relative;
        top: -70px;
        left: 80px;
        color: #bebebe;
    }
    .code {
        position: relative;
        top: -72px;
        left: 100px;
        width: 20px;
        height: 20px;
    }
    .pay, .setting {
        margin-top: 10px;
        height: 54px;
        background: white;
        border-bottom:  rgba(0,0,0,.08) 1px solid;
        border-top:  rgba(0,0,0,.08) 1px solid;
        line-height: 54px;
    }
    .icon {
        width: 30px;
        height: 30px;
        margin: 0 16px;
    }
    .enter {
        position: fixed;
        right: 14px;
        width: 20px;
        height: 20px;
    }
    .pay .enter, .setting .enter {
        margin-top: 18px;
    }
    table .enter {
        margin-top: 4px;
    }
    table {
        margin-top: 10px;
        height: 216px;
        background: white;
        width: 100%;
        border-bottom:  rgba(0,0,0,.08) 1px solid;
        border-top:  rgba(0,0,0,.08) 1px solid;
    }
    `]
})
export class PersonalComponent {
    public funcs = ["Favorite", "My Posts", "Cards & Offers", "Sticker Gallery"];

    constructor(private dataService: DataService,
                private router: Router) {}

    public account = this.dataService.account;

    enter(func) {
        this.router.navigateByUrl("/" + func);
    }
}