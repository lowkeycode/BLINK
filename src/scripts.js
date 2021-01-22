/* eslint-disable */
const cardTitle = document.querySelector(".title");
const question = document.querySelector(`.question`);
const answer = document.querySelector(`.answer`);
const btnQuestion = document.querySelector(`.btn-question`);
const btnAnswer = document.querySelector(`.btn-answer`);
const btnRestart = document.querySelector(`.btn-restart`);

const topicMenu = document.querySelector(".menu");
const topics = document.querySelectorAll(".menu-item");

const database = {
  semester1: {
    visualacuitytesting: {
      card0: {
        q: `An examination room chart should be as close to 6 meters from the patient as possible.`,
        a: `True`,
      },
      card1: {
        q: `The numerator in 20/20 denotes the distance from the chart at which a normal person can see the chart letters.`,
        a: `False`,
      },
      card2: {
        q: `Refraction is the part of an eye examination in which tests are performed to determine if there is a need for an optical prescription.`,
        a: `True`,
      },
      card3: {
        q: `The Tumbling E test, Schering's chart or Allen cards only used to test visual acuity on preschool children.`,
        a: `False`,
      },
      card4: {
        q: `Kinetic vision can be easily tested using special instruments.`,
        a: `False`,
      },
      card5: {
        q: `Contrast sensitivity testing measures vision that is more like vision observed in real life.`,
        a: `True`,
      },
      card6: {
        q: `In most areas visual acuity of at least 20/60 OU is required to obtain a driver's license.`,
        a: `False`,
      },
      card7: {
        q: `In North America, a person is considered legally blind when best corrected distance visual acuity is 20/20 or less in the better eye.`,
        a: `True`,
      },
      card8: {
        q: `CF, HM LP/NLP are designations for vision measurement if a patient is unable to read the 20/200 large E.`,
        a: `True`,
      },
      card9: {
        q: `The distance at which the reading device should be held by the patient it 14 to 16 inches.`,
        a: `True`,
      },
    },
    occularmobility: {
      card0: {
        q: `If a patient has strabismus one of the eyes is always turned in or out.`,
        a: `False`,
      },
      card1: {
        q: `Occulusion of one eye is not necessry in order for another person to observe a significant tropia.`,
        a: `True`,
      },
      card2: {
        q: `The notation XT refers to an eye that is deviated nasally.`,
        a: `False`,
      },
      card3: {
        q: `Hirschberg's test can detect the presence of a tropia.`,
        a: `True`,
      },
      card4: {
        q: `When performing the unilateral cover test, in order to observe a tropia the examiner must observe the movement of the eye that has not been occluded.`,
        a: `True`,
      },
      card5: {
        q: `In a patient who has strabismus, suppression of the vision in one eye avoids double vision.`,
        a: `True`,
      },
      card6: {
        q: `When performing the alternating cover test, the examiner covers one eye and observes the movement of the opposite, uncovered eye.`,
        a: `False`,
      },
      card7: {
        q: `A third nerve palsy may cause a fixed pupil which does not dilate or constrict.`,
        a: `True`,
      },
      card8: {
        q: `Another name for afferent pupillary defect (RAPD) is Adie's pupil.`,
        a: `False`,
      },
      card9: {
        q: `A patient with tritanopia has an inherited yellow-blue color vision anomaly.`,
        a: `True`,
      },
    },
    visualfieldscreening: {
      card0: {
        q: `When performing confrontational visual fiels, the patient focuses on the opposite eye of the examiner.`,
        a: `True`,
      },
      card1: {
        q: `The normal physiologic blind spot is approximately 22° temporal to fixation.`,
        a: `False`,
      },
      card2: {
        q: `An Amsler grid is used in testing the central portion os the visual field.`,
        a: `True`,
      },
      card3: {
        q: `The central visual field is considered to be within 20° of vision straight-ahead.`,
        a: `False`,
      },
      card4: {
        q: `A scotoma ia an area of partial or complete blindness when the field of vision is relatively normal.`,
        a: `True`,
      },
      card5: {
        q: `An accurate way to check patient responses when performing the tangent screen test is to rotate the test object out of view so that it is not visible to the patient.`,
        a: `True`,
      },
      card6: {
        q: `The term hemianopia means that there is a bilateral defect in half of the visual field.`,
        a: `True`,
      },
      card7: {
        q: `The most common field defect in patients who experience hysterical visual fields is narrowed by 10°-20°.`,
        a: `True`,
      },
      card8: {
        q: `Confrontation VF test is the most commonly used method of perimetry.`,
        a: `True`,
      },
      card9: {
        q: `Tangent screen is a method by which distance visual field is tested.`,
        a: `False`,
      },
      card10: {
        q: `An isopter is a map of the circumference of a visual field.`,
        a: `True`,
      },
      card11: {
        q: `When visual field testing is performed for the purpose of a patient obtaining a driver's license, the eyes are tested monocularly.`,
        a: `False`,
      },
      card12: {
        q: `Static perimetry uses a stationary target.`,
        a: `True`,
      },
    },
    glaucoma: {
      card0: {
        q: `Gonioscopy is used to differentiate between the major types of glaucoma.`,
        a: `True`,
      },
      card1: {
        q: `Tonography is a technique which can measure aqueous outflow.`,
        a: `True`,
      },
      card2: {
        q: `Patients with thick corneas may be at greater risk for developing glaucoma.`,
        a: `False`,
      },
      card3: {
        q: `Anterior segment optical coherence tomography (OCT) is useful in determining whether or not a patient has a narrow anterior chamber angle.`,
        a: `True`,
      },
      card4: {
        q: `Glaucomatous damage to the nerve fiber layer of the retina and to the optic disc result in visual field defects.`,
        a: `True`,
      },
      card5: {
        q: `Air puff tonometers tend to measure IOP lower than other types of tonometers.`,
        a: `False`,
      },
      card6: {
        q: `Visual field defects in glaucoma patients occur only if the patient has an abnormal optic disc.`,
        a: `True`,
      },
      card7: {
        q: `Visual field changes in glaucoma begin close to the center of the patient's field of vision and progress outward toward peripheral vision.`,
        a: `False`,
      },
      card8: {
        q: `Static perimetry is more sensitive for detecting early glaucomatous field defects.`,
        a: `True`,
      },
      card9: {
        q: `The Schiotz is an applanation tonometer.`,
        a: `False`,
      },
      card10: {
        q: `Shiotz tonometry does not require topical anesthetic drops.`,
        a: `False`,
      },
      card11: {
        q: `In normal eyes the optic cup is smaller than the optic disc.`,
        a: `True`,
      },
    },
  },
};

let questionTallyArray = [];

let selectedTopic;

let currentTopic;

const resetTopic = function () {
  questionTallyArray = [];

  question.textContent = "Click To Start.";

  topics.forEach((topic) => {
    topic.classList.remove("active");
  });
};

const activateTopic = function (e) {
  if (e.target.classList.contains("menu-item")) {
    resetTopic(e);

    e.target.classList.add("active");

    selectedTopic = e.target.textContent.toLowerCase().split(" ").join("");

    cardTitle.textContent = e.target.textContent;
  }

  for (const topic of Object.entries(database.semester1)) {
    if (topic[0] === selectedTopic) {
      currentTopic = Object.entries(topic[1]);
    }
  }
};

function showRestartBtn() {
  btnRestart.hidden = false;
}

function resetAll() {
  btnRestart.hidden = true;
  btnQuestion.hidden = false;
  resetTopic();
}

function getRandomInt(array) {
  return Math.floor(Math.random() * array.length);
}

const offerRestart = function (array) {
  if (array.length === questionTallyArray.length) {
    btnQuestion.hidden = true;
    btnAnswer.hidden = true;
    setTimeout(showRestartBtn, 2000);
  }
};

const checkForDuplicateQuestion = function (array) {
  let int = getRandomInt(array);
  const randomQuestion = array[int][1].q;

  if (!questionTallyArray.includes(int)) {
    questionTallyArray.push(int);
    console.log(questionTallyArray);
    question.textContent = randomQuestion;
  } else {
    getRandomQuestion(array);
  }
};

function getRandomQuestion(array) {
  if (!selectedTopic) return;

  btnAnswer.hidden = false;

  checkForDuplicateQuestion(array);

  offerRestart(array);
}

function showCorrespondingAnswer(array) {
  let int = questionTallyArray[questionTallyArray.length - 1];
  console.log(int);
  question.textContent = ``;
  let answer = array[int][1].a;
  question.textContent = answer;
}

btnQuestion.addEventListener(`click`, function () {
  getRandomQuestion(currentTopic);
});

btnRestart.addEventListener(`click`, function () {
  resetAll();
});

btnAnswer.addEventListener(`click`, function () {
  showCorrespondingAnswer(currentTopic);
});

topicMenu.addEventListener("click", activateTopic);
