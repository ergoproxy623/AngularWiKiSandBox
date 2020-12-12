//  run tsc indexedDB.ts
interface Supe {
    name: string;
    teist: string;
}
class SupeBorch implements Supe  {
   name: string;
   teist = 'crap';
    constructor(name) {
     this.name = name;
   }
}

let supe = 'Suppen';

function makeSuppen(name) {
    return name + 1;
}

supe = makeSuppen('Fooo');
