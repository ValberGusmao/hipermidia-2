function createFruit() {
  const frutaInput = document.getElementById("fruta");
  const myBtn = document.getElementById("btn");
  const fruta = frutaInput.value;
  const result = document.getElementById("result");
  result.innerText += fruta;
}

const fruitList = document.getElementById("fruit-list");
const myFruits = [
  {
    nome: "cachorro",
    url: "https://www.petz.com.br/blog/wp-content/uploads/2022/04/cachorro-e-vertebrado-ou-invertebrado2.webp",
  },
  {
    nome: "pombo",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG/250px-Paloma_brav%C3%ADa_%28Columba_livia%29%2C_Palacio_de_Nymphenburg%2C_M%C3%BAnich%2C_Alemania01.JPG",
  },
  {
    nome: "leao do proerd duvidoso",
    url: "https://s2-g1.glbimg.com/F4C7oyv7HvPOz7AZUDALxcOFlwc=/0x0:800x534/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/m/j/rIAzz3Quui6oTh2GWZ7g/drogas-mascote-proerd-sc-5.jpg",
  },
];

for (let i = 0; i < myFruits.length; i++) {
  const myDiv = document.createElement("div");
  const mySpan = document.createElement("span");
  const myImage = document.createElement("img");

  myImage.setAttribute("class", "my-image");
  myImage.setAttribute("src", myFruits[i].url);
  myDiv.setAttribute("class", "containe-fruit");

  mySpan.innerText = "Fruta " + myFruits[i].nome;
  //innerHTML
  myDiv.append(mySpan);
  myDiv.append(myImage);
  fruitList.append(myDiv);
}
