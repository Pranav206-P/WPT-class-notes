let x: number = 5;
console.log(x);

let y: string = "hello";
console.log(y);

function sum(a: number, b: number): number {
    return a + b;
}

function show(): void {
    console.log("hello");
}

const rs: number = sum(3, 8);
console.log(rs);

show();

let arr: number[] = [10, 20, 30];


interface IProduct {
    id: number;
    name: string;
    readonly price: number;
    qty: number;
    description?: string;
}

let product: IProduct = { id: 101, name: "keyboad", price: 888, qty: 67 };

product.name = "wireless-keyboard";
product.price = 45;

let productsList: IProduct[] = [
    { id: 101, name: "keyboad", price: 888, qty: 67, description: "" },
    { id: 102, name: "mouse", price: 888, qty: 67 },
    { id: 103, name: "headphone", price: 888, qty: 67 },
];

type TBook = {
    id: number;
    name: string;
    isbn: string;
    price: number;
}

let book: TBook = { id: 111, name: "mybook", isbn: "", price: 888 }


// let status = "APPROVED", "PENDING", "REJECTED"

type TStatus = "APPROVED" | "PENDING" | "REJECTED";

let myStatus: TStatus = "APPROVED"

// recommendation: to give shape to the objects and class  interface is sued
// apart from that for any other thing type aliasing is used 

interface IUser {
    id: number;
    name: string;
    email: string
    status: TStatus
}

// I
// T

type TUndefinedNumber = number | undefined;

let z: TUndefinedNumber = 8; // type union

z = undefined;


type TPerson = {
    name: string;
    phone: string;
    email: string;
}

type TEmployee = TPerson & {
    salary: number;
}

type TStudent = TPerson & {
    marks: number;
}
