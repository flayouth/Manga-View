var express = require('express');
var router = express.Router();

//GET users listing ?
router.get('/:id', function(req, res, next){
    var id = req.params.id;
    
    if (id =='manga/1', 'manga/2', 'manga/3', 'manga/4', 'manga/5', 'manga/6', 'manga/7', 'manga/8', 'manga/9', 'manga/10') {
res.render('mangas', {
title: 'Full-Metal Alchemist',
artist: 'Hiromu Arakawa',
img: 'https://flxt.tmsimg.com/assets/p9064324_b_v8_aa.jpg',
genre: 'Action'
desc: "<p> Set in the early 20th century, in a fictional universe in which alchemy is a widely practiced science, the series follows the journey of two alchemist brothers, Edward and Alphonse Elric, who are searching for the philosopher's stone to restore their bodies after a failed attempt to bring their mother back to life ...</p>",

title: 'One Punch Man',
artist: 'Yusuke Murata',
img: 'https://m.media-amazon.com/images/M/MV5BZjRhZDk4NTktMjMxOS00NTk1LWI4ZDMtOWYyNTU2M2E1ODQwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
genre: 'Action',
desc: "<p> Saitama is a self-proclaimed superhero who can defeat every opponent that he encounters with a single punch. He searches for a worthy opponent after growing bored by a lack of challenge in a world filled with superheroes and villains. While fighting evil, he meets his student, Genos.</p>",

title: 'One Piece',
artist: 'Elichiro Oda',
img: 'https://m.media-amazon.com/images/M/MV5BODcwNWE3OTMtMDc3MS00NDFjLWE1OTAtNDU3NjgxODMxY2UyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
genre: 'Fantasy',
desc: "<p> the story of Monkey D. Luffy, a young man who has a single dream: To find the legendary treasure known as the One Piece and become the King of the Pirates. Alongside a crew of trusted friends, Luffy sails the dangerous seas of the Grand Line to find Laugh Tale, the hidden island containing the One Piece.</p>",

title: 'Devilman',
artist: 'Go Nagai',
img: 'https://m.media-amazon.com/images/M/MV5BODFlMTE2MDktMzI2OS00NjIwLWEyMGUtMDQ0YTcyOWM0OTZiXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_FMjpg_UX1000_.jpg',
genre: 'Thriller',
desc: "<p>The manga focuses on a high school student named Akira Fudo who absorbs the powers of the demon called "Amon" with help of his friend Ryo Asuka in order to battle creatures hidden in human society, thus calling himself the "Devilman" in the process.</p>",

title: 'Tomie',
artist: 'Junji Ito',
img: 'https://upload.wikimedia.org/wikipedia/en/d/db/Tomie_manga_cover.jpg',
genre: 'Horror',
desc: "<p>Tomie Kawakami is a femme fatale with long black hair and a beauty mark just under her left eye. She can seduce nearly any man, and drive them to murder as well, even though the victim is often Tomie herself. While one lover seeks to keep her for himself, another grows terrified of the immortal succubus.</p>",

title: 'Jojos Bizarre Adventure',
artist: 'Hirohiko Araki',
img: 'https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jp',
genre: 'Fantasy',
desc: "<p>The story of the Joestar family, who are possessed with intense psychic strength, and the adventures each member encounters throughout their lives. Chronicles the struggles of the cursed Joestar bloodline against the forces of evil.</p>".

title: 'High-Rise Invasion',
artist: 'Tsuiria Miura',
img: 'https://m.media-amazon.com/images/I/61-sQnfgHPL._AC_SY1000_.jpg',
genre: 'Action',
desc: "<p>High schooler Yuri finds herself atop a skyscraper in a strange world, where she must survive against masked assailants bent on killing their prey.</p>",

title: 'Death Note',
artist: 'Tsugumi Ohba & Takeshi Obata',
img: 'https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
genre: 'Horror',
desc: "<p>Death Note follows a high school student who comes across a supernatural notebook, realizing it holds within it a great power; if the owner inscribes someone's name into it while picturing their face, they will die.</p>",

title: 'Hunter X Hunter',
artist: 'Yoshihiro Togashi',
img: 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
genre: 'Fantasy',
desc: "<p>The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.</p>",

title: 'The Promised Neverland',
artist: 'Kaiu Shirai',
img: 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_FMjpg_UX1000_.jpg',
genre: 'Thriller',
desc: "<p>When three gifted kids at an isolated idyllic orphanage discover the secret and sinister purpose they were raised for, they look for a way to escape from their evil caretaker and lead the other children in a risky escape plan.</p>",

});




    
    } else {
        res.end('Invalid Request');
    }
    });

    module.exports = router;