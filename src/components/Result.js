const category = "travel";
const version = "1";
const totalCards = 17;

let currentIndex = 0;

function updateCard() {
    const folder = `${category}${version}`;
    const fileNumber = String(currentIndex).padStart(2, '0');
    const filePath = `Cards/${folder}/${folder}-${fileNumber}.svg`;
  
    console.log("Loading:", filePath);
    
    const img = document.getElementById("question-card");
  
    // alt 텍스트 깜빡임 방지 - 먼저 안 보이게
    img.classList.add("invisible");
    img.classList.add("fade-out");
  
    // 이미지 src 설정 및 로딩 완료 후 보여주기
    img.onload = () => {
      img.classList.remove("invisible");
      img.classList.remove("fade-out");
    };
  
    img.src = filePath;
  
    // 버튼 보여짐/숨김 처리
    const leftBtn = document.querySelector(".dot.green");
    const rightBtn = document.querySelector(".dot.yellow");
  
    leftBtn.classList.toggle("hidden", currentIndex === 0);
    rightBtn.classList.toggle("hidden", currentIndex === totalCards - 1);
  }
  
  

function goPrev() {
  if (currentIndex > 0) { 
    currentIndex--;
    updateCard();
  }
}

function goNext() {
  if (currentIndex < totalCards - 1) {  
    currentIndex++;
    updateCard();
  }
}


updateCard();
