export class Singleton {

    protected static instance: Singleton = new Singleton();

    protected foo = 123;

    constructor() {
        if (Singleton.instance) {
            throw new Error("Instantiation failed: use Singleton.getInstance() instead of new.");
        }
    }

    public static getInstance(): Singleton {
        return Singleton.instance;
    }
}
