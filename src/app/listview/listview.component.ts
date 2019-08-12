import { Component, Input, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "list-view",
    templateUrl: "./listview.component.html",
    styleUrls: ["./listview.component.css"],
})
export class ListviewComponent {
    @Input() items: any[];
    public funcs = ["New Friends", "Group Chats", "Tags", "Official Accounts"];

    constructor(private router: Router) {}

    enterChat(id: number) {
        this.router.navigateByUrl("/chat/" + id);
    }
}