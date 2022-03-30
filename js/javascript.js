function start() {
  firstpage.style.display = "none";
  secondpage.style.display = "block";
};
// $( "#word6" ).click(function() {
//   $( function() {
//     $( "#dialog" ).dialog();
//   } );
// });


$( function() {
$( ".draggable" ).draggable();
} );


// $(function() {
//   $("#number")
//     .selectmenu()
//     .selectmenu("menuWidget")
//     .addClass("overflow");
// });


var count = 0;
function changeonlick1(){
  if (count == 0) {
    document.getElementById("word1").innerHTML = "ужасный";
    count++;
  } else if (count == 1) {
    document.getElementById("word1").innerHTML = "смешной";
    count++;
  } else if (count == 2) {
    document.getElementById("word1").innerHTML = "милый";
    count++;
  } else if (count == 3) {
    document.getElementById("word1").innerHTML = "крутой";
    count++;
  } else if (count == 4) {
    document.getElementById("word1").innerHTML = "супер";
    count++;
  } else if (count > 4) {
  	count = 0;
    document.getElementById("word1").innerHTML = "великий";
  }
}

var count = 0;
function changeonlick2(){
  if (count == 0) {
    document.getElementById("word2").innerHTML = "испанский";
    count++;
  } else if (count == 1) {
    document.getElementById("word2").innerHTML = "чувашский";
    count++;
  } else if (count == 2) {
    document.getElementById("word2").innerHTML = "татарский";
    count++;
  } else if (count == 3) {
    document.getElementById("word2").innerHTML = "прикольный";
    count++;
  } else if (count == 4) {
    document.getElementById("word2").innerHTML = "спорный";
    count++;
  } else if (count > 4) {
  	count = 0;
    document.getElementById("word2").innerHTML = "русский";
  }
}

var count = 0;
function changeonlick3(){
  if (count == 0) {
    document.getElementById("word3").innerHTML = "граф,";
    count++;
  } else if (count == 1) {
    document.getElementById("word3").innerHTML = "пират,";
    count++;
  } else if (count == 2) {
    document.getElementById("word3").innerHTML = "актёр,";
    count++;
  } else if (count == 3) {
    document.getElementById("word3").innerHTML = "врач,";
    count++;
  } else if (count == 4) {
    document.getElementById("word3").innerHTML = "кодер,";
    count++;
  } else if (count > 4) {
  	count = 0;
    document.getElementById("word3").innerHTML = "поэт,";
  }
}

var count = 0;
function changeonlick4(){
  if (count == 0) {
    document.getElementById("word4").innerHTML = "аналитик,";
    count++;
  } else if (count == 1) {
    document.getElementById("word4").innerHTML = "археолог,";
    count++;
  } else if (count == 2) {
    document.getElementById("word4").innerHTML = "аниматор,";
    count++;
  } else if (count == 3) {
    document.getElementById("word4").innerHTML = "приколист,";
    count++;
  } else if (count > 3) {
  	count = 0;
    document.getElementById("word4").innerHTML = "прозаик,";
  }
}

var count = 0;
function changeonlick5(){
  if (count == 0) {
    document.getElementById("word5").innerHTML = "астроном,";
    count++;
  } else if (count == 1) {
    document.getElementById("word5").innerHTML = "сапожник,";
    count++;
  } else if (count == 2) {
    document.getElementById("word5").innerHTML = "художник,";
    count++;
  } else if (count == 3) {
    document.getElementById("word5").innerHTML = "овощевод,";
    count++;
  } else if (count > 3) {
  	count = 0;
    document.getElementById("word5").innerHTML = "драматург,";
  }
}


var count = 0;
function changeonlick7(){
  if (count == 0) {
    document.getElementById("word7").innerHTML = "клоун.";
    count++;
  } else if (count == 1) {
    document.getElementById("word7").innerHTML = "блогер.";
    count++;
  } else if (count == 2) {
    document.getElementById("word7").innerHTML = "гений.";
    count++;
  } else if (count == 3) {
    document.getElementById("word7").innerHTML = "пекарь.";
    count++;
  } else if (count > 3) {
  	count = 0;
    document.getElementById("word7").innerHTML = "критик.";
  }
}

var count = 0;
function changeonlick8(){
  if (count == 0) {
    document.getElementById("word8").innerHTML = "Родилась";
    count++;
  } else if (count == 1) {
    document.getElementById("word8").innerHTML = "Родилось";
    count++;
  } else if (count > 1) {
  	count = 0;
    document.getElementById("word8").innerHTML = "Родился";
  }
}

var count = 0;
function changeonlick9(){
  if (count == 0) {
    document.getElementById("word10").innerHTML = "в суровое время.";
    count++;
  } else if (count == 1) {
    document.getElementById("word10").innerHTML = "в любви.";
    count++;
  } else if (count == 2) {
    document.getElementById("word10").innerHTML = "в Дегунино.";
    count++;
  } else if (count == 3) {
    document.getElementById("word10").innerHTML = "в горе и радости.";
    count++;
  } else if (count > 3) {
  	count = 0;
    document.getElementById("word10").innerHTML = "в Немецкой слободе.";
  }
}

var count = 0;
function changeimgonlick1(){
  if (count == 0) {
    document.getElementById("jpg1").style.backgroundImage = "url(images/img12.jpg)";
    count++;
  } else if (count == 1) {
    document.getElementById("jpg1").style.backgroundImage = "url(images/img13.jpg)";
    count++;
  } else if (count == 2) {
    document.getElementById("jpg1").style.backgroundImage = "url(images/img14.jpg)";
    count++;
  }else if (count == 3) {
    document.getElementById("jpg1").style.backgroundImage = "url(images/img15.jpg)";
    count++;
  }else if (count > 3) {
  	count = 0;
    document.getElementById("jpg1").style.backgroundImage = "url(images/img11.jpg)";
  }
}

var count = 0;
function changeimgonlick2(){
  if (count == 0) {
    document.getElementById("jpg2").style.backgroundImage = "url(images/img22.jpg)";
    count++;
  } else if (count == 1) {
    document.getElementById("jpg2").style.backgroundImage = "url(images/img23.jpg)";
    count++;
  } else if (count == 2) {
    document.getElementById("jpg2").style.backgroundImage = "url(images/img24.jpg)";
    count++;
  }else if (count == 3) {
    document.getElementById("jpg2").style.backgroundImage = "url(images/img25.jpg)";
    count++;
  }else if (count > 3) {
  	count = 0;
    document.getElementById("jpg2").style.backgroundImage = "url(images/img21.jpg)";
  }
}

var count = 0;
function changeimgonlick3(){
  if (count == 0) {
    document.getElementById("jpg3").style.backgroundImage = "url(images/img32.jpg)";
    count++;
  } else if (count == 1) {
    document.getElementById("jpg3").style.backgroundImage = "url(images/img33.jpg)";
    count++;
  } else if (count == 2) {
    document.getElementById("jpg3").style.backgroundImage = "url(images/img34.jpg)";
    count++;
  }else if (count == 3) {
    document.getElementById("jpg3").style.backgroundImage = "url(images/img35.jpg)";
    count++;
  }else if (count > 3) {
  	count = 0;
    document.getElementById("jpg3").style.backgroundImage = "url(images/img31.jpg)";
  }
}

var count = 0;
function changeimgonlick4(){
  if (count == 0) {
    document.getElementById("jpg4").style.backgroundImage = "url(images/img42.jpg)";
    count++;
  } else if (count == 1) {
    document.getElementById("jpg4").style.backgroundImage = "url(images/img43.jpg)";
    count++;
  } else if (count == 2) {
    document.getElementById("jpg4").style.backgroundImage = "url(images/img44.jpg)";
    count++;
  }else if (count == 3) {
    document.getElementById("jpg4").style.backgroundImage = "url(images/img45.jpg)";
    count++;
  }else if (count > 3) {
  	count = 0;
    document.getElementById("jpg4").style.backgroundImage = "url(images/img41.jpg)";
  }
}


function clearall(){
  document.getElementById("nameinput").value = 'Пушкин Александр';
  document.getElementById("nameinput2").value = 'публицист,';
  document.getElementById("nameinput2").style.width ="  58vh";
    document.getElementById("nameinput").style.width =" 65%";
  document.getElementById("date").value = "1799-06-06";
  document.getElementById("myselect").value = "0";
  document.getElementById("word1").innerHTML = "великий";
  document.getElementById("word2").innerHTML = "русский";
  document.getElementById("word3").innerHTML = "поэт,";
  document.getElementById("word4").innerHTML = "прозаик,";
  document.getElementById("word5").innerHTML = "драматург,";
  document.getElementById("word7").innerHTML = "критик.";
  document.getElementById("word8").innerHTML = "Родился";
  document.getElementById("word10").innerHTML = "в Немецкой слободе.";
  document.getElementById("jpg1").style.backgroundImage = "url(images/img11.jpg)";
  document.getElementById("jpg2").style.backgroundImage = "url(images/img21.jpg)";
  document.getElementById("jpg3").style.backgroundImage = "url(images/img31.jpg)";
  document.getElementById("jpg4").style.backgroundImage = "url(images/img41.jpg)";
  // $(".draggable").removeAttr("style");

}


function infoblocks() {
    $(".infowindow" ).toggleClass( "visibility" );
}
