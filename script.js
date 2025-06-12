// 卡片資料
const cards = [
  { image: "img/1.svg", text: "EGO(自我)是意識的中心，指能感知到世界與我們肉體的互動與聯繫<br>它的功能在於辨識世界、保有身份與穩定性。<br>EGO比較容易覺察到，但並非我們心靈的全部。<br><br>牌義：自我覺察、五感、真實" },
  { image: "img/2.svg", text: "Door(門)符號<br>通常象徵閘口、未知、道路等等具有決策要素的含意<br>門後象徵著做出決策後的部分<br><br>牌義：選擇、謹慎、未知" },
  { image: "img/3.svg", text: "REVEAL(揭示)<br>不屬於符號或意識<br>而是象徵在心靈受到啟發或感知的時刻<br>整合前的最後一哩路，兼具清晰與模糊的含意。<br><br>牌義：交錯、矛盾、自我審核" },
  { image: "img/4.svg", text: "Shadow（陰影）是人被壓抑的潛意識<br>被刻意隱藏起來的部分<br>常常包括恐懼、否認、自我逃避的面向<br>但陰影本身並沒有正面或負面含意<br>就只是一個正常產生的意識<br>榮格認為整合它是我們邁向個體化的必經過程。<br><br>牌義：被隱藏、忽視、自我坦承" },
  { image: "img/5.svg", text: "Sum(太陽)符號通常象徵主動、積極等等正面含意<br>中心放射象徵著人格的整合與完滿。<br><br>牌義：喜悅、平安、炙熱" },
  { image: "img/6.svg", text: "Moon(月亮)符號通常象徵迷幻、潛意識等較虛幻的含意<br>月光象徵人格潛藏與尚未察覺的部分。<br><br>牌義：夢、幻覺、尚未察覺" },
  { image: "img/7.svg", text: "Animus是指女性潛意識中的男性原型<br>也可以說是男性傾向<br>象徵理性、邏輯、剛強與秩序<br>與Anima為一體兩面<br>當它過度覺察時可能會讓人變得過於固執<br>但同時對於自律、決策、學習等邏輯思維很有幫助。<br><br>牌義：理性、判斷、不知變通" },
  { image: "img/8.svg", text: "Anima是指男性潛意識中的女性原型<br>也可以說是女性傾向<br>象徵感性與直覺、細心<br>與Animus為一體兩面<br>當它過度覺察時可能會使人變得敏感脆弱<br>但同時對藝術、感知等抽象理念的啟發很有幫助。<br><br>牌義：感性、夢幻、優柔寡斷" },
  {
    image: "img/about.svg",
    text:
      "我們是來自多遊系的小組<br>希望能夠過網頁跟實體卡牌簡單介紹一下榮格的一些概念<br>我們主要的元素與內容都是出自參考書籍，關於意識以及符號的部分，卡牌創作靈感則是來自塔羅牌。<br><br>祝你逛得開心！<br><p>※參考資料是《 MAN AND HIS SYMBOLS 》<p>",
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
