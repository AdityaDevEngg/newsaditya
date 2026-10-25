let key="98bb0d4b039640b6b7d876a55a25931f";


function insertdata(){
    let topic=document.querySelector("input").value;
    getnews(topic)    
    document.querySelector("input").value="";
}

function navclick(liitem){
  getnews(liitem);
}

window.addEventListener("load",function(){
  getnews("india")
})


async function getnews(topic) {
    let response= await fetch (`https://newsapi.org/v2/everything?q=${topic}&apiKey=${key}`)
    let data= await response.json();
    console.log(data)
    
   
    let maindata=document.querySelector("#maindata");
       maindata.innerHTML = '';

    document.querySelector("#heading").innerHTML="search: "+topic;

    for(let i=0;i<data.articles.length;i++){
      let divs=document.createElement("div");  
      divs.classList.add("card");
      divs.innerHTML=`
      <img src="${data.articles[i].urlToImage}" alt="not found">
      <h3>"${data.articles[i].title}"</h3>
      <p>${data.articles[i].description}</p>
      <a href="${data.articles[i].url}" target="_blank">link</a>
    `
    maindata.append(divs);
    divs.addEventListener("click",function(){
      window.open(data.articles[i].url);
    })
    }
}