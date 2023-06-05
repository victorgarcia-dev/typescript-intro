/** funciones*/

/*
function addNumbers(a:number,b:number):number{
    return a+b;
}
const result = addNumbers(2,3);
console.log(result);

const addNumbers2 = (a:number, b:number):number => {
    return a + b;         
}
console.log(addNumbers2(1,6));

function multiplayer(a:number,b?:number,c:number=3):number{
    return a*c;
}
console.log(multiplayer(4));
*/

/**funciones con objetos de argumentos*/

interface character {
    name: string;
    hp: number;
    showHp: () => void;
}

const strider: character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
    }
}

const healCharacter = (character:character, amount:number): void =>{
    character.hp += amount;
}

healCharacter(strider,30);


strider.showHp();
export{};