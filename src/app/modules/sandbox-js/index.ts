//  run tsc indexedDB.ts
interface Supe {
    name: string;
    teist: string;
}
class SupeBorch implements Supe {
    teist = 'crap';

    constructor(public name: string) {
    }

    getTeist() {
        return this.teist;
    }
}

function createNewPromise() {
    return Promise.resolve([1, 2 , 3]);
}


console.log(createNewPromise());

let supe = 'Suppen';

function makeSuppen(name) {
    return name + 1;
}

supe = makeSuppen('Fooo');
