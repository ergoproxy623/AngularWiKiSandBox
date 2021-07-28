import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-decorators-sandbox",
    templateUrl: "./decorators-sandbox.component.html",
    styleUrls: ["./decorators-sandbox.component.scss"]
})
export class DecoratorsSandboxComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
        const slowAndCaching = this.cachingDecorator(this.slow);
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 6, y: 6}));
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 5, y: 5}));
        console.log(slowAndCaching({x: 6, y: 6}));
    }


    slow(countObj: {x: number, y: number}) {
        // здесь могут быть ресурсоёмкие вычисления
        console.log(countObj.x + countObj.y);
        return countObj.x + countObj.y;
    }

    cachingDecorator(func) {
        const cache = new Map();
        return (x) => {
            const name = JSON.stringify(x)
            console.log(x);
            if (cache.has(name)) {
                console.log("содержит такой x");
                console.log(cache.get(name));
                return cache.get(x); // читаем из него результат
            }

            const result = func(x);
            console.log(result);
            console.log("вызываем функцию");
            cache.set(name, result); // и кешируем (запоминаем) результат
            console.log(cache);
            return result;
        };
    }
}
