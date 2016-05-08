// pane elements
var rightPane = document.getElementById('right-pane');
var questionid;
// TODO: add other panes here

// button and input elements
// TODO: add button/input element selectors here

/* Returns the questions stored in localStorage. */
function getStoredQuestions() {
  if (!localStorage.questions) {
    // default to empty array
    localStorage.questions = JSON.stringify([]);
  }

  return JSON.parse(localStorage.questions);
}

/* Store the given questions array in localStorage.
 *
 * Arguments:
 * questions -- the questions array to store in localStorage
 */
function storeQuestions(questions) {
  localStorage.questions = JSON.stringify(questions);
}

// TODO: tasks 1-5 and one extension

// display question form initially
rightPane.appendChild(renderQuestionForm());
$('div[id="navigation"] div[id="left-pane').html(renderQuestions(getStoredQuestions()));

// Task1: When the question form in the right pane is submitted,
// add a question to the left pane.
// Task2: When a question box in the left pane is clicked, display the question, the response form, 
// and the responses in the right pane.
// Task 3: When the new question form button is clicked, display the question form in the right pane.
//Task 4: When the answer form is submitted, append an answer to the “Previous Answers” 
//Task 5: When the resolve button is clicked, remove the associated question from the question 
$('#interactors .btn').on('click', function(e){
	e.preventDefault();
	$('#right-pane').html(renderQuestionForm().outerHTML);
});

// add event listener to display expandedQuestion form
$('div[id="navigation"] div[id="left-pane"]').on('click','div[class="list-question question-info"]', function(e){
	var questions = getStoredQuestions();
	questionid = $(this).attr('id');
	$('#right-pane').html(renderExpandedQuestion(questions[$(this).attr('id')]).outerHTML);	
});

$("body #wrapper #right-pane").on('submit', 'form[id="question-form"]', function(e){
	e.preventDefault();
	//get questions from local storage
	var questions = getStoredQuestions();
	var newquestion = {
	 id: questions.length,
	 subject: $('body #wrapper #right-pane form[id="question-form"] input[name="subject"]').val(),
	 question: $('body #wrapper #right-pane form[id="question-form"] textarea[name="question"]').val(),
	 responses: []
	};
	questions.push(newquestion);
	//store updated questions to local storage
	storeQuestions(questions);
	//render
	var q = renderQuestions(questions);
	$('div[id="navigation"] div[id="left-pane"]').html(q.outerHTML);

	//reset form
	$('body #wrapper #right-pane form[id="question-form"]')[0].reset();
});

$("body #wrapper #right-pane").on('submit', '#response-form', function(e){
	e.preventDefault();
	var response = {};
	response.name = $(this).find('input[type="text"]').val();
	response.response = $(this).find('textarea').val();
	var questions = getStoredQuestions();
	questions[questionid].responses.push(response);
	storeQuestions(questions);
	$('div .list-question.question-info#' + questionid).click();
});

$("body #wrapper #right-pane").on('click', 'a', function(e){
	var questions = getStoredQuestions();
	questions.splice(questionid, 1);
	storeQuestions(questions);
	$('#interactors .btn').click();
	var q = renderQuestions(questions);
	('div[id="navigation"] div[id="left-pane"]').html

})