function showPassword() {
  var x = document.getElementById("passwordinput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}