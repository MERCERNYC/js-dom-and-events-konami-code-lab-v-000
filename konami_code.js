// check to make sure that the browser can handle window.addEventListener

const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let index = 0;

function init() {
  // Write your JavaScript code inside the init() function

document.body.addEventListener('keydown', function(e){

  const key = parseInt(e.detail || e.location);

  if (key === code[index]){
    index++;

    alert("okok");

    if (key === code.length){
      alert("Hurray!");
      index = 0
    }
  } else{
    index = 0;
      }
  });
}

init();
