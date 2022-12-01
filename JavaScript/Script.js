const key = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a9f276c83msh3ec3bc3303ae41ep106a2cjsn8f9adc729f67',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games',key)
	
    const recebeElement = document.querySelector('#recebe')
    const jogosContainer = document.querySelector('jogos')

    async function getallgames(){

        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games');
        
        
        const game = await response.json();

        console.log(game);
        
        game.map((jogo) => {
            
            const div = document.createElement("div")
            const title = document.createElement("h1")
            const thumbnail = document.createElement("img")
            const short_description = document.createElement("h2")
            const publisher = document.createElement("p")
            const platform = document.createElement("p")
            const genre = document.createElement("p")
            const game_url = document.createElement("p")
            const developer = document.createElement("p")
            const release_date = document.createElement("p")

            title.innerHTML = jogo.title;
            thumbnail.src = jogo.thumbnail;
            short_description.innerHTML = jogo.short_description;
            publisher.innerHTML = jogo.publisher;
            platform.innerHTML = jogo.platform;
            genre.innerHTML = jogo.genre;
            game_url.innerHTML = jogo.game_url;
            developer.innerHTML = jogo.developer;
            release_date.innerHTML = jogo.release_date;
            


            div.appendChild(title)
            div.appendChild(thumbnail)
            div.appendChild(short_description)
            div.appendChild(developer)
            div.appendChild(publisher)
            div.appendChild(genre)
            div.appendChild(platform)
            div.appendChild(game_url)
            div.appendChild(release_date)

            jogos.appendChild(div);
            
        })

    }
    getallgames();