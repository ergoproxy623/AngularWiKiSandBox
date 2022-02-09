import { Component, Input, TemplateRef } from "@angular/core";

@Component({
    selector: "app-child-ref",
    templateUrl: "./child-ref.component.html",
    styleUrls: ["./child-ref.component.scss"]
})
export class ChildRefComponent {
    @Input()
    template?: TemplateRef<{ $implicit: string }>;
}
