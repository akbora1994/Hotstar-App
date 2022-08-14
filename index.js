
    let movies_div = document.getElementById("movies");
    let id;

    async function searchMovies(){
        try{
            const query = document.getElementById("query").value;
          
            let res = await fetch(`https://www.omdbapi.com/?apikey=1437ea4b&s=${query}`)
            
            let data = await res.json();
            console.log(data);
           const movies = data.Search
           return movies;
        }
        catch{
            console.log(err);
        }
    }

          function getdata(){
              let title = document.getElementById("query").value
              const url = `https://www.omdbapi.com/?t=${title}&apikey=1437ea4b`;
              fetch(url).then(function(res){
                  return res.json();
              }).then(function(res){
                  console.log(res)
                  append(res)
              }).catch(function(err){
                  console.log(err)
              })
          }

        function append(data){
            let box = document.createElement("div");
            
            let img = document.createElement("img");
            img.src = data.Poster;
            img.style.width="80%"
            img.style.marginLeft="20px"
            let title = document.createElement("h2");
            title.innerText=data.Title;
            title.style.marginLeft="20px"
            title.style.color="white"
            let date = document.createElement("h3");
            date.innerText=data.Released;
            date.style.marginLeft="20px"
            date.style.color="white"
            let time = document.createElement("h3");
            time.innerText=data.Runtime;
            time.style.marginLeft="20px"
            time.style.color="white"
            let gen = document.createElement("h3");
            gen.innerText=data.Genre;
            gen.style.marginLeft="20px"
            gen.style.color="white"
            let rate = document.createElement("h3");
            rate.innerText=data.imdbRating;
            rate.style.marginLeft="20px"
            rate.style.color="white"
        if(data.imdbRating>8.5){
            let recommend = document.createElement("h3");
            recommend.innerText="RECOMMENDED"
            box.append(img,title,date,time,gen,rate,recommend);

        }
        else{
            box.append(img,title,date,time,gen,rate);
        }
        document.getElementById("movies").innerHTML=""
        document.getElementById("movies").append(box);

     }

     function appendMovies(data){
            movies_div.innerHTML=null;
            data.forEach(function(e){
            let img = document.createElement("img");
            img.src = e.Poster;
            img.style.height="192px"
            img.style.width="240px"
            img.style.paddingLeft="60px"
            let p = document.createElement("p")
            p.style.paddingLeft="80px"
            p.style.color="white"
            p.innerText = e.Title;
            movies_div.append(p,img);

         })
     }
           async function main(){
               let data = await searchMovies();
               if(data==undefined){
                   return false;
               }
               appendMovies(data)
           }

    function debounce(func,delay){
        if(id){
            clearInterval(id)
        }
      id = setTimeout(function(){
            func()
        },delay)
    }
    
    let trendsPage = ()=>{
        window.location.href = "trending.html"
    }





    
