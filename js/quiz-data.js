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
			'<Card type="art" image="data/img/art1.jpg" description="Это композиция, созданная Клиффордом Стиллом в 1949 году."></Card>' +
			'<Card type="art" image="data/img/art2.jpg" description="Это работа, созданная Герхардом Рихтером в 1992 году."></Card>' +
			'<Card type="art" image="data/img/art3.jpg" description="Это работа, созданная Герхардом Рихтером в 2001 году."></Card>' +
			'<Card type="art" image="data/img/art4.jpg" description="Это композиция «Equipoise», 1958 год, автор – Ганс Гофман."></Card>' +
			'<Card type="art" image="data/img/art5.jpg" description="Это картина «Без названия» Клиффорда Стилла, 1959 год."></Card>' +
			'<Card type="art" image="data/img/art6.jpg" description="Это картина «Villa Borghese», 1960 год, автор – Вильям де Куининг."></Card>' +
			'<Card type="art" image="data/img/art7.jpg" description="Это работа Хелен Франкенталер «Mauve district», 1966 год."></Card>' +
			'<Card type="art" image="data/img/art8.jpg" description="Это картина Марка Ротко «Желтый, вишнёвый и оранжевый», 1947 год."></Card>' +
			'<Card type="art" image="data/img/art9.jpg" description="Это картина Захара Кудина, написанная во время съёмок фильма «Чистое искусство», 2017 год"></Card>' +
			'<Card type="art" image="data/img/art10.jpg" description="Это картина из серии «Диалоги» художника Миши Моста."></Card>' +
			'<Card type="baffing" image="data/img/baffing1.jpg" description="Это баффинг. Источник @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing2.jpg" description="Это баффинг. Источник @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing3.jpg" description="Это баффинг. Источник @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing4.jpg" description="Это просто закрашеная стена. Источник @thegraffitiremova"></Card>' +
			'<Card type="baffing" image="data/img/baffing5.jpg" description="Это баффинг. Источник @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing6.jpg" description="Это баффинг. Источник @бессознательноеискусство"></Card>' +
			'<Card type="baffing" image="data/img/baffing7.jpg" description="Это баффинг. Источник citydog.by"></Card>' +
			'<Card type="baffing" image="data/img/baffing8.jpg" description="Это баффинг. Источник @fuprematism"></Card>' +
			'<Card type="baffing" image="data/img/baffing9.jpg" description="Это баффинг. Источник @fuprematism"></Card>' +
			'<Card type="baffing" image="data/img/baffing10.jpg" description="Это баффинг. Источник @fuprematism"></Card>' +
			'</Cards>');
	}
	else
	{
		parseXML('<?xml version="1.0" encoding="utf-8" ?>' +
			'<Cards>' +
			'<Card type="sculpture" image="data/img/sculpture1.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture2.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture3.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture4.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture5.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture6.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture7.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture8.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture9.jpg" description=""></Card>' +
			'<Card type="sculpture" image="data/img/sculpture10.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart1.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart2.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart3.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart4.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart5.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart6.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart7.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart8.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart9.jpg" description=""></Card>' +
			'<Card type="jekart" image="data/img/jekart10.jpg" description=""></Card>' +
			'</Cards>');
	}
}