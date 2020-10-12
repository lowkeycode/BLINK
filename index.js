/* eslint-disable */


const question = document.querySelector(`.question`);
const answer = document.querySelector(`.answer`);
const btnQuestion = document.querySelector(`.btn-question`);
const btnAnswer = document.querySelector(`.btn-answer`);
const btnRestart = document.querySelector(`.btn-restart`);




const database = {
    semester1: {
        eyeHealth: {
            card0: {
                q: `What are the three main layers/tunics of the eye?`,
                a: `Retina, Choroid and Sclera.`,
            },
            card1: {
                q: `What are the three fluid filled chambers from front to back?`,
                a: `Anterior Chamber, Posterior Chamber and Vitreous Chamber`,
            },
            card2: {
                q: `What are the anterior and posterior spheres, respectively?`,
                a: `The Cornea and the Sclera.`
            },
            card3: {
                q: `What is the Palpebral Fissure?`,
                a: `The opening between eylids. (Normally visible in the Palpebral Fissure are the Cornea and Sclera)`,
            },
            card4: {
                q: `What is the Gray Line?`,
                a: `Used in many surgical procedures to split the upper and lower lids into two portions.`,
            },
            card5: {
                q: `What are the Meibomian Glands?`,
                a: ` The largest oil-secreting glands, which are embedded in the posterior connective tissue substance of the lids (called the Tarus).`,
            },
            card6: {
                q: `What is the Lacrimal Gland and where is it located?`,
                a: `Produces tears and is located above and lateral to the globe.`,
            },
        },
        course2: {
            
        },
        course3: {
            
        },
    },
    semester2: {
        course1: {
            
        },
        course2: {
            
        },
        course3: {
            
        },
    },
}

const eyeHealthArray = Object.entries(database.semester1.eyeHealth);
let arrayCounter = [];

function showRestartBtn() {
    btnRestart.hidden = false;
}

function restartBtnState() {
    btnRestart.hidden = true;
    btnQuestion.hidden = false;
    arrayCounter = [];
    question.textContent = `Click To Start.`;
}

function getRandomInt(array){
    return Math.floor(Math.random() * array.length);
}

function showCorrespondingAnswer(array) {
    let int = arrayCounter.length - 1;
    question.textContent = ``;
    let answer = array[int][1].a;
    question.textContent = answer;
}

function getRandomQuestion(array) {
    // Use random integer to get random index for question
    let int = getRandomInt(array);
    const randomQuestion = array[int][1].q;
    // If array counter has already seen that questions index, rerun until new question
    if(!arrayCounter.includes(int)) {
        arrayCounter.push(int);
        console.log(arrayCounter);
        question.textContent = randomQuestion;
    } else {
        getRandomQuestion(array);
    }

    // If no more questions hide question button/ show restart button
    if(array.length === arrayCounter.length) {
        btnQuestion.hidden = true;
        setTimeout(showRestartBtn, 3000);
    }

    
}







// Event Listeners

btnQuestion.addEventListener(`click`, function() {
    getRandomQuestion(eyeHealthArray);
    btnAnswer.hidden = false;
});

btnRestart.addEventListener(`click`, function() {
    restartBtnState();
});

btnAnswer.addEventListener(`click`, function() {
    showCorrespondingAnswer(eyeHealthArray);
});