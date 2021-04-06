import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: "app-punto-js",
    templateUrl: "./punto-js.component.html",
    styleUrls: ["./punto-js.component.scss"]
})
export class PuntoJsComponent implements OnInit {

    punto: FormControl = new FormControl();
    transformedValue = "";
    layoutLat = "`~@#$%^&qwertyuiop[]QWERTYUIOP{}asdfghjkl;'\\ASDFGHJKL:\"|zxcvbnm,./ZXCVBNM<>?";
    layoutRu = "ёЁ\"№;%:?йцукенгшщзхъЙЦУКЕНГШЩЗХЪфывапролджэ\\ФЫВАПРОЛДЖЭ/ячсмитьбю.ЯЧСМИТЬБЮ, ";

    constructor() {
    }

    ngOnInit(): void {
        this.punto.valueChanges.subscribe(v => {
            const latinRegex = new RegExp("[A-z]", "g");
            if (!v) {
                this.transformedValue = "";
                return;
            } else if (v.match(latinRegex)) {
                const layout = this.layoutLat + this.layoutRu + this.layoutLat;
                this.transformedValue = "";
                const regex = new RegExp("[А-я ]", "g");
                v.split("").forEach( char => {
                    if (char.match(regex)) {
                        this.transformedValue = this.transformedValue + char;
                    } else {
                        this.transformedValue = this.transformedValue + layout[layout.indexOf(char) + this.layoutLat.length];
                    }
                });
            } else {
                this.transformedValue = v;
            }
        });
    }
}
