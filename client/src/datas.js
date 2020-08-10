import imgBear from './img/bear.svg';
import imgBee from './img/bee.svg';
import imgCat from './img/cat.svg';
import imgChicken from './img/chicken.svg';
import imgCow from './img/cow.svg';
import imgDog from './img/dog.svg';
import imgDonkey from './img/donkey.svg';
import imgDuck from './img/duck.svg';
import imgFish from './img/fish.svg';
import imgFox from './img/fox.svg';
import imgLion from './img/lion.svg';
import imgMacaw from './img/macaw.svg';
import imgPig from './img/pig.svg';
import imgRabbit from './img/rabbit.svg';
import imgSheep from './img/sheep.svg';
import imgTurkey from './img/turkey.svg';
import imgWalrus from './img/walrus.svg';

export const questions = [ {
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['C', '?', 'T'],
    answers: [
        { text: 'E', correct: false },
        { text: 'A', correct: true },
        { text: 'O', correct: false }
    ],
    svg: imgCat
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['B', '?', 'A', 'R'],
    answers: [
        { text: 'E', correct: true },
        { text: 'A', correct: false },
        { text: 'F', correct: false },
        { text: 'G', correct: false }
    ],
    svg: imgBear
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['L', 'I', '?', 'N'],
    answers: [
        { text: 'B', correct: false },
        { text: 'A', correct: false },
        { text: 'O', correct: true },
        { text: 'E', correct: false }
    ],
    svg: imgLion
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['F', 'O', '?'],
    answers: [
        { text: 'X', correct: true },
        { text: 'C', correct: false },
        { text: 'F', correct: false }
    ],
    svg: imgFox
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['B', 'E', '?'],
    answers: [
        { text: 'F', correct: false },
        { text: 'R', correct: false },
        { text: 'E', correct: true }
    ],
    svg: imgBee
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['C', 'O', '?'],
    answers: [
        { text: 'A', correct: false },
        { text: 'W', correct: true },
        { text: 'E', correct: false }
    ],
    svg: imgCow
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['D', 'O', '?'],
    answers: [
        { text: 'B', correct: false },
        { text: 'G', correct: true },
        { text: 'E', correct: false }
    ],
    svg: imgDog
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['D', 'O', 'N', 'K', 'E', '?'],
    answers: [
        { text: 'Y', correct: true },
        { text: 'A', correct: false },
        { text: 'O', correct: false },
        { text: 'E', correct: false }
    ],
    svg: imgDonkey
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['D', '?', 'C', 'K'],
    answers: [
        { text: 'B', correct: false },
        { text: 'A', correct: false },
        { text: 'U', correct: true },
        { text: 'E', correct: false }
    ],
    svg: imgDuck
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['F', 'I', '?', 'H'],
    answers: [
        { text: 'I', correct: false },
        { text: 'S', correct: true },
        { text: 'O', correct: false },
        { text: 'E', correct: false }
    ],
    svg: imgFish
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['M', 'A', 'C', 'A', '?'],
    answers: [
        { text: 'A', correct: false },
        { text: 'W', correct: true },
        { text: 'C', correct: false },
        { text: 'M', correct: false },
    ],
    svg: imgMacaw
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['P', 'I', '?'],
    answers: [
        { text: 'B', correct: false },
        { text: 'A', correct: false },
        { text: 'G', correct: true },
    ],
    svg: imgPig
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['R', 'A', 'B', 'B', '?', 'T'],
    answers: [
        { text: 'E', correct: false },
        { text: 'A', correct: false },
        { text: 'I', correct: true },
        { text: 'Y', correct: false }
    ],
    svg: imgRabbit
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['S', '?', 'E', 'E', 'P'],
    answers: [
        { text: 'M', correct: false },
        { text: 'N', correct: false },
        { text: 'H', correct: true },
        { text: 'L', correct: false }
    ],
    svg: imgSheep
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['T', '?', 'R', 'K', 'E', 'Y'],
    answers: [
        { text: 'A', correct: false },
        { text: 'E', correct: false },
        { text: 'O', correct: false },
        { text: 'U', correct: true }
    ],
    svg: imgTurkey
},
{
    textQuestion: `Do you know what letter is missing ?`,
    questions: ['W', 'A', '?', 'R', 'U', 'S'],
    answers: [
        { text: 'H', correct: false },
        { text: 'M', correct: false },
        { text: 'L', correct: true },
        { text: 'M', correct: false }
    ],
    svg: imgWalrus
}
]