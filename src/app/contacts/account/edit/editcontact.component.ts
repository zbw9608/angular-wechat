import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
    selector: 'edit-contacts',
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-center" style="height:60px">
                <p style="line-height:60px;font-size:20px">Edit Contact</p>
            </div>
            <button class="back" (click)="back()">Cancel</button>
            <button class="done">Done</button>
        </div>
        <p class="text-secondary" style="margin-top:10px">Alias</p>
        <input class="func alias" style="margin-bottom:10px;" />
        
        <p class="text-secondary">Tags</p>
        <div class="func" style="margin-bottom:10px;">
            <img class="enter" src="../../assets/enter.png" />
        </div>

        <p class="text-secondary">Mobile</p>
        <div class="mobile"><img src="../../assets/add_mobile.png" /></div>
        <input class="func mobileInput" style="margin-bottom:10px;" placeholder="Add Mobile" />
        
        <p class="text-secondary" style="margin-top:-50px">Remark</p>
        <div class="remark">
            <input placeholder="Enter more remarks" />
            <div  class="text-secondary text-center">Add name card or photo</div>
        </div>
    </div>
    `,
    styles: [`
    .container-fluid {
        background-color: rgba(237,237,237,1);
        position: fixed;
        top: 0;
        bottom: 0;
        padding: 0;
    }
    .title {
        color: #222222;
        font-weight: 500;
    }
    .back {
        outline: none;
        border: 0;
        background: rgba(237,237,237,.85);
        position: absolute;
        line-height: 60px;
        padding: 0;
        font-size: 20px;
        color: #222222;
        left: 16px;
    }
    .done {
        font-size: 18px;
        width: 70px;
        border: 0;
        outline: none;
        background: #36b05d;
        color: white;
        height: 40px;
        border-radius: 5px;
        position: absolute;
        top: 10px;
        right: 16px;
    }
    p {
        padding-left: 15px;
        margin-bottom: 4px;
    }
    .func {
        margin: 0 -15px;
        height: 54px;
        background: white;
        border: rgba(0,0,0,.08) 1px solid;
        line-height: 54px;
    }
    .alias {
        width: 100%;
        outline: none;
        text-indent: 16px;
        margin: 0;
        font-size: 18px;
    }
    .enter {
        position: fixed;
        right: 14px;
        width: 20px;
        height: 20px;
        margin-top: 18px;
    }
    .mobile {
        width: 60px;
        height: 54px;
        background: white;
        line-height: 50px;
        text-align: center;
        border-top: rgba(0,0,0,.08) 1px solid;
        border-bottom: rgba(0,0,0,.08) 1px solid;
        border-right: 0;
    }
    .mobile > img {
        width: 36px;
        height: 36px; 
    }
    .mobileInput {
        position: relative;
        top: -54px;
        left: 74px;
        border-left: 0;
        width: 90%;
        outline: none;
    }
    .remark {
        height: 240px;
        background: white;
    }
    .remark > input {
        width: 90%;
        border: 0;
        border-bottom: rgba(0,0,0,.08) 1px solid;
        outline: none;
        margin-left: 5%;
        height: 80px;
    }
    input::-webkit-input-placeholder {
        font-size: 18px;
        font-weight: 500;
        color: rgba(0,0,0,.1);
    }
    .remark > div {
        width: 90%;
        margin-left: 5%;
        margin-top: 10px;
        border: rgba(0,0,0,.08) 1px dashed;
        height: 140px;
        font-size: 20px;
        line-height: 140px;
    }
    `]
})
export class EditContactComponent implements OnInit {
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
        const alias = document.getElementsByTagName("input")[0];
        alias.value = this.account["remark"] ? this.account["remark"] : this.account["name"];
    }

    back() {
        history.back();
    }
}