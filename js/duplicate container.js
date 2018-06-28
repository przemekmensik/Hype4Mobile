document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

  var cell = document.querySelector(".container-first");
  var cellClone = cell.cloneNode(true);

  //console.log(cell);

  document.body.appendChild(cellClone);


  });
