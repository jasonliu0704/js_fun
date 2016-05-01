// pane elements
var rightPane = document.getElementById('right-pane');
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

// Task1: When the question form in the right pane is submitted,
// add a question to the left pane.
$("#question-form").bind("submit", function(e){
	e.preventDefault();
	//get questions from local storage
	var questions = getStoredQuestions();
	var newquestion = {
	 id: questions.length,
	 subject: $('body #wrapper #right-pane form[id="question-form"] input[name="subject"]').val(),
	 question: $('body #wrapper #right-pane form[id="question-form"] textarea[name="question"]').val()
	};
	questions.push(newquestion);
	//store updated questions to local storage
	storeQuestions(questions);
	//render
	var html = renderQuestions(questions);
	$('div[id="navigation"] div[id="left-pane').html(html);
	
});

// TODO: display question list initially (if there are existing questions)
