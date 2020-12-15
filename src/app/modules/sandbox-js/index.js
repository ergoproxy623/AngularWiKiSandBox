var SupeBorch = /** @class */ (function () {
    function SupeBorch(name) {
        this.name = name;
        this.teist = 'crap';
    }
    SupeBorch.prototype.getTeist = function () {
        return this.teist;
    };
    return SupeBorch;
}());
function createNewPromise() {
    return Promise.resolve([1, 2, 3]);
}
console.log(createNewPromise());
var supe = 'Suppen';
function makeSuppen(name) {
    return name + 1;
}
supe = makeSuppen('Fooo');
