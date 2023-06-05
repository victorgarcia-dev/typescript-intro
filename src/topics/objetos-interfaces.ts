interface character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const skills : string[] = ['bash','counter','healing'];

const strider: character = {
    name: 'strider',
    hp: 100,
    skills: ['bash','counter']
}

console.log(strider);


export{};