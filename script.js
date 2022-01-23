function search(){
    const url = "https://api.jikan.moe/v3/search/anime?q=Anime%20api/users";
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        // console.log(data);
        getData(data);
    })
    .catch(function (error){
        console.log(error);
    })
  }
  
  function getData(data){
    let results = data.results
    let userDIv = document.querySelector("#users");
    userDIv.innerHTML = "";
  
  
  
  results.forEach(function (user){
    // create a card and append data 
    let card = document.createElement('div')
    card.setAttribute('class', 'card')
  
    // create title
    let title = document.createElement('h3')
    title.innerHTML = user.title;
    card.appendChild(title)
  
    // image 
    let img = document.createElement('img');
    img.src = user.image_url;
    img.style.height = '200px'
    img.style.width = '200px'
    card.appendChild(img)
  
    let  start_date = document.createElement('div');
    start_date.innerHTML = user.start_date;
    card.appendChild(start_date)
  
    let end_date = document.createElement('div');
    end_date.innerHTML = user.end_date;
    card.appendChild(end_date)
  
    let type = document.createElement('div')
    type.innerHTML = user.type;
    card.appendChild(type)
  
    let rated = document.createElement('div')
    rated.innerHTML = user.rated;
    card.appendChild(rated)
  
    userDIv.appendChild(card);
  
  });
  
  }
  