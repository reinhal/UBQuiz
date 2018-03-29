

const STORE = [
  {
    question: 'What is urban beekeeping?',
    answers: [
      {
      text: 'The practice of keeping a city garden that attracts many different kinds of pollinators, including bees.',
      correct: false
      },
      {
        text: 'The practice of keeping bee hives in urban areas.  It is also referred to as hobby beekeeping or backyard beekeeping.',
        correct: true
      },
      {
        text: 'The practice of keeping many beehives at the same location.  It looks like a \“bee city\”.',
        correct: false
      },
      {
        text: 'The practice of keeping bees on rooftops in large densely populated downtown areas of large cities.',
        correct: false
      },
      ]
  },
  {
    question: 'What are the different types of bee in the hive?',
    answers: [
      {
      text: 'Honey bees, Bumble Bees, Sweat Bees',
      correct: false
      },
      {
      text: 'The worker bee, the drone, and the Queen bee.',
      correct: true
      },
      {
      text: 'Male bees, females bees, Queen bee.',
      correct: false
      },
      {
      text: 'Worker bee and Queen bee.',
      correct: false
      },
      ]
  },
  {
  question: 'What are the typical types of beehive to choose from?',
  answers: [
    {
    text: 'Wooden hives, plastic hives, tree hives ',
    correct: false
    },
    {
    text: 'Horizontal hives, vertical hives',
    correct: false
    },
    {
    text: 'Box hives, Frame hives, Triangle hives',
    correct: false
    },
    {
    text: 'Top bar hives, Warre hives, Langstroth hives',
    correct: true
    },
    ]
},
{
  question: 'What do urban beekeepers need to first consider when starting a hive?',
  answers: [
    {
      text:'Bee stings, feeding the bees, finding a swarm, type of bee',
      correct: false
    },
    {
      text:'Weather patterns, predators, honey production',
      correct: false
    },
    {
      text:'City regulations and laws, location of the hive on the property, neighbors, water source for the bees, work space and time, finding a group/mentor',
      correct: true
    },
    {
      text:'The color of the hive, the number of hives, types of flowers on the property, which direction the hive faces',
      correct: false
    },     
    ]
},
{
  question: 'How far can bees travel?',
  answers: [
    {
      text:'20 miles',
      correct: false
    },
    {
      text:'2000 feet',
      correct: false
    },
    {
      text:'3 miles',
      correct: true
    },
    {
      text:'10 miles',
      correct: false
    },
  ]
},
{
  question: 'What is the role of the queen bee?',
  answers: [
    {
      text:'Run the hive.',
      correct: false,
    },
    {
      text:'Lay eggs.',
      correct: true,
    },
    {
      text:'Make the honey.',
      correct: false,
    },
    {
      text:'Get the nectar.',
      correct: false,
    },
  ],
},
{
  question: 'What do the drone bees do?',
  answers: [
    {
      text:'Fertilize the queen.',
      correct: true,
    },
    {
      text:'Move the honey into the storage cells.',
      correct: false,
    },
    {
      text:'Keep the hive clean.',
      correct: false,
    },
    {
      text:'Look for pollen and nectar.',
      correct: false,
    },
    ],
},
{
  question: 'What do the workers bees do?',
  answers: [
    {
      text:'Produce honey.',
      correct: false,
    },
    {
      text:'Fertilize the queen.',
      correct: false,
    },
    {
      text:'Lay eggs.',
      correct: false,
    },
    {
      text:'Clean the honeycomb, feed the bee larvae, build new honeycomb, <br> store the pollen and nectar, guard the hive, gathers pollen and nectar.',
      correct: true,
    },
  ],
},
{
  question: 'What equipment is needed to start beekeeping?',
  answers: [
    {
      text:'A hive, empty glass jars, an extractor, and a good brush and comb cutting knife',
      correct: false,
    },
    {
      text:'A hive, a smoker, a beekeeper’s suit with hat, veil, and long gloves, a hive tool, and bees',
      correct: true,
    },
    {
      text:'A hive, a queen marking tube, swarm trap, frame grip, gloves',
      correct: false,
    },
    {
      text:'A hive, some bees, plastic spray bottle and bucket, a smoker, water',
      correct: false,
    },
    ]
},
{
  question: 'How do bees survive the winter?',
  answers: [
    {
      text:'They can’t.',
      correct: false,
    },
    {
      text:'They insulate the hive and hibernate.',
      correct: false,
    },
    {
      text:'The bees ball up surrounding the queen to keep her warm.',
      correct: true,
    },
    {
      text:'They migrate to a hive located in a warmer, sunnier location.',
      correct: false,
    },
    ]
},
]

let currentQuestionIndex = 0;
let currentQuestion = STORE[currentQuestionIndex];
let score = 0;
let incorrect = 0;
let correctAnswer

  function startQuiz() {
      $('.startButton').click(function() {
      $('#quizStart').toggleClass('hidden');
      $('#questionAnswerView').toggleClass('hidden');
      renderQuestion();
    });
  }

  function attachChooseHandler() {
    $('form').submit(function(event) {
      event.preventDefault();
      $('#answerView .questionCount').html(currentQuestionIndex + 1);
      $('#answerView .question').html(currentQuestion.question);
        if ($( 'input:checked' ).val() === "true" ) {
           rightChoice();
      }
        else {
           wrongChoice();
      }
      $('#answerView .scoreCount').html(score);
      $('#answerView .incorrectCount').html(incorrect);
      $('#questionAnswerView').toggleClass('hidden');
      $('#answerView').toggleClass('hidden');
    });
  }
  
  function rightChoice() {
      score++;
      $('#answerResults').html("<h2 id='correct'>Correct!</h2>");
  }
  
  function wrongChoice() {
    incorrect++
     $('#answerResults').html(`<h2 id='wrong'>good guess, the right answer is...</h2>
        <h2 id = 'rightAnswer'>${correctAnswer}</h2>`);
  }

  function renderQuestion() {
    $('#questionAnswerView .questionCount').html(currentQuestionIndex + 1);
    $('#questionAnswerView .question').html(currentQuestion.question); 
    let answerHTML = '';
      for (var i = 0; i < currentQuestion.answers.length; i++) {
      const answers = currentQuestion.answers[i]; 
      if (answers.correct === true) {
        correctAnswer = answers.text
      }
      answerHTML += `<section role = 'region' class='form-check'> <fieldset><legend>possible answer:</legend>
        <input class='form-check-input' type='radio' name='questionAnswerForm' id=answers${i} value=${answers.correct} checked>
          <label class='answer' for=answers${i}>${answers.text}</label> </fieldset>
        </section>`
      }
       answerHTML += `<button type="submit" class="btn btn-secondary btn-lg btn-block answerButton">submit answer</button>`;
    $('form').html(answerHTML);
    $('#questionAnswerView .scoreCount').html(score);
    $('#questionAnswerView .incorrectCount').html(incorrect);
  }

  function renderNextQuestion() {
    $('.nextButton').click(function() {
     if (currentQuestionIndex < 9) { 
       currentQuestionIndex = currentQuestionIndex + 1
       currentQuestion = STORE[currentQuestionIndex];
       renderQuestion();
       $('#questionAnswerView').toggleClass('hidden');
       $('#answerView').toggleClass('hidden');
     }
     else {
       currentQuestionIndex === 9;
       $('#finalView').toggleClass('hidden');
       $('#finalView .scoreCount').html(score);
       $('#finalView .incorrectCount').html(incorrect);
       $('#answerView').toggleClass('hidden');
       }
    });
  }

  function attachRestartHandler() {
  $('.retakeButton').click(function() {
      location.reload();
    });
}
  
function takeBeeQuiz() {
  startQuiz();
  renderQuestion();
  attachChooseHandler();
  renderNextQuestion();
  attachRestartHandler();
}  

$(takeBeeQuiz);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  