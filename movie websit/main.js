var products;
fetch('https://api.themoviedb.org/3/movie/popular?api_key=38cfe7b8e6f4803f334a404819041b17&language=en-US&page=1').then(function(response) {
  return response.json();
}).then(function(json) {
  products = json;
// selectCategory()
let $main= document.getElementById('main');
  for (let index = 0; index < products['results'].length; index++) {

       let deteils =document.createElement('div');
       deteils.setAttribute("id","deteils")
       let  mdiv=document.createElement('div')
       mdiv.setAttribute("id","D2")
       let  DivImg=document.createElement('div')
       DivImg.setAttribute("id","D1")
       let  poster=document.createElement('img')
       poster.setAttribute("src",`https://image.tmdb.org/t/p/w185_and_h278_bestv2`+products['results'][index].poster_path)
       let  Divname=document.createElement('div')
       Divname.setAttribute("class","item-div");
       Divname.setAttribute("id","name");
       let nam= document.createElement('p');
       nam.innerHTML=products['results'][index].title;
       let Divdate= document.createElement('div')
       Divdate.setAttribute("class","item-div");
       Divdate.setAttribute("id","date");
       let date = document.createElement('p');
       date.innerHTML=products['results'][index].release_date;
       let DivOverVew= document.createElement('div')
       DivOverVew.setAttribute("class","item-div");
       DivOverVew.setAttribute("id","overvew");
       let overvew = document.createElement('p');
       overvew.innerHTML=products['results'][index].overview;

       let  $img=document.createElement("IMG");
       
       $main.appendChild(mdiv);
       mdiv.appendChild(DivImg)
       mdiv.appendChild(deteils)
       Divname.appendChild(nam);
       Divdate.appendChild(date)
       DivOverVew.appendChild( overvew)
       DivImg.appendChild(poster);
       deteils.appendChild(Divname)
       deteils.appendChild(Divdate)
       deteils.appendChild(DivOverVew)
       
}


})




  


 

