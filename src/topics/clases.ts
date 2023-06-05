class Person {
    constructor(
        public name: string, 
        private address: string
        ){};
}

class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){}
}

const petter = new Person('victor','new york');
const spiderman = new Hero ('spiderman',4,'petter',petter);
console.log(spiderman.person.name);