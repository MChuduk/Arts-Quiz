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
			'<Card type="art" image="data/img/art1.jpg" description="Гэта кампазіцыя, створаная Кліфардам Сцілам у 1949 годзе."></Card>' +
			'<Card type="art" image="data/img/art2.jpg" description="Гэта праца, створаная Герхардам Рыхтарам у 1992 годзе."></Card>' +
			'<Card type="art" image="data/img/art3.jpg" description="Гэта праца, створаная Герхардам Рыхтарам у 2001 годзе."></Card>' +
			'<Card type="art" image="data/img/art4.jpg" description="Гэта кампазіцыя «Equipoise», 1958 год, аўтар – Ганс Гофман."></Card>' +
			'<Card type="art" image="data/img/art5.jpg" description="Гэта карціна «Без назвы» Кліфарда Сціла, 1959 год."></Card>' +
			'<Card type="art" image="data/img/art6.jpg" description="Гэта карціна «Villa Borghese», 1960 год, аўтар – Вільям дэ Куінинг."></Card>' +
			'<Card type="art" image="data/img/art7.jpg" description="Гэта праца Хэлен Франкенталер «Mauve district», 1966 год."></Card>' +
			'<Card type="art" image="data/img/art8.jpg" description="Гэта карціна Марка Ротка «Жоўты, вішнёвы і памяранцавы», 1947 год."></Card>' +
			'<Card type="art" image="data/img/art9.jpg" description="Гэта карціна Захара Кудзіна, напісаная падчас здымку фільма «Чыстае мастацтва», 2017 год."></Card>' +
			'<Card type="art" image="data/img/art10.jpg" description="Гэта карціна з серыі «Дыялогі» мастака Міхася Моста."></Card>' +
			'<Card type="baffing" image="data/img/baffing1.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing2.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing3.jpg" description="Гэта баффинг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing4.jpg" description="Гэта проста зафарбаваная сцяна. Крыніца @thegraffitiremoval"></Card>' +
			'<Card type="baffing" image="data/img/baffing5.jpg" description="Гэта бафінг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing6.jpg" description="Гэта бафінг. Крыніца @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing7.jpg" description="Гэта бафінг. Крыніца citydog.by"></Card>' +
			'<Card type="baffing" image="data/img/baffing8.jpg" description="Гэта бафінг. Крыніца @fuprematism"></Card>' +
			'<Card type="baffing" image="data/img/baffing9.jpg" description="Гэта бафінг. Крыніца @fuprematism"></Card>' +
			'<Card type="baffing" image="data/img/baffing10.jpg" description="Гэта бафінг. Крыніца @fuprematism"></Card>' +
			'</Cards>');
	}
	else
	{
		parseXML('<?xml version="1.0" encoding="utf-8" ?>' +
			'<Cards>' +
			'<Card type="sculpture" image="data/img/sculpture1.jpg" description="Гэта «Чароўныя сады». Аўтар - Ісая Загар (Isaiah Zagar). (ЗША)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture2.jpg" description="Гэта скульптура Мішэль Рыдэр (Michelle Reader). (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture3.jpg" description="Гэта скульптуры Герхарда Бэра (Gerhard Bär) з арт-праекта «Social Plastics» (Германія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture4.jpg" description="Гэта праца мастака My Dog Sighs (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture5.jpg" description="Гэта скульптура Мішэль Рыдэр (Michelle Reader). (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture6.jpg" description="Гэта «Чароўныя сады». Аўтар - Ісая Загар (Isaiah Zagar). (ЗША)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture7.jpg" description="Гэта скульптура Мішэль Рыдэр (Michelle Reader). (Вялікабрытанія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture8.jpg" description="Гэта скульптуры «Betiresmart» Віма Дельвуа (Бельгія)"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture9.jpg" description="Гэта скульптура з праекта «Washed Beach» Анжэлы Хасселцін Поццы"></Card>' +
			'<Card type="sculpture" image="data/img/sculpture10.jpg" description="Гэта скульптуры Веё Рёнккёнена (Фінляндыя)"></Card>' +
			'<Card type="jekart" image="data/img/jekart1.jpg" description="Гэта ЖЭК-арт. Падворкавы скульптурны ансамбль Анатоля Ждана з Мінска (Беларусь)"></Card>' +
			'<Card type="jekart" image="data/img/jekart2.jpg" description="Гэта ЖЭК-арт. Аўтар - Уладзімір Батуков з Барнавула (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart3.jpg" description="Гэта ЖЭК-арт. Скульптура каля «Гасціннага падворка» у Лепельскім раёне (Беларусь). Аўтар Ігар Трыба"></Card>' +
			'<Card type="jekart" image="data/img/jekart4.jpg" description="Гэта ЖЭК-арт. Афармленне сцяны гаспадарчай пабудовы на падворку Маргарыты Траўкінай з Каломны (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart5.jpg" description="Гэта ЖЭК-арт. Міні-крэмль з дрэва на даху хаты Мікалая Пашнева з мястэчка Тайговы (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart6.jpg" description="Гэта ЖЭК-арт. Хата Марыны Шышкінай з вёскі Вастрыжанне (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart7.jpg" description="Гэта ЖЭК-арт. Падворкавы скульптурны ансамбль Анатоля Ждана з Мінска (Беларусь)"></Card>' +
			'<Card type="jekart" image="data/img/jekart8.jpg" description="Гэта ЖЭК-арт невядомага аўтара ў парку Санкт-Піцярбурга (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart9.jpg" description="Гэта ЖЭК-арт - Аўтарская дзіцячая пляцоўка Андрэя Сальнікава з Масквы (Расія)"></Card>' +
			'<Card type="jekart" image="data/img/jekart10.jpg" description="Гэта ЖЭК-арт. Дваровая скульптура Юрыя Сцяпанавіча з вёскі Шалавічы (Беларусь)."></Card>' +
			'</Cards>');
	}
}