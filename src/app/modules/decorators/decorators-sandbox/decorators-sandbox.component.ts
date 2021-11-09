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
    @readonly
    @debounce2
    slow(countObj: {x: number, y: number}) {
        // здесь могут быть ресурсоёмкие вычисления
        console.log(countObj.x + countObj.y);
        return countObj.x + countObj.y;
    }


    testFunc(): Test<number, boolean> {
        return { value: 1, test: true }
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

function debounce(f, time: number) {
  let waiting = false;

  return () => {
      if (waiting) return

      f.apply(this, arguments)
      waiting = true;



  }
}

function debounce2(target, name, descriptor) {
    let waiting = false;
    const original = descriptor.value;
    if (typeof original === 'function') {

        descriptor.value = function(...args) {
            console.log("Logged at: " + new Date().toLocaleString());
            if (waiting) return

            try {
                const result = original.apply(this, args);
                waiting = true
                setTimeout( () => waiting = false, time)
                return result;
            } catch (e) {
                console.log(`Error: ${e}`);
                throw e;
            }
        }
    }
    return descriptor;
}


function readonly(target, property, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

export interface Test<T, U> {
    value: T,
    test: U
}
