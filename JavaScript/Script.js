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
    const conteudo = document.querySelector(".conteudo");
    const busca = document.querySelector("input[type='search']");
    

    
    async function getallgames(){

        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games');
        
        
        const game = await response.json();

        console.log(game);
        
        game.map((jogo) => {
            
            const dv = document.createElement("dv")
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

            dv.appendChild(title)
            dv.appendChild(thumbnail)
            dv.appendChild(short_description)
            dv.appendChild(developer)
            dv.appendChild(publisher)
            dv.appendChild(genre)
            dv.appendChild(platform)
            dv.appendChild(game_url)
            dv.appendChild(release_date)
      

            jogos.appendChild(dv);


          

    })

    
    const container = document.querySelector(".conteudos");
// const container = document.querySelector("#jogos"); //mudar para jogos para peagr a div jogos
const inputSearch = document.querySelector("input[type='search']");
  /*TRABALHANDO COM O SISTEMA DE PESQUISA*/
    
    
  let items = [];

  inputSearch.oninput = () => {
    container.innerHTML = "";
  
    items
      .filter((item) =>
        item.toLowerCase().includes(inputSearch.value.toLowerCase())//é o vd para cada e o jogos para todos
      )
      .forEach((item) => addHTML(item));
  };
  
  function addHTML(item) {
    const div = document.createElement("div");
    div.innerHTML = item;
    container.append(div);
  }
  
  fetch('https://free-to-play-games-database.p.rapidapi.com/api/games',key)
    .then((data) => data.json())
    .then((users) => {
      users.forEach((user) => {
        addHTML(user.title);
        items.push(user.title);
      });
    });

    
/*fIM DO SISTEMA*/

//name = title

    
}

    getallgames();