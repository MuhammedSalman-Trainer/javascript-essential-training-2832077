
const frogpack = {
  name: "Frog Backpack",
  volume: 8,   
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description:
    "A green kids backpack designed to make the lid look like the face of a frog sticking out its tongue.",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

const addFigure = (frogpack)=>{
  let newFig = document.createElement('figure');
  let newImg = document.createElement('img');
  newImg.setAttribute("src", frogpack.image);
  newImg.setAttribute("alt", "");
  let newDesc = document.createElement("figcaption");
  newDesc.innerText = frogpack.description;
  newFig.append(newImg,newDesc);
  return newFig;
}

const createArticle = (frogpack)=>{
  const newArticle = document.createElement('article');
  newArticle.innerHTML=content;
  newArticle.prepend(addFigure(frogpack));
  return newArticle;
}


document.querySelector('main').append(createArticle(frogpack))