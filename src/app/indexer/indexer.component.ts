import { Component, AfterViewChecked, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
    selector: "indexer",
    template: `
    <div class="container-fluid">
        <div class="row title">
            <div class="col text-center" style="height:60px">
                <p>WeChat<img src="../../assets/listen.png"/></p>
                <button (click)="change(isPopup)"><img src="../../assets/more.png"/></button>
            </div>
        </div>
        <input placeholder="Search" (click)="close()" />
        <div class="row" (click)="close()">
            <ul style="width: 100%;" class="listGroup">
                <li *ngFor="let item of data" class="list-group-item" (click)="enterChat(item.id)">
                    <div class="portrait"><img class="m-2" /></div>
                    <p class="name mt-1">{{ item.name }}</p>
                    <p class="time mt-2 text-secondary">{{ item.time ? item.time[0] : '' }}</p>
                    <p class="mess text-secondary">{{ item.mess ? item.mess[item.mess.length - 1] : '' }}</p>
                </li>
            </ul>   
        </div>
        <popup *ngIf="isPopup" class="popup"></popup>
        <search style="display:none;" class="search"></search>
    </div>
    `,
    styleUrls: ["./indexer.component.css"]
})
export class IndexerComponent implements OnInit, AfterViewChecked {
    public isPopup: boolean = false;
    public data = [];
    public count = 0;

    constructor(private router: Router,
        private dataService: DataService) {}

    ngOnInit() {
        this.getItems();
    }

    ngAfterViewChecked() {
        const length = this.data.length;
        if (length !== 0 && this.count == 0) {
            this.showEmoji();
            this.count ++;
        }
    }

    /**
     * change方法是点击圆圈加号图片打开或关闭弹窗
     * close方法是点击页面其余部分关闭弹窗
     * @param {*} isPopup
     * @memberof IndexerComponent
     */
    change(isPopup) {
        this.isPopup = !isPopup;
    }
    close() {
        this.isPopup = false;
        const search = document.getElementsByTagName("search")[0];
        search.setAttribute("style","display:block");
    }

    enterChat(id: number) {
        this.router.navigateByUrl("/chat/" + id);
    }

    /**
     * 获取存入到service中的数据
     * 运用data[],实现先聊天的item展示在后聊天的item下
     * @readonly
     * @memberof IndexerComponent
     */
    getItems() {
        let items = [];
        const caCheValue = this.dataService.caCheValue;
        for (let i in caCheValue) {
            // 如果caCheValue这个对象为空，则不会进入这个循环，所以也不需要判断对象是否为空
            items.push(caCheValue[i]);
        }
        const length = items.length;
        for (let j = 0; j < length; j++) {
            this.data.push(items.pop());
        }
        return this.data;
    }

    /**
     * 如果用户发的最后一条消息是表情包，则显示表情包
     * @memberof IndexerComponent
     */
    showEmoji() {
        const p = document.getElementsByClassName("mess");
        for (let i=0; i<this.data.length; i++) {
            let mess = this.data[i].mess;
            let last = mess[mess.length - 1];
            try {
                if (last.indexOf(".png") !== -1 && last.indexOf("emoji/") !== -1) {
                    p[i].innerHTML = "<img src='../../assets/" + last + "' style='width: 20px;height: 20px;'/>";
                }
                if (last.indexOf(".png") !== -1 && last.indexOf("like/") !== -1) {
                    p[i].innerHTML = "[Sticker]";
                }
            } catch(err) {} 
        }
    }
}