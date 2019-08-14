import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
    selector: 'edit-setting',
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-center" style="height:60px">
                <p style="line-height:60px;font-size:20px">Settings</p>
            </div>
            <button class="back" (click)="back()"><img src="../../assets/back.png"></button>
        </div>
        <div class="func" style="margin-bottom:10px;" (click)="editContact(account.id)">
            <span>Edit Contact</span>
            <span class="name text-secondary">
                {{ account.remark ? account.remark : account.name }}
            </span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func" style="margin-bottom:10px;">
            <span>Share Contact</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func" style="margin-bottom:20px;" (click)="changeStarred()">
            <span>Starred</span>
            <img *ngIf="isStarred" class="choose" src="../../assets/no.png" />
            <img *ngIf="!isStarred" class="choose" src="../../assets/yes.png" />
        </div>
        <p class="text-secondary" style="margin:0">Moments & Time Capsule</p>
        <div class="func" *ngFor="let func of ffuncs;let i = index" (click)="changeFfunc(i)">
            <span>{{ func }}</span>
            <img class="choose index{{i}}" src="../../assets/no.png" />
        </div>
        <div class="func" style="margin-top:10px;" (click)="changeBlock()">
            <span>Block</span>
            <img *ngIf="isBlock" class="choose" src="../../assets/no.png" />
            <img *ngIf="!isBlock" class="choose" src="../../assets/yes.png" />
        </div>
        <div class="func">
            <span>Report</span>
            <img class="enter" src="../../assets/enter.png" />
        </div>
        <div class="func text-center" style="margin-top:10px;">
            <span style="color:red">Delete</span>
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
    .name {
        font-weight: 400;
        position: fixed;
        right: 40px;
        font-size: 18px;
    }
    .enter {
        position: fixed;
        right: 14px;
        width: 20px;
        height: 20px;
        margin-top: 18px;
    }
    .choose {
        position: fixed;
        right: 14px;
        width: 56px;
        height: 36px;
        margin-top: 8px;
    }
    `]
})
export class EditSettingComponent implements OnInit {
    public ffuncs = ["Hide My Posts", "Hide Their Posts"];
    public isStarred: boolean = true;
    public isBlock: boolean = true;
    public items = [];
    public account = {};
    public id: number = -1;

    constructor(private router: Router,
                private dataService: DataService,
                private activatedRoute: ActivatedRoute) {
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

    changeStarred() {
        this.isStarred = !this.isStarred;
    }

    changeBlock() {
        this.isBlock = !this.isBlock;
    }

    changeFfunc(i) {
        const img = document.getElementsByClassName("index" + i)[0];
        const src = img.getAttribute("src");
        if (src.includes("no")) {
            img.setAttribute("src", "../../assets/yes.png");
        } else {
            img.setAttribute("src", "../../assets/no.png");
        }    
    }

    editContact(id: number) {
        this.router.navigateByUrl("/edit/" + id);
    }
}