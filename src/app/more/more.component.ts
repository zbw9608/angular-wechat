import { Component, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ChatComponent } from "../chat/chat.component";

@Component({
    selector: 'more',
    templateUrl: `more.component.html`,
    styleUrls: [`more.component.css`]
})
export class MoreComponent {
    @Input() isEmoji: boolean;
    @Input() isMore: boolean;
    @Input() id: number;
    @Input() name: string;

    public icons = ["plus", "emoji", "like", "record"];
    public firstChooses = ["Album", "Camera", "Video Call", "Location", 
    "Red Packet", "Transfer", "Voice Input", "Favorites"];
    public secondChooses = ["Contact Card", "File", "Coupons"];
    public emojis = ["concerned", "smart", "smirk", "faceplam"];
    public likes = ["heng", "cat", "dog"];
    public isFirst: boolean = true;

    constructor(private dataService: DataService,
                private chatMethods: ChatComponent) {}
    /**
     * 点击不同图标变换背景颜色
     * @param {*} i
     * @memberof MoreComponent
     */
    changeIcon(i) {
        if (i !== 0) {
            const item = document.getElementsByClassName("icon");
            for (let j = 1; j < item.length; j++) {
                const title = this.icons[j] + "_container";
                const container = document.getElementById(title);
                if (j !== i) {
                    item[j].className = "icon";
                    container.style.display = "none";
                } else {
                    item[i].className += " active";
                    container.style.display = "block";
                }
            }
        }
    }

    keyupEmoji(emoji) {
        const newTime = this.chatMethods.getTime();
        this.dataService.setValue(this.id, this.name, "emoji/" + emoji + ".png", newTime);
    }
    keyupLike(like) {
        const newTime = this.chatMethods.getTime();
        this.dataService.setValue(this.id, this.name, "like/" + like + ".png", newTime);
    }

    funcPage(n) {
        const marker = document.getElementsByClassName("marker")[0].children;
        if (n === 1) {
            this.isFirst = false;
            marker[0].setAttribute("style","background:DarkGray");
            marker[n].setAttribute("style","background:#333;margin-left:10px");
        } else {
            this.isFirst = true;
            marker[n].setAttribute("style","background:#333");
            marker[1].setAttribute("style","background:DarkGray;margin-left:10px");
        }
    }
}