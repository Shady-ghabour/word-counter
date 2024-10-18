const text = document.getElementById("textInput");
const words = document.querySelector(".wordCount span");
const characters = document.querySelector(".charCount span");

text.addEventListener("input", ()=>{
    characters.textContent = text.value.length; 

    let txt = text.value.trim();

    words.textContent = txt.split(/\s+/).filter((item)=>item).length;

})