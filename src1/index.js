function displayPoem(response){
  console.log("poem generatated");
new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: ""
})
}

function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instruction");
let apiKey = "f703e5a61eta6cab06o3b9dd14f7dc6e";
let context ="You are a romantic Poem expert and love to write short poems. Your mission is to generate 4 line poem in ba0sic HTML and separate each line. Make sure you follow the user instructions.Do not include a title to the poem. Sign the poem with 'SheCodes ai' inside a <strong> element at the end of the poem and NOT at the beginning.";
let prompt ='User instructions: Generate a poem about flowers" ${instructionsInput.value}';
let apiURL = "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}";

console.log("Generating poem");
console.log('Prompt:${prompt}');
console.log('Context:${context}');

axios.get(apiURL).then(displayPoem);


;
}

let poemFormElement= document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);
