import React from 'react';

//img sizes: thumb 400*350px

export const items = [
    {
        name: 'LuffarschApp',
        id: 'item-7',
        date: 'sept 2017',
        description: <span><p>LuffarschApp är en webbapp byggd i React där man kan utmana och spela luffarschack mot andra användare.</p><p>Spelet, liksom vilka spelare som är online, status på ens spel och topplistan uppdateras dynamiskt i realtid.</p></span>,
        tools: ['React', 'Firebase', 'Styled Components', 'Semantic UI'],
        url: 'https://jesperengstrom.github.io/luffarschapp/',
        repo: 'https://github.com/jesperengstrom/luffarschapp',
        img: 'luffarschapp.jpg',
        color: 'rgb(82, 126, 124)'
    },
    {
        name: 'Palmekartan',
        id: 'item-6',
        date: 'augusti 2017',
        description: <span><p>Palmekartan är ett försök att visualisera vittnesiakttagelser kring mordet på Olof Palme 1986 genom att placera ut dem på en tidslinje och en karta tillsammans med källhänvisningar.</p><p>Intresserade privatspanare kan själva bidra genom att logga in och posta eller redigera information.</p></span>,
        tools: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'ES6'],
        url: 'http://palmekartan.cloudno.de/',
        repo: 'https://github.com/jesperengstrom/pk',
        img: 'palmekartan.jpg',
        color: 'rgb(119, 35, 36)'
    }, 
    {
        name: 'Talartoppen',
        id: 'item-5',
        date: 'april 2017',
        description: <span><p>Talartoppen använder Riksdagens öppna API för att räkna ut vilka riksdagsledamöter som varit mest aktiva under debatterna i kammaren.</p><p>Det går även att skapa topp- och bottenlistor för de olika partierna och jämförande statistik partierna emellan.</p></span>,
        tools: ['Ajax', 'jQuery', 'Bootstrap', 'Gulp', 'SASS'],
        url: 'https://jesperengstrom.github.io/Talartoppen/',
        repo: 'https://github.com/jesperengstrom/Talartoppen',
        img: 'talartoppen.jpg',
        color: 'rgb(94, 135, 89)'

    },
    {
        name: 'Front end blog',
        id: 'item-4',
        date: 'maj 2017',
        description: <span><p>En blogg och bloggplattform/CMS byggd från grunden i PHP.</p><p>Inloggade användare kan posta, redigera och gilla inlägg samt redigera sin profil m.m.</p></span>,
        tools: ['PHP', 'MySQL'],
        url: 'http://phpgrupp.heliohost.org',
        repo: 'https://github.com/phpgrupp/simple-cms',
        img: 'front-end-blog.jpg',
        color: 'rgb(61, 44, 89)'
    },
    {
        name: 'JMDb',
        id: 'item-3',
        date: 'mars 2017',
        description: <span><p>JMDb är en filmdatabas där det går att lägga till, söka efter, sortera och betygsätta filmer.</p><p>Här låg fokus på att hantera JSON-objekt och implementera designmönster; <em>module pattern</em> och <em>revealing module pattern</em> i detta fall.</p></span>,
        tools: ['JavaScript', 'Bootstrap'],
        url: 'https://jesperengstrom.github.io/JMDb/',
        repo: 'https://github.com/jesperengstrom/JMDb',
        img: 'jmdb.jpg',
        color: 'rgb(212, 192, 70)'
    },
    {
        name: 'Asap Dev',
        id: 'item-2',
        date: 'januari 2017',
        description: <span><p>En sajt till den fiktiva webbyrån Asap Development.</p><p>Den här gruppuppgiften gick ut på att bygga en responsiv sajt helt utan ramvverk utifrån en designskiss, därefter återskapa sajten med ett ramverk.</p><p>Det var också en övning i att jobba agilt och versionshantera med Git.</p></span>,
        tools: ['HTML', 'CSS', 'Adobe InDesign', 'SASS', 'Bootstrap', 'Git'],
        url: 'https://danteuh.github.io/asap-development/',
        repo: 'https://github.com/DanteUh/asap-development/',
        img: 'asap-dev.jpg',
        color: 'rgb(161, 100, 64)'
    },
    {
        name: 'Sänka skepp',
        id: 'item-1',
        date: 'dec 2016',
        description: <span><p>Ett sänka skepp-spel som jag gjorde för skojs skull.</p></span>,
        tools: ['JavaScript'],
        url: 'https://jesperengstrom.github.io/battleship/',
        repo: 'https://github.com/jesperengstrom/battleship',
        img: 'sanka-skepp.jpg',
        color: 'rgb(75, 114, 155)'
    }
];


