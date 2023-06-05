interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'duky',
        year: 2015
    }
}

const {audioVolume, songDuration:duration, song, details} = audioPlayer;
const {author, year} = details;

console.log(`songDuration: ${duration}`); //podemos reenombrar nuestras propiedades de los objetos
console.log(author);