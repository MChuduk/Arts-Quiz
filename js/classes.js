class BasicContainer
{
	constructor(selector)
	{
		this.$container = document.querySelector(selector);
	}

	show(animation = "fadeIn 0.5s forwards, moveTop 0.5s forwards")
	{
		this.$container.style.visibility = "visible";
		this.$container.style.animation = animation;
	}

	hide(animation = "fadeOut 0.5s forwards, moveBottom 0.5s forwards")
	{
		this.$container.style.animation = animation;

		let delay = parseFloat(animation.split(" ")[1].replace("s", ""));
		setTimeout(() => this.$container.style.visibility = "hidden", delay * 1000);
	}

	focus(animation = "focus 0.5s forwards")
	{
		this.$container.style.animation = animation;
	}

	setDisplay(value)
	{
		this.$container.style.display = value;
	}
}

class CardContainer extends BasicContainer
{
	constructor(selector)
	{
		super(selector);

		this.type = "";
		this.key = "";
		this.rightBackgroundUrl = "";
		this.wrongBackgroundUrl = "";
		this.flipAngle = 0;
	}

	loadData(data)
	{
		this.$container.querySelector(".card-img").src = data.imgSrc;
		this.type = data.type;

		this.$container.querySelector(".card-back").style.backgroundImage = 
		(this.type === this.key) ? this.rightBackgroundUrl : this.wrongBackgroundUrl;
	}

	flip()
	{
		this.flipAngle = (this.flipAngle === 0) ? 180 : 0;
		this.$container.querySelector(".card-flipper").style.transform = "rotateY(" + this.flipAngle + "deg)";
	}
}

class ChoiceResultBox extends BasicContainer
{
	constructor(selector)
	{
		super(selector);

		this.$choiceIcon = this.$container.querySelector("#choice-result #sm-icon");
		this.$imgIcon = this.$container.querySelector("#choice-result #mid-icon");
		this.$text = this.$container.querySelector("#choice-result p");
	}

	loadAndShow(data, choice)
	{
		if(choice === data.type)
		{
			this.$choiceIcon.style.display = "block";
			this.$choiceIcon.src = "data/img/icons/toggle-icon.png";
			this.$text.innerHTML = "<strong>Верно.</strong>";
		}
		else
		{
			this.$choiceIcon.style.display = "block";
			this.$choiceIcon.src = "data/img/icons/cross-icon.png";
			this.$text.innerHTML = "<strong>Неверно.</strong>";
		}
		if(choice === "time-over")
		{
			this.$choiceIcon.style.display = "none";
			this.$text.innerHTML = "";
		}
		this.$text.innerHTML += " " + data.description;
		this.$imgIcon.src = data.imgSrc;
		this.show();
		this.setDisplay("flex");
	}
}

class QuizSetupHelper extends BasicContainer
{
	constructor(selector)
	{
		super(selector);

		this.gameMode = "art_vs_baffing";
		this.$quizSetupContainer = document.querySelector(".quiz-setup-container");
		this.$leftArrowButton = this.$quizSetupContainer.querySelector("#left-arrow-button");
		this.$rightArrowButton = this.$quizSetupContainer.querySelector("#right-arrow-button");

 		this.containersArray = [];
		this.containersArray[0] = new BasicContainer("#preamble-box");
		this.containersArray[1] = new BasicContainer("#title-box");
		this.containersArray[2] = new BasicContainer("#rules-box");
		this.containersArray[3] = new BasicContainer("#gamemode-box");

		this.reset();
		this.showArrowButtons();
	}

	showContainer(direction)
	{
		if(this.currentContainerIndex + direction < this.containersArray.length)
		{
			if(this.currentContainerIndex + direction >= 0)
			{
				this.containersArray[this.currentContainerIndex].setDisplay("none");
				this.currentContainerIndex += direction;
				this.containersArray[this.currentContainerIndex].setDisplay("flex");
				this.showArrowButtons();
			}
		}
		else
		{
			OnSetupComplete();
		}
	}

	selectGameMode(selectedGameMode)
	{
		gameMode = selectedGameMode;

		let $art_vs_baffing = this.$quizSetupContainer.querySelector("#art-vs-baffing");
		let $sculpture_vs_jekart = this.$quizSetupContainer.querySelector("#sculpture-vs-jekart");

		$art_vs_baffing.className = (gameMode === "art-vs-baffing") ? "info-box game-mode selected" : "info-box game-mode";
		$sculpture_vs_jekart.className = (gameMode === "sculpture-vs-jekart") ? "info-box game-mode selected" : "info-box game-mode";
	}

	showArrowButtons()
	{
		this.$leftArrowButton.style.visibility = (this.currentContainerIndex === 0) ? "hidden" : "visible";
		this.$rightArrowButton.style.visibility = (this.currentContainerIndex === this.containersArray.length) ? "hidden" : "visible";
	}

	reset()
	{
		this.containersArray[0].setDisplay("flex");
		this.currentContainerIndex = 0;
		for(let i = 1; i < this.containersArray.length; i++)
		{
			this.containersArray[i].setDisplay("none");
		}
		this.showArrowButtons();
	}
}

class CardData
{
	constructor(options)
	{
		this.type = options.type;
		this.imgSrc = options.imgSrc;
		this.description = options.description;
	}
}