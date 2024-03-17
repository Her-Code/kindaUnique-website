// const h2 = document.createElement("h2");
// h2.textContent = "My Journey";
//  document.querySelector("#About").appendChild(h2);

// const h3 = document.createElement("h3");
// h3.textContent = "Creating a website with JavaScript";
// document.querySelector("body").appendChild(h3);
function createFoot() {
    var f = document.createElement("FOOTER");
    document.body.appendChild(f);
    var p = document.createElement("P");
    var txt = document.createTextNode("Copyright ©, 2024");
    p.appendChild(txt);
    f.appendChild(p);

    // var a = document.createElement('a'); 
     
    // // Create the text node for anchor element.
    // var link = document.createTextNode("This is link");
     
    // // Append the text node to anchor element.
    // a.appendChild(link); 
     
    // // Set the title.
    // a.title = "Email"; 
     
    // // Set the href property.
    // a.href = "wanjiku.kahira@gmail.com"; 
     
    // // Append the anchor element to the body.
    // document.body.prepend(a);
 }
 const element = document.getElementById("p1");
element.innerHTML = "Let's work together";

document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);
function mouseOver() {
  document.getElementById("demo").style.color = "red";
}
function mouseOut() {
  document.getElementById("demo").style.color = "white";
}
 