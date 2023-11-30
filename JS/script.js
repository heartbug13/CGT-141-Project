//toggles header
document.getElementById("toogleNav").addEventListener("click", function() {
  document.getElementById("toogleTabs").classList.toggle("nav");
  document.getElementById("header").classList.toggle("header");
});

//toggle filter

document.getElementById("filterButton").addEventListener("click", function() {
  filterToggle()
});
let filterOn = false;

function filterToggle(){
  var t = document.getElementById("filterButton");
  if(filterOn == false){
    t.style.backgroundColor = "#6A0D3A";
    document.getElementById("filter").style.display = "block";
    return filterOn = true;
  } else {
      t.style.backgroundColor = "#BC1264"
      document.getElementById("filter").style.display = "none";
      return filterOn = false;
  }    
}

//filter functions
//id and class names
var hulu = "hulu";
var appleTv = "appleTv";
var amazonPrime = "amazonPrime";
var max = "max";
var peacock = "peacock";
var netflix = "netflix";
var paramountPlus = "paramountPlus";
var youtubeTv  = "youtubeTv";
var abc = "abc";
var freeform = "freeform";
var disneyPlus = "disneyPlus";

var drama = "drama";
var romance = "romance";
var sports = "sports";
var comingOfAge = "comingOfAge";
var sitcom = "sitcom";
var comedy = "comedy";
var police = "police";
var horror = "horror";
var fantasy = "fantasy";
var mystery = "mystery";
var suspense = "suspense";
var action = "action";
var medical = "medical";
var superhero = "superhero";
var crime = "crime";
var historical = "historical";
var tragedy = "tragedy";

//calls functions
document.getElementById("hulu").addEventListener("click", function() {
  toggle(hulu)
});
document.getElementById("appleTv").addEventListener("click", function() {
  toggle(appleTv)
});
document.getElementById("amazonPrime").addEventListener("click", function() {
  toggle(amazonPrime)
}); 
document.getElementById("max").addEventListener("click", function() {
  toggle(max)
});
document.getElementById("peacock").addEventListener("click", function() {
  toggle(peacock)
});
document.getElementById("netflix").addEventListener("click", function() {
  toggle(netflix)
});
document.getElementById("paramountPlus").addEventListener("click", function() {
  toggle(paramountPlus)
});
document.getElementById("youtubeTv").addEventListener("click", function() {
  toggle(youtubeTv)
});
document.getElementById("abc").addEventListener("click", function() {
  toggle(abc)
});
document.getElementById("freeform").addEventListener("click", function() {
  toggle(freeform)
}); 
document.getElementById("disneyPlus").addEventListener("click", function() {
  toggle(disneyPlus)
}); 
document.getElementById("drama").addEventListener("click", function() {
  toggle(drama)
});
document.getElementById("romance").addEventListener("click", function() {
  toggle(romance)
}); 
document.getElementById("sports").addEventListener("click", function() {
  toggle(sports)
}); 
document.getElementById("comingOfAge").addEventListener("click", function() {
  toggle(comingOfAge)
});
document.getElementById("sitcom").addEventListener("click", function() {
  toggle(sitcom)
});
document.getElementById("comedy").addEventListener("click", function() {
  toggle(comedy)
});
document.getElementById("police").addEventListener("click", function() {
  toggle(police)
});
document.getElementById("horror").addEventListener("click", function() {
  toggle(horror)
});
document.getElementById("fantasy").addEventListener("click", function() {
  toggle(fantasy)
});
document.getElementById("mystery").addEventListener("click", function() {
  toggle(mystery)
});
document.getElementById("suspense").addEventListener("click", function() {
  toggle(suspense)
});
document.getElementById("action").addEventListener("click", function() {
  toggle(action)
});
document.getElementById("medical").addEventListener("click", function() {
  toggle(medical)
});
document.getElementById("superhero").addEventListener("click", function() {
  toggle(superhero)
});
document.getElementById("crime").addEventListener("click", function() {
  toggle(crime)
});
document.getElementById("historical").addEventListener("click", function() {
  toggle(historical)
});
document.getElementById("tragedy").addEventListener("click", function() {
  toggle(tragedy)
});

//function that hides and shows elements
function Buttontoggle(x){
  var t = document.getElementById(x);
  var s = document.getElementsByClassName(x);
  if(t.style.backgroundColor == "black"){
    t.style.backgroundColor = "gray";
    for (i=0; i<s.length; i++){
      s[i].style.display = "none";
    }
  } else {
    t.style.backgroundColor = "black"
    for (i=0; i<s.length; i++){
      s[i].style.display = "block";
    }
  }
}
let classOn = false;
function toggle(x){
  var t = document.getElementById(x);
  var s = document.getElementsByClassName(x);
  if(classOn == false){
    t.style.backgroundColor = "gray";
    for (i=0; i<s.length; i++){
      s[i].style.display = "none";
    }
    return classOn = true;
  } else {
    t.style.backgroundColor = "black"
    for (i=0; i<s.length; i++){
      s[i].style.display = "block";
    }
    return classOn = false;
  }
}



