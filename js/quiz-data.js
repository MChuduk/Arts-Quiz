function LoadCardsData(gameMode)
{
	if(gameMode === "art-vs-baffing")
	{
		cardsData[0] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art1.jpg",
			description: "Это композиция, созданная Клиффордом Стиллом в 1949 году.",
		});
		cardsData[1] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art2.jpg",
			description: "Это работа, созданная Герхардом Рихтером в 1992 году.",
		});
		cardsData[2] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art3.jpg",
			description: "Это работа, созданная Герхардом Рихтером в 2001 году.",
		});
		cardsData[3] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art4.jpg",
			description: "Это композиция «Equipoise», 1958 год, автор – Ганс Гофман.",
		});
		cardsData[4] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art5.jpg",
			description: "Это картина «Без названия» Клиффорда Стилла, 1959 год.",
		});
		cardsData[5] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art6.jpg",
			description: "Это картина «Villa Borghese», 1960 год, автор – Вильям де Куининг.",
		});
		cardsData[6] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art7.jpg",
			description: "Это работа Хелен Франкенталер «Mauve district», 1966 год.",
		});
		cardsData[7] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art8.jpg",
			description: "Это картина Марка Ротко «Желтый, вишнёвый и оранжевый», 1947 год.",
		});
		cardsData[8] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art9.jpg",
			description: "Это картина Захара Кудина, написанная во время съёмок фильма «Чистое искусство», 2017 год",
		});
		cardsData[9] = new CardData
		({ 
			type: "art",
			imgSrc: "data/img/art10.jpg",
			description: "Это картина из серии «Диалоги» художника Миши Моста.",
		});
		cardsData[10] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing1.jpg",
			description: "Это баффинг. Источник @бессознательноеискусство",
		});
		cardsData[11] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing2.jpg",
			description: "Это баффинг. Источник @бессознательноеискусство",
		});
		cardsData[12] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing3.jpg",
			description: "Это баффинг. Источник @бессознательноеискусство",
		});
		cardsData[13] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing4.jpg",
			description: "Это просто закрашеная стена. Источник @thegraffitiremoval",
		});
		cardsData[14] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing5.jpg",
			description: "Это баффинг. Источник @бессознательноеискусство",
		});
		cardsData[15] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing6.jpg",
			description: "Это баффинг. Источник @бессознательноеискусство",
		});
		cardsData[16] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing7.jpg",
			description: "Это баффинг. Источник citydog.by",
		});
		cardsData[17] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing8.jpg",
			description: "Это баффинг. Источник @fuprematism",
		});
		cardsData[18] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing9.jpg",
			description: "Это баффинг. Источник @fuprematism",
		});
		cardsData[19] = new CardData
		({ 
			type: "baffing",
			imgSrc: "data/img/baffing10.jpg",
			description: "Это баффинг. Источник @fuprematism",
		});
	}
	else
	{
		cardsData[0] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture1.jpg",
			description: "",
		});
		cardsData[1] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture2.jpg",
			description: "",
		});
		cardsData[2] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture3.jpg",
			description: "",
		});
		cardsData[3] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture4.jpg",
			description: "",
		});
		cardsData[4] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture5.jpg",
			description: "",
		});
		cardsData[5] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture6.jpg",
			description: "",
		});
		cardsData[6] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture7.jpg",
			description: "",
		});
		cardsData[7] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture8.jpg",
			description: "",
		});
		cardsData[8] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture9.jpg",
			description: "",
		});
		cardsData[9] = new CardData
		({ 
			type: "sculpture",
			imgSrc: "data/img/sculpture10.jpg",
			description: "",
		});
		cardsData[10] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart1.jpg",
			description: "",
		});
		cardsData[11] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart2.jpg",
			description: "",
		});
		cardsData[12] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart3.jpg",
			description: "",
		});
		cardsData[13] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart4.jpg",
			description: "",
		});
		cardsData[14] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart5.jpg",
			description: "",
		});
		cardsData[15] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart6.jpg",
			description: "",
		});
		cardsData[16] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart7.jpg",
			description: "",
		});
		cardsData[17] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart8.jpg",
			description: "",
		});
		cardsData[18] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart9.jpg",
			description: "",
		});
		cardsData[19] = new CardData
		({ 
			type: "jekart",
			imgSrc: "data/img/jekart10.jpg",
			description: "",
		});
	}
}