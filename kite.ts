interface IFly {
    fly(vel): void;
    land(): boolean;
}

class Airplane {
    private _name: string;
    private _airline: string;
    private _destination: string;

    get name(): string {
        return this._name;
    }
    set name(val: string) {
        this._name = val;
    }

    get airline(): string {
        return this._airline;
    }
    set airline(val: string) {
        this._airline = val;
    }

    get destination(): string {
        return this._destination;
    }
    set destination(val: string) {
        this._airline = val;
    }

    constructor(name: string, airline: string, dest: string) {
        this.name = name;
        this.airline = airline;
        this.destination = dest;
    }

    public fly(): void {
        document.write('This airplane can fly');
    }

    public land(): boolean {
        return false;
    }
}

class Kite {
    private _color: string;
    private _price: number;

    get color(): string {
        return this._color
    }
    set color(val: string) {
        this._color = val;
    }

    get price(): number {
        return this._price;
    }
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        }
    }

    constructor(color: string, price: number) {
        this.color = color;
        this.price = price;
    }

    public fly(): void {
        document.write('This kite can fly');
    }

    public land(): boolean {
        return true;
    }
}

class Bird {
    private _color: string;
    private _age: number;
    private _birdType:string;

    get color(): string {
        return this._color
    }
    set color(val: string) {
        this._color = val;
    }

    get birdType(): string {
        return this._birdType
    }
    set birdType(val: string) {
        this._birdType = val;
    }

    get age(): number {
        return this._age;
    }
    set age(val: number) {
        if (val > 0) {
            this._age = val;
        }
    }

    constructor(color: string, age: number, birdType: string) {
        this.color = color;
        this.age = age;
        this.birdType = birdType;
    }

    public fly(): void {
        document.write('This bird can fly');
    }

    public land(): boolean {
        return true;
    }
}

function createIFly(): IFly {

    let result: IFly;
    let i: number = Math.random() * 3;
    i = Math.floor(i);
    

    switch (i) {
        case 0:
            result = new Bird('Green', 3, "Blue Jay");
            break;
        case 1:
            result = new Airplane("Dani", "El-Al", "ISrael");
            break;
        case 2:
            result = new Kite("Blue", 50);
            break;
        default:
            break;
    }

    return result;
}

let arr: Array<IFly> = new Array<IFly>(10);

for (let i: number = 0; i < arr.length; i++) {
    arr[i] = createIFly();
    arr[i].fly(50);
    document.write('<br/>');
    if (arr[i].land()) {
        document.write('This has landed<br/>');
    }
    document.write('<br/>');
}



