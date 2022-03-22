// 1. Напишите тип функции, конкатенирующей две строки
//
// concat('Hello ', 'World') // -> Hello World;

type TypeFn = (arg1: string, arg2: string) => string

const concat: TypeFn = (arg1, arg2) => {
    return arg1 + arg2
}

const str = concat('Hello', 'World')


// 2. Напишите интерфейс для описания следующих данных
//
// const MyHometask = {
//     howIDoIt: "I Do It Wel",
//     simeArray: ["string one", "string two", 42],
//     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

interface ITypeHometask {
    howIDoIt: string,
    someArray: Array<string | number>,
    withData: Array<unknown> | Object
}

const myHometask: ITypeHometask = {
    howIDoIt: 'I Do it Well',
    someArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", someArray: ["string one", 23]}],
}

// 3. В уроке про Generics мы написали интерфейс массива MyArray
//
// interface MyArray<T> {
//     [N: number]: T;
// }
// добавьте типизацию для метода reduce
//
// reduce();

interface MyArray<T> {
    [N: number]: T,

    reduce<U>(callbackFn: (accumulator: U, value: T) => U, initialAccumulator: U): U
}

const arr: MyArray<number> = [1, 2, 3]

arr.reduce((acc, num) => acc + num, 1)

// 4. interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }
//
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным
//
// const homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }
//
// type MyPartial<T> = {
//     [N in keyof T]: T[N] extends object ? MyPartial<T[N]> : T[N]
// }

interface IHomeTask {
    data: string;
    numericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    },
    someArray: [
        {
            item: number
        }
    ]
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object | [] ? MyPartial<T[N]> : T[N]
}
const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    },
    someArray: [
        {
            item: 1
        }
    ]
}