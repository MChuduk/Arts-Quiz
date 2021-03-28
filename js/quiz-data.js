function parseXML(xmlString)
{
	let parser = new DOMParser();
	let xmlDocument = parser.parseFromString(xmlString, "text/xml");

	let data = xmlDocument.getElementsByTagName("Card");

	for(i = 0; i < data.length; i++)
	{
		let type = data[i].getAttribute("type");
		let imgSrc = data[i].getAttribute("image");
		let description =  data[i].getAttribute("description");

		cardsData[i] = new CardData({type, imgSrc, description})
	}
}

function LoadCardsData(gameMode)
{
	if(gameMode === "art-vs-baffing")
	{
		parseXML('<?xml version="1.0" encoding="utf-8" ?>' +
			'<Cards>' +
			'<Card type="art" image="data/img/art1.jpg" description="Гэта кампазіцыя, створаная Кліфардам Стиллом у 1949 годзе."></Card>' +
			'<Card type="art" image="data/img/art2.jpg" description="Гэта праца, створаная Герхардам Рыхтарам у 1992 годзе."></Card>' +
			'<Card type="art" image="data/img/art3.jpg" description="Гэта праца, створаная Герхардам Рыхтарам у 2001 годзе."></Card>' +
			'<Card type="art" image="data/img/art4.jpg" description="Гэта кампазіцыя «Equipoise», 1958 год, аўтар – Ганс Гофман."></Card>' +
			'<Card type="art" image="data/img/art5.jpg" description="Гэта карціна «Без назвы» Кліфарда Стилла, 1959 год."></Card>' +
			'<Card type="art" image="data/img/art6.jpg" description="Гэта карціна «Villa Borghese», 1960 год, аўтар – Вільям дэ Куининг."></Card>' +
			'<Card type="art" image="data/img/art7.jpg" description="Гэта праца Хэлен Франкенталер «Mauve district», 1966 год."></Card>' +
			'<Card type="art" image="data/img/art8.jpg" description="Гэта карціна Марка Ратко «Жоўты, вішнёвы і памяранцавы», 1947 год."></Card>' +
			'<Card type="art" image="data/img/art9.jpg" description="Гэта карціна Захара Кудзіна, напісаная падчас здымак фільма «Чыстае мастацтва», 2017 год."></Card>' +
			'<Card type="art" image="data/img/art10.jpg" description="Гэта карціна з серыі «Дыялогі» мастака Міхася Моста."></Card>' +
			'<Card type="baffing" image="data/img/baffing1.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing2.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing3.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing4.jpg" description="Гэта проста закрашеная сцяна. Крыніца @thegraffitiremoval"></Card>' +
			'<Card type="baffing" image="data/img/baffing5.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing6.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing7.jpg" description="Гэта баффинг. Крыніца citydog.by"></Card>' +
			'<Card type="baffing" image="data/img/baffing8.jpg" description="Гэта баффинг. Крыніца @fuprematism"></Card>' +
			'<Card type="baffing" image="data/img/baffing9.jpg" description="Гэта баффинг. Крыніца @fuprematism"></Card>' +
			'<Card type="baffing" image="data/img/baffing10.jpg" description="Гэта баффинг. Крыніца @fuprematism"></Card>' +
			'</Cards>');
	}
	else
	{
		parseXML('<?xml version="1.0" encoding="utf-8" ?>' +
			'<Cards>' +
			'<Card type="sculpture" image="data/img/sculpture1.jpg" description="Гэта «Чароўныя сады». Аўтар - Ісая Загар (Isaiah Zagar). (ЗША)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture2.jpg" description="Гэта скульптура Мішэль Рыдар (Michelle Reader). (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture3.jpg" description="Гэта скульптуры Герхард Бэра (Gerhard Bär) з арт-праекта «Social Plastics» (Германія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture4.jpg" description="Гэта праца мастака My Dog Sighs (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture5.jpg" description="Гэта скульптура Мішэль Рыдар (Michelle Reader). (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture6.jpg" description="Гэта «Чароўныя сады». Аўтар - Ісая Загар (Isaiah Zagar). (ЗША)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture7.jpg" description="Гэта скульптура Мішэль Рыдар (Michelle Reader). (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture8.jpg" description="Гэта скульптуры «Betiresmart» Віма Дельвуа (Бельгія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture9.jpg" description="Гэта скульптура з праекта «Washed Beach» Анжэлы Хасселтин Поцци"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture10.jpg" description="Гэта скульптуры Вейо Рёнккёнена (Фінляндыя)"></Card>' +
			'<Card type="jekart" image="data/img/jekart1.jpg" description="Гэта ЖЭК-арт. Хлеўнік скульптурны ансамбль Анатоля Ждана з Мінска (Беларусь)"></Card>' +
			'<Card type="jekart" image="data/img/jekart2.jpg" description="Гэта ЖЭК-арт. Уладзімір Батуков З Барнавула (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart3.jpg" description="Гэта ЖЭК-арт. Скульптура каля «Гостинного Двара» у Лепелі (Беларусь). Аўтар Ігар Трыба"></Card>' +
			'<Card type="jekart" image="data/img/jekart4.jpg" description="Гэта ЖЭК-арт. Афармленне сцяны адрыны на пляцоўцы Маргарыты Траўкінай з Каломны (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart5.jpg" description="Гэта ЖЭК-арт. Міні-крэмль з дрэва на даху хаты Мікалая Пашнев з мястэчка Тайговы (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart6.jpg" description="Гэта ЖЭК-арт. Хата Марыны Шышкінай з вёскі Вострижанье (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart7.jpg" description="Гэта ЖЭК-арт. Хлеўнік скульптурны ансамбль Анатоля Ждана з Мінска (Беларусь)"></Card>' +
			'<Card type="jekart" image="data/img/jekart8.jpg" description="Гэта ЖЭК-арт невядомага аўтара ў парку Санкт-Питербурга (Расія). Фота Маргарыты Ялини"></Card>' +
			'<Card type="jekart" image="data/img/jekart9.jpg" description="Гэта ЖЭК-арт - Аўтарская дзіцячая плащадка Андрэя Сальнікава з Масквы (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart10.jpg" description="Гэта ЖЭК-арт. Дваровая скульптура Юр\'я Сцяпанавіча з вёскі Шаловичи (Беларусь)."></Card>' +
			'</Cards>');
	}
}