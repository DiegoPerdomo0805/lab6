const btn = document.getElementById("ashes")
function myFunction() {
  btn.disabled = true;
  setTimeout(()=>{
    btn.disabled = false;
    console.log('Button Activated')}, 50)
}