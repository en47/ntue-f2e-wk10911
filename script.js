// 建立 50 家國北教大 / 118巷 / 科技大樓站周邊的美食大水庫
const restaurantPool = [
    // === 118巷核心戰區 ===
    { name: "Barkers 漢堡", query: "Barkers 美式餐廳 大安區和平東路二段118巷" },
    { name: "I'm Pasta", query: "I'm Pasta 大安區和平東路二段118巷" },
    { name: "小姐姐麻辣食堂", query: "小姐姐麻辣食堂 大安區和平東路二段118巷4弄" },
    { name: "安好食 早午餐", query: "安好食 大安區和平東路二段118巷" },
    { name: "蔥燉牛肉麵", query: "蔥燉牛肉麵 台北市大安區和平東路二段118巷" },
    { name: "補時 Cafe", query: "補時 Stoppage Time 台北市大安區和平東路二段118巷" },
    { name: "微笑廚房", query: "微笑廚房 台北市大安區和平東路二段118巷" },
    { name: "高和食堂", query: "高和食堂 大安區和平東路二段118巷60號" },
    { name: "搗飛豆花", query: "搗飛豆花 大安區和平東路二段118巷" },
    { name: "淺草日式飯糰", query: "淺草日式飯糰 大安區和平東路二段118巷" },
    { name: "松田日式飯糰", query: "松田日式飯糰 大安區和平東路二段118巷" },
    { name: "阿孟石碗燒河粉", query: "阿孟石碗燒河粉 大安區和平東路二段118巷69號" },
    { name: "大李水餃", query: "大李水餃 大安區和平東路二段118巷" },
    { name: "李記水餃", query: "李記水餃 大安區和平東路二段118巷" },
    { name: "黎記北越河粉", query: "黎記北越河粉 大安區和平東路二段118巷" },
    { name: "阿英羊肉羹", query: "阿英羊肉羹 大安區和平東路二段118巷" },
    { name: "大易園早午餐", query: "大易園現做早午餐 大安區和平東路二段118巷" },
    { name: "憶馬當鮮", query: "憶馬當鮮 大安區和平東路二段118巷61號" },
    { name: "滇味小館", query: "滇味小館 大安區和平東路二段118巷" },
    { name: "親來食堂", query: "親來食堂 大安區和平東路二段118巷" },
    { name: "逗號義大利麵", query: "逗號義大利麵 大安區和平東路二段118巷" },
    { name: "好友涼麵", query: "好友涼麵 大安區和平東路二段118巷" },
    { name: "鑫吉野烤肉飯", query: "鑫吉野烤肉飯 大安區和平東路二段118巷" },
    { name: "胖老爹炸雞", query: "胖老爹 大安區和平東路二段118巷" },
    { name: "老虎麵", query: "老虎麵 大安區和平東路二段118巷" },
    { name: "麵之彩", query: "麵之彩 大安區和平東路二段118巷" },
    { name: "咖哩廚房", query: "咖哩廚房 大安區和平東路二段118巷" },
    { name: "正客家魷魚羹", query: "正客家魷魚羹 大安區和平東路二段118巷" },
    { name: "佳味排骨麵", query: "佳味排骨麵 大安區和平東路二段118巷" },
    { name: "小石鍋", query: "小石鍋 大安區和平東路二段118巷" },
    { name: "順吉拉麵", query: "順吉拉麵 大安區和平東路二段118巷" },

    // === 科技大樓/國北教周邊/復興臥龍周邊 ===
    { name: "芝鄉涼麵", query: "芝鄉涼麵 台北市大安區和平東路二段311巷" },
    { name: "巧房餡餅", query: "巧房餡餅 大安區和平東路二段313號" },
    { name: "豚太郎丼飯", query: "豚太郎日式丼飯 大安區臥龍街13號" },
    { name: "MAMA'S早午餐", query: "MAMA'S 鐵鍋早午餐 大安區和平東路二段311巷" },
    { name: "盛味豐炭烤", query: "盛味豐炭烤燒餅 大安區和平東路二段311巷" },
    { name: "和平食光", query: "和平食光早午餐 大安區和平東路二段311巷" },
    { name: "找餐。店", query: "找餐。店 大安區和平東路三段1巷" },
    { name: "劉家飯糰", query: "劉家飯糰 捷運科技大樓站" },
    { name: "小拾聚餐食", query: "小拾聚餐食料理 大安區復興南路二段325號" },
    { name: "神樂市場", query: "神樂市場 大安區敦化南路二段120號" },
    { name: "彌生軒YAYOI", query: "彌生軒 敦南和平店 大安區和平東路三段" },
    { name: "咖哩盒食", query: "咖哩盒食 大安區和平東路三段105號" },
    { name: "THE SHED", query: "THE SHED 大安區敦化南路二段172巷" },
    { name: "三隻貓頭鷹", query: "三隻貓頭鷹 大安區和平東路二段96巷" },
    { name: "瀧厚熟成牛排", query: "瀧厚炙燒熟成牛排 大安區和平東路二段183號" },
    { name: "蘇草手工漢堡", query: "蘇草手工漢堡 大安區辛亥路二段" },
    { name: "麥當勞科技大樓", query: "麥當勞 台北科技大樓" },
    { name: "八方雲集", query: "八方雲集 科技大樓店" },
    { name: "吉野家", query: "吉野家 台北市大安區復興南路二段" }
];

// 沿用珍珠粉復古色系，交錯配置輪盤切片顏色
const colors = [
    '#f4d5db', '#fff9fa', '#eeb8c3', '#fdfaf9'
];

let isSpinning = false;
let currentRotation = 0;
let currentWinner = null; // 紀錄當前抽中的餐廳

// 當畫面載入完畢後，直接繪製 8 等分的裝飾性輪盤
document.addEventListener("DOMContentLoaded", () => {
    drawWheel();
});

function drawWheel() {
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const numSlices = 8; // 視覺上固定為 8 等分，保持美觀
    const sliceAngle = 2 * Math.PI / numSlices;

    // 放大 Canvas 內部解析度確保清晰度
    const size = 800;
    canvas.width = size;
    canvas.height = size;
    const center = size / 2;
    const radius = size / 2;

    for (let i = 0; i < numSlices; i++) {
        const startAngle = -Math.PI / 2 + i * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        // 繪製扇形
        ctx.beginPath();
        ctx.moveTo(center, center);
        ctx.arc(center, center, radius, startAngle, endAngle);
        ctx.closePath();

        // 填色與描邊
        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();
        ctx.lineWidth = 4; // 無文字版可以把邊框加粗一點點增加質感
        ctx.strokeStyle = "var(--pearl-border)";
        ctx.stroke();

        // 取消了文字繪製，讓輪盤保持乾淨優雅
    }
}

function startSpin() {
    if (isSpinning) return;
    isSpinning = true;

    const resultArea = document.getElementById('resultArea');
    resultArea.style.display = 'none';

    const spinBtn = document.getElementById('spinBtn');
    spinBtn.disabled = true;
    spinBtn.innerHTML = '✨ 命運運轉中...';

    // ★ 後台暗箱操作：直接從 50 家水庫中隨機抽取一家！
    const randomIndex = Math.floor(Math.random() * restaurantPool.length);
    currentWinner = restaurantPool[randomIndex];

    // 隨機產生視覺上的旋轉角度
    const randomDegree = Math.floor(Math.random() * 360);
    const extraSpins = 360 * 6;
    currentRotation += extraSpins + randomDegree;

    const canvas = document.getElementById('wheelCanvas');
    canvas.style.transform = `rotate(${currentRotation}deg)`;

    setTimeout(() => {
        isSpinning = false;
        spinBtn.disabled = false;
        spinBtn.innerHTML = '🍽️ 再轉一次！';
        showResult();
    }, 4000);
}

function showResult() {
    // 直接顯示剛才後台抽中的餐廳
    const resultName = document.getElementById('resultName');
    resultName.innerText = currentWinner.name;

    const mapLink = document.getElementById('mapLink');
    mapLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentWinner.query)}`;

    const resultArea = document.getElementById('resultArea');
    resultArea.style.display = 'block';
    setTimeout(() => {
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}
