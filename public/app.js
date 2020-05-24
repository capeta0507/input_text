var maxstrlen = 8;//定義字符長度最大值
var myLen = 0; //輸入字數
var chineseLen = 0; //中文字字數
var englishLen = 0; //英文字字數 

var myinput = document.getElementById('input'); // Input
var mychiLen = document.getElementById('chiLen'); // 中文長度
var myengLen = document.getElementById('engLen'); // 英文長度
var mytotalLen = document.getElementById('totalLen'); // 英文長度

var mywordCheck = document.getElementById('wordCheck'); // 剩下字數
mywordCheck.innerText = maxstrlen;
var mywordAccept = document.getElementById('wordAccept'); // 收取字數

// 以 INPUT KEYUP 事件來做處理 (方法1)
// myinput.addEventListener('keyup',() =>{
//   inputProcess()
// })

// 以 INPUT ONINPUT 事件來做處理 (方法2)
myinput.addEventListener('input',() =>{
  inputProcess()
})

// Input Text 事件處理
function inputProcess(){
  let str = myinput.value
  console.log('input',myinput.value); // 顯示輸入
  document.getElementById('ipt_text').innerText = myinput.value
  getStrleng(str);//调用getStrleng方法
  // 顯示中英文字數
  mychiLen.innerText = chineseLen;  //顯示中文字數
  myengLen.innerText = englishLen;  //顯示英中文字數
  mytotalLen.innerText = chineseLen + englishLen; //顯示全部字數
  mywordCheck.innerText = maxstrlen - (chineseLen + englishLen);  // 剩下可輸入字數
  if (chineseLen > 4){
    myinput.style.border ="1px solid red";
    myinput.style.backgroundColor ="lightgrey";
  } else {
    myinput.style.border ="1px solid black";
    myinput.style.backgroundColor ="";
  }
}

//獲取文字來判斷字數
function getStrleng(str) {
  // 看一下輸入的內容
  myLen = str.length;
  console.log("長度：" + myLen , "key:" , str.charCodeAt(myLen-1))
  document.getElementById('ipt_span').innerText = str.charCodeAt(myLen-1)
  chineseLen = 0;
  englishLen = 0;
  let i = 0;//i從0開始
  //str.length判断字符的長度，maxstrlen*2方便英文输入
  for (i = 0; (i < str.length); i++) {
  //判断中英文字符，利用charCodeAt，若返回128内的都是英文字符
    if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128){	//charCodeAt()方法可返回指定位置的字符的Unicode编码。这个返回值是0-65535之间的整数。
      englishLen += 1; //英文字獨立計算
    } else {
      chineseLen += 2; //中文字獨立計算
    }
  }
}