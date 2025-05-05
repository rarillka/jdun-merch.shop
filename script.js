function showPassword() {
  var x = document.getElementById("passwordinput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showPasswordS() {
  var x = document.getElementById("passwordinput");
  var y = document.getElementById("passwordinput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}

