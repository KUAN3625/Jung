// 卡片資料
const cards = [
  { image: "img/1.svg", text: "1" },
  { image: "img/2.svg", text: "2" },
  { image: "img/3.svg", text: "3" },
  { image: "img/4.svg", text: " " },
  { image: "img/5.svg", text: " " },
  { image: "img/6.svg", text: "" },
  { image: "img/7.svg", text: "" },
  { image: "img/8.svg", text: "12" },
  {
    image: "img/about.svg",
    text:
      "我們是來自多遊系的小組<br>希望能夠過網頁跟卡牌簡單介紹一下榮格的一些概念<br><br>祝你逛得開心！<br><p>※參考資料是《 MAN AND HIS SYMBOLS 》<p>",
  },
];

let currentIndex = -1;

const buttons = document.querySelectorAll("section:last-of-type div button");
const aboutBtn = document.getElementById("about-btn");
const imageBox = document.getElementById("card-image");
const textBox = document.getElementById("card-description");
const cardContent = document.getElementById("card-content");

// 初始顯示第一張
buttons[0].classList.add("selected");
displayCard(0);

// 綁定按鈕事件
buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    displayCard(index);
  });
});

// 關於我們按鈕事件
aboutBtn.addEventListener("click", () => {
  buttons.forEach((b) => b.classList.remove("selected"));
  displayCard(8);
});

function displayCard(index) {
  if (index === currentIndex) return;
  currentIndex = index;

  const card = cards[index];

  cardContent.classList.add("fade-out");

  setTimeout(() => {
    imageBox.innerHTML = `<img src="${card.image}" alt="Card Image" style="width:100%">`;
    textBox.innerHTML = card.text;
    cardContent.classList.remove("fade-out");
  }, 400);
}
