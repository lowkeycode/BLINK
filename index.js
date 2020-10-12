/* eslint-disable */


const question = document.querySelector(`.question`);
const answer = document.querySelector(`.answer`);




const database = {
    semester1: {
        eyeHealth: {
            card1: {
                q: `What are the three main layers/tunics of the eye?`,
                a: `Retina, Choroid and Sclera.`,
            },
            card2: {
                q: `What are the three fluid filled chambers from front to back?`,
                a2: `Anterior Chamber, Posterior Chamber and Vitreous Chamber`,
            },
            card3: {
                q: `What are the anterior and posterior spheres, respectively?`,
                a: `The Cornea and the Sclera.`
            },
            card4: {
                q: `What is the Palpebral Fissure?`,
                a: `The opening between eylids. (Normally visible in the Palpebral Fissure are the Cornea and Sclera)`,
            },
            card5: {
                q: `What is the Gray Line?`,
                a: `Used in many surgical procedures to split the upper and lower lids into two portions.`,
            },
            card6: {
                q: `What are the Meibomian Glands?`,
                a: ` The largest oil-secreting glands, which are embedded in the posterior connective tissue substance of the lids (called the Tarus).`,
            },
            card7: {
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

function getRandomQuestion(array) {
    let int = getRandomInt(array);
    const randomQuestion = array[int][1].q;
    question.textContent = randomQuestion;
    
}


function getRandomInt(array){
    return Math.floor(Math.random() * array.length + 1);
}


question.textContent = database.semester1.eyeHealth.card1.q;



getRandomQuestion(eyeHealthArray);