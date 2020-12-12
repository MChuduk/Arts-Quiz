var cardsData = [];
var roundTime = 8;
var nextCardIndex = 0;
var score = 0;
var timerID;

var gameMainContainer;
var gameHeaderContainer;
var gameResultContainer;
var cardContainer;
var choiceButtonsContainer;
var statsContainer;
var choiceResultContainer;
var setupContainer;
var timer;

var gameMode = "art-vs-baffing";
var rightChoice = "";
var wrongChoice = "";

$(document).ready(function() 
{
	setupContainer = new QuizSetupHelper(".quiz-setup-container");
	gameMainContainer =  new BasicContainer(".quiz-game-container");
	gameHeaderContainer = new BasicContainer(".quiz-header");
	choiceButtonsContainer = new BasicContainer(".choice-controls");
	choiceResultContainer = new ChoiceResultBox("#choice-result");
	statsContainer = new StatsBox("#stats-box");
	gameResultContainer = new BasicContainer(".quiz-results-container");
	cardContainer = new CardContainer(".card-container");
	timer = document.querySelector(".timer-line");

	document.querySelector("#left-arrow-button").addEventListener("click", function(){setupContainer.showContainer(-1)});
	document.querySelector("#right-arrow-button").addEventListener("click", function(){setupContainer.showContainer(1)});
	document.querySelector("#art-vs-baffing").addEventListener("click", function(){setupContainer.selectGameMode("art-vs-baffing")});
	document.querySelector("#sculpture-vs-jekart").addEventListener("click", function(){setupContainer.selectGameMode("sculpture-vs-jekart")});
});

function OnSetupComplete()
{
	setupContainer.setDisplay("none");
	gameMainContainer.setDisplay("block");
	gameHeaderContainer.setDisplay("block");

	StartGame();
}

function SetGameMode(gameMode)
{
	rightChoice = (gameMode === "art-vs-baffing") ? "art" : "sculpture";
	wrongChoice = (gameMode === "art-vs-baffing") ? "baffing" : "jekart";
	cardContainer.key = (gameMode === "art-vs-baffing") ? "art" : "sculpture";
	cardContainer.rightBackgroundUrl = 
	(gameMode === "art-vs-baffing") ? "url(data/img/backgrounds/art_back.jpg)" : "url(data/img/backgrounds/sculpture_back.jpg)";
	cardContainer.wrongBackgroundUrl = 
	(gameMode === "art-vs-baffing") ? "url(data/img/backgrounds/baffing_back.jpg)" : "url(data/img/backgrounds/jekart_back.jpg)";

	document.querySelector("#right-choice-button img").src = 
	(gameMode === "art-vs-baffing") ? "data/img/icons/art-icon.png" : "data/img/icons/sculpture-icon.png";
	document.querySelector("#wrong-choice-button img").src = 
	(gameMode === "art-vs-baffing") ? "data/img/icons/baffing-icon.png" : "data/img/icons/jekart-icon.png";

	LoadCardsData(gameMode);
}

function StartGame()
{
	SetGameMode(gameMode);
	AddChoiceEvents();

	ShuffleArray(cardsData)
	SetNextCard();
}

function OnHomeButtonClick()
{
	document.location.reload();
}

function OnRightChoiceButtonClick()
{
	MakeChoice(rightChoice);
}

function OnWrongChoiceButtonClick()
{
	MakeChoice(wrongChoice);
}

function MakeChoice(choice)
{
	if(choice === cardContainer.type)
	{
		console.log("right answer");
		score++;
	}
	else
	{
		console.log("wrong answer");
	}
	RemoveChoiceEvents();
	RestartTimer();
	cardContainer.flip();
	cardContainer.focus();
	choiceButtonsContainer.hide();
	setTimeout(() => choiceResultContainer.loadAndShow(cardsData[nextCardIndex - 1], choice), 200);
	setTimeout(() => AddContinueEvent(), 200);
}

function Continue()
{
	RemoveContinueEvent();
	cardContainer.hide();
	choiceResultContainer.hide();

	if(nextCardIndex < cardsData.length)
	{
		AddChoiceEvents();
		setTimeout(() => SetNextCard(), 500);
	}
	else
	{
		setTimeout(() => GameEnd(), 500);
	}
}

function GameEnd()
{
	gameMainContainer.setDisplay("none");
	gameHeaderContainer.setDisplay("none");
	gameResultContainer.setDisplay("block");
	gameResultContainer.show("fadeIn 0.5s forwards");
	statsContainer.setStat(score);
	
	console.log("game end");
}

function SetNextCard()
{
	let loader = new BasicContainer(".loader");
	loader.setDisplay("block");

	document.querySelector(".card-img").onload = function()
	{
		setTimeout(() => loader.setDisplay("none"), 300);
		
		cardContainer.flip();
		setTimeout(() => cardContainer.show(), 300);
		setTimeout(() => choiceButtonsContainer.show(), 500);
		setTimeout(() => StartTimer(), 500);
	}
	document.querySelector("#round-text").innerHTML = (nextCardIndex + 1) + "/20";

	cardContainer.loadData(cardsData[nextCardIndex]);
	nextCardIndex++;
}

function RestartTimer()
{
	timer.style.removeProperty('animation');
	clearInterval(timerID);
}

function StartTimer()
{
	timer.style.animation = "timer " + roundTime + "s linear 1";
	timerID = setTimeout(() => OnTimeEnd(), roundTime * 1000);
}

function OnTimeEnd()
{
	MakeChoice("time-over");
}

function OnLeftArrowButtonClick()
{
	setupHelper.showPrevContainer();
}

function OnRightArrowButtonClick()
{
	setupHelper.showNextContainer();
}

function AddChoiceEvents()
{
	document.querySelector("#right-choice-button").addEventListener("mousedown", OnRightChoiceButtonClick);
	document.querySelector("#wrong-choice-button").addEventListener("mousedown", OnWrongChoiceButtonClick);
}

function RemoveChoiceEvents()
{
	document.querySelector("#right-choice-button").removeEventListener("mousedown", OnRightChoiceButtonClick);
	document.querySelector("#wrong-choice-button").removeEventListener("mousedown", OnWrongChoiceButtonClick);
}

function AddContinueEvent()
{
	document.querySelector(".card-flipper").addEventListener("mousedown", Continue);
}

function RemoveContinueEvent()
{
	document.querySelector(".card-flipper").removeEventListener("mousedown", Continue);
}

function ShuffleArray(array)
{
	for(let i = 0; i < array.length; i++)
	{
		let indexA = GetRandomInt(array.length);
		let indexB = GetRandomInt(array.length);

		let tmp = array[indexA];
		array[indexA] = array[indexB];
		array[indexB] = tmp;
	}
}

function GetRandomInt(max) 
{
  	return Math.floor(Math.random() * Math.floor(max));
}