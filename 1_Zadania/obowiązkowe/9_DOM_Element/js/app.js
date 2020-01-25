document.addEventListener("DOMContentLoaded", function() {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
  
    /*
      Poniżej napisz kod rozwiązujący zadania
       */
  
    // Zadanie 0
    function getDatasInfo(elements) {
      var foo = [];
      for (let index = 0; index < elements.length; index++) {
        foo.push(elements[index].dataset.color);
  
        return foo;
      }
    }
    console.log(getDatasInfo(links));
  
    // Zadanie 1
    function writeElements(x) {
      if (x.length === undefined) {
        console.log(x);
        console.log("Class name: " + x.className);
        console.log("Tag name: " + x.tagName);
      } else {
        Array.from(x).forEach(item => {
          console.log(item);
          if (item.className != "") console.log("Class name: " + item.className);
          console.log("Tag name: " + item.tagName);
        });
      }
    }
    writeElements(homeElement);
    writeElements(childElements);
    writeElements(banner);
    writeElements(blocks);
    writeElements(links);
  
    // Zadanie 2
    for (let index = 0; index < blocks.length; index++) {
      console.log(blocks[index].innerHTML);  
      console.log(blocks[index].outerHTML); 
      blocks[index].innerHTML = "Nowa wartość diva o klasie blocks";
      console.log(blocks[index].innerHTML); 
    }
  
    // Zadanie 3
    var DOM_footer = document.getElementById("mainFooter");
  
    function getId(element) {
      let id = element.id;
      return id;
    }
    console.log(getId(DOM_footer));
  
    // Zadanie 4
    function getTags(elements) {
      var foo = [];
      Array.from(elements).forEach(item => {
        foo.push(item.tagName);
      });
      return foo;
    }
    console.log(getTags(childElements));
  
    // Zadanie 5
    function getClassInfo(element) {
      var foo = [];
      if (element.length === undefined) {
        foo.push(element.className);
      } else {
        Array.from(elements).forEach(item => {
          foo.push(item.className);
        });
      }
      return foo;
    }
    console.log(getClassInfo(banner));
  
    // Zadanie 6
    var DOM_liInNav = document.querySelectorAll("nav li");
    function setDataDirection(elements) {
      for (let index = 0; index < elements.length; index++) {
        if (elements[index].dataset.direction == undefined) {
          elements[index].dataset.direction = "top";
        }
      }
    }
    setDataDirection(DOM_liInNav);
  });