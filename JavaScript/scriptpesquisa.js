// const container = document.querySelector(".conteudos");
const container = document.querySelector(".conteudos");//mudar para jogos
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
