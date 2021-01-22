// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/scripts.js":[function(require,module,exports) {
/* eslint-disable */
var cardTitle = document.querySelector(".title");
var question = document.querySelector(".question");
var answer = document.querySelector(".answer");
var btnQuestion = document.querySelector(".btn-question");
var btnAnswer = document.querySelector(".btn-answer");
var btnRestart = document.querySelector(".btn-restart");
var topicMenu = document.querySelector(".menu");
var topics = document.querySelectorAll(".menu-item");
var database = {
  semester1: {
    visualacuitytesting: {
      card0: {
        q: "An examination room chart should be as close to 6 meters from the patient as possible.",
        a: "True"
      },
      card1: {
        q: "The numerator in 20/20 denotes the distance from the chart at which a normal person can see the chart letters.",
        a: "False"
      },
      card2: {
        q: "Refraction is the part of an eye examination in which tests are performed to determine if there is a need for an optical prescription.",
        a: "True"
      },
      card3: {
        q: "The Tumbling E test, Schering's chart or Allen cards only used to test visual acuity on preschool children.",
        a: "False"
      },
      card4: {
        q: "Kinetic vision can be easily tested using special instruments.",
        a: "False"
      },
      card5: {
        q: "Contrast sensitivity testing measures vision that is more like vision observed in real life.",
        a: "True"
      },
      card6: {
        q: "In most areas visual acuity of at least 20/60 OU is required to obtain a driver's license.",
        a: "False"
      },
      card7: {
        q: "In North America, a person is considered legally blind when best corrected distance visual acuity is 20/20 or less in the better eye.",
        a: "True"
      },
      card8: {
        q: "CF, HM LP/NLP are designations for vision measurement if a patient is unable to read the 20/200 large E.",
        a: "True"
      },
      card9: {
        q: "The distance at which the reading device should be held by the patient it 14 to 16 inches.",
        a: "True"
      }
    },
    occularmobility: {
      card0: {
        q: "If a patient has strabismus one of the eyes is always turned in or out.",
        a: "False"
      },
      card1: {
        q: "Occulusion of one eye is not necessry in order for another person to observe a significant tropia.",
        a: "True"
      },
      card2: {
        q: "The notation XT refers to an eye that is deviated nasally.",
        a: "False"
      },
      card3: {
        q: "Hirschberg's test can detect the presence of a tropia.",
        a: "True"
      },
      card4: {
        q: "When performing the unilateral cover test, in order to observe a tropia the examiner must observe the movement of the eye that has not been occluded.",
        a: "True"
      },
      card5: {
        q: "In a patient who has strabismus, suppression of the vision in one eye avoids double vision.",
        a: "True"
      },
      card6: {
        q: "When performing the alternating cover test, the examiner covers one eye and observes the movement of the opposite, uncovered eye.",
        a: "False"
      },
      card7: {
        q: "A third nerve palsy may cause a fixed pupil which does not dilate or constrict.",
        a: "True"
      },
      card8: {
        q: "Another name for afferent pupillary defect (RAPD) is Adie's pupil.",
        a: "False"
      },
      card9: {
        q: "A patient with tritanopia has an inherited yellow-blue color vision anomaly.",
        a: "True"
      }
    },
    visualfieldscreening: {
      card0: {
        q: "When performing confrontational visual fiels, the patient focuses on the opposite eye of the examiner.",
        a: "True"
      },
      card1: {
        q: "The normal physiologic blind spot is approximately 22\xB0 temporal to fixation.",
        a: "False"
      },
      card2: {
        q: "An Amsler grid is used in testing the central portion os the visual field.",
        a: "True"
      },
      card3: {
        q: "The central visual field is considered to be within 20\xB0 of vision straight-ahead.",
        a: "False"
      },
      card4: {
        q: "A scotoma ia an area of partial or complete blindness when the field of vision is relatively normal.",
        a: "True"
      },
      card5: {
        q: "An accurate way to check patient responses when performing the tangent screen test is to rotate the test object out of view so that it is not visible to the patient.",
        a: "True"
      },
      card6: {
        q: "The term hemianopia means that there is a bilateral defect in half of the visual field.",
        a: "True"
      },
      card7: {
        q: "The most common field defect in patients who experience hysterical visual fields is narrowed by 10\xB0-20\xB0.",
        a: "True"
      },
      card8: {
        q: "Confrontation VF test is the most commonly used method of perimetry.",
        a: "True"
      },
      card9: {
        q: "Tangent screen is a method by which distance visual field is tested.",
        a: "False"
      },
      card10: {
        q: "An isopter is a map of the circumference of a visual field.",
        a: "True"
      },
      card11: {
        q: "When visual field testing is performed for the purpose of a patient obtaining a driver's license, the eyes are tested monocularly.",
        a: "False"
      },
      card12: {
        q: "Static perimetry uses a stationary target.",
        a: "True"
      }
    },
    glaucoma: {
      card0: {
        q: "Gonioscopy is used to differentiate between the major types of glaucoma.",
        a: "True"
      },
      card1: {
        q: "Tonography is a technique which can measure aqueous outflow.",
        a: "True"
      },
      card2: {
        q: "Patients with thick corneas may be at greater risk for developing glaucoma.",
        a: "False"
      },
      card3: {
        q: "Anterior segment optical coherence tomography (OCT) is useful in determining whether or not a patient has a narrow anterior chamber angle.",
        a: "True"
      },
      card4: {
        q: "Glaucomatous damage to the nerve fiber layer of the retina and to the optic disc result in visual field defects.",
        a: "True"
      },
      card5: {
        q: "Air puff tonometers tend to measure IOP lower than other types of tonometers.",
        a: "False"
      },
      card6: {
        q: "Visual field defects in glaucoma patients occur only if the patient has an abnormal optic disc.",
        a: "True"
      },
      card7: {
        q: "Visual field changes in glaucoma begin close to the center of the patient's field of vision and progress outward toward peripheral vision.",
        a: "False"
      },
      card8: {
        q: "Static perimetry is more sensitive for detecting early glaucomatous field defects.",
        a: "True"
      },
      card9: {
        q: "The Schiotz is an applanation tonometer.",
        a: "False"
      },
      card10: {
        q: "Shiotz tonometry does not require topical anesthetic drops.",
        a: "False"
      },
      card11: {
        q: "In normal eyes the optic cup is smaller than the optic disc.",
        a: "True"
      }
    }
  }
};
var questionTallyArray = [];
var selectedTopic;
var currentTopic;

var resetTopic = function resetTopic() {
  questionTallyArray = [];
  question.textContent = "Click To Start.";
  topics.forEach(function (topic) {
    topic.classList.remove("active");
  });
};

var activateTopic = function activateTopic(e) {
  if (e.target.classList.contains("menu-item")) {
    resetTopic(e);
    e.target.classList.add("active");
    selectedTopic = e.target.textContent.toLowerCase().split(" ").join("");
    cardTitle.textContent = e.target.textContent;
  }

  for (var _i = 0, _Object$entries = Object.entries(database.semester1); _i < _Object$entries.length; _i++) {
    var topic = _Object$entries[_i];

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

var offerRestart = function offerRestart(array) {
  if (array.length === questionTallyArray.length) {
    btnQuestion.hidden = true;
    btnAnswer.hidden = true;
    setTimeout(showRestartBtn, 2000);
  }
};

var checkForDuplicateQuestion = function checkForDuplicateQuestion(array) {
  var int = getRandomInt(array);
  var randomQuestion = array[int][1].q;

  if (!questionTallyArray.includes(int)) {
    questionTallyArray.push(int); // console.log(questionTallyArray);

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
  var int = questionTallyArray[questionTallyArray.length - 1]; //   console.log(int);

  question.textContent = "";
  var answer = array[int][1].a;
  question.textContent = answer;
}

btnQuestion.addEventListener("click", function () {
  getRandomQuestion(currentTopic);
});
btnRestart.addEventListener("click", function () {
  resetAll();
});
btnAnswer.addEventListener("click", function () {
  showCorrespondingAnswer(currentTopic);
});
topicMenu.addEventListener("click", activateTopic);
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51170" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/scripts.js"], null)
//# sourceMappingURL=/scripts.13aae5c5.js.map