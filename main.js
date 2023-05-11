const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event)=>{
   const xPosition = event.offsetX
   const ypoistion = event.offsetY
   const spanEl = document.createElement("span");

   spanEl.style.left = xPosition + "px";
   spanEl.style.top = ypoistion + "px";

   const size = Math.random()*100;
   spanEl.style.width = size + "px";
   spanEl.style.height = size + "px";

   bodyEl.appendChild(spanEl);

   setTimeout(()=>{
    spanEl.remove();
   }, 3000);
});


const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();
