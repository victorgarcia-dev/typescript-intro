export function whatsMyType<T>(argument:T):T{
    return argument;
}

const amIString = whatsMyType<string>('hola mundo');
const amIString1 = whatsMyType<number>(34);
const amIString2 = whatsMyType<number[]>([3,4,6,7]);
console.log(amIString.split(' '));