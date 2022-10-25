const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

// Disable/Enable button
function toggleButton(){
  button.disabled = !button.disabled;
}

// function test() {
//   VoiceRSS.speech({
//     key: "0888ce4fcf594992aac3aec2ca74b4cf",
//     src: "Hello, world!",
//     hl: "en-us",
//     v: "Linda",
//     r: 0,
//     c: "mp3",
//     f: "44khz_16bit_stereo",
//     ssml: false,
//   });
// }
// test();

// passing joke to voiceRSS API
function tellMe(joke) {
  console.log("tell me:", joke);
  VoiceRSS.speech({
    key: "0888ce4fcf594992aac3aec2ca74b4cf",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// api jokes
async function getJokes() {
  let joke = "";
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.delivery) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Text-to-Speech
    tellMe(joke);
    // Disable the button 
    toggleButton();
  } catch (error) {
    console.log("error", error);
  }
}

// Event Listeners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleutton);
