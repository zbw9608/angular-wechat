import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
    selector: 'personal',
    template: `
    <div class="container-fluid">
        <div class="row title">
            <button class="back" (click)="back()">
                <img src="../../assets/back.png">
            </button>
            <button class="detail" (click)="enterSetting(account.id)">
                <img src="../../assets/detail.png">
            </button>
        </div>
        <div class="account">
            <img class="portrait" />
            <p>{{ account.remark ? account.remark : account.name }}</p>
            <div class="text-secondary">Name: {{ account.name }}</div>
            <div class="text-secondary">WeChat ID: {{ account.id }}</div>
        </div>
        <div class="func" (click)="editContact(account.id)">
            <span>Edit Contact</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func" style="margin:10px 0">
            <span>More</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func chat text-center" style="margin-top:10px"
         (click)="enterChat(account.id)">
            <img src="../../assets/Messages.png" />
            <span>Messages</span>
        </div>
        <div class="func chat text-center" style="border-top:0">
            <img src="../../assets/Video.png" />
            <span>Voice or Video Call</span>
        </div>
    </div>
    `,
    styles: [`
    .container-fluid {
        background-color: rgba(237,237,237,.85);
        position: fixed;
        top: 0;
        bottom: 0;
        padding: 0;
    }
    .title {
        width: 100%;
        height: 50px;
        background: white;
        margin: 0;
    }
    .title > button {
        outline: none;
        border: 0;
        background: white;
        position: absolute;
        line-height: 50px;
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
    .detail {
        right: 10px;
    }
    .account {
        background: white;
        padding: 10px 20px 0 24px;
        height: 120px;
    }
    .portrait {
        width: 66px;
        height: 66px;
        border-radius: 6px;
    }
    .account > p {
        width: 50%;
        position: relative;
        top: -78px;
        left: 86px;
        font-size: 24px;
        font-weight: 600;
    }
    .account > div {
        position: relative;
        top: -96px;
        left: 86px;
        color: #bebebe;
    }
    .func {
        padding-left: 20px;
        height: 54px;
        background: white;
        border-top:rgba(0,0,0,.08) 1px solid;
        border-bottom:  rgba(0,0,0,.08) 1px solid;
        line-height: 54px;
        font-size: 18px;
        font-weight:500;
        color: #333;
    }
    .enter {
        position: fixed;
        right: 14px;
        width: 20px;
        height: 20px;
        margin-top: 18px;
    }
    .chat > span {
        color:#636989;
        margin-left:8px;
    }
    .chat > img {
        width:24px;
        height:24px;
    }
    `]
})
export class AccountComponent implements OnInit {
    id: number = -1;
    items = [];
    account = {};
    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private dataService: DataService) {
        const nowRouter = this.activatedRoute['_routerState'].snapshot.url;
        this.id = parseInt(nowRouter.split('/')[2]);
    }
     
    ngOnInit() {
        this.items = this.dataService.items;
        for (let key in this.items) {
            let list = this.items[key].list;
            for (let i = 0; i<list.length; i++) {
                let itemsId = list[i].id;
                if (this.id === itemsId) {
                    this.account = list[i];
                }
            }
        }
    }

    back() {
        history.back();
    }

    enterChat(id: number) {
        this.router.navigateByUrl("/chat/" + id);
    }

    enterSetting(id: number) {
        this.router.navigateByUrl("/setting/" + id);
    }

    editContact(id: number) {
        console.log(id)
        this.router.navigateByUrl("/edit/" + id);
    }
}