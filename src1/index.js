function generatePoem(event){
    event.preventDefault();


new Typewriter('#poem', {
  strings: "Words to My Love",
  autoStart: true,
  delay: 1,
  cursor: ""
});
PoemElement.innerHTML= "Words to My Love";
}

let poemFormElement= document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);
