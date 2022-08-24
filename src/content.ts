// declare const webVitals: any;
declare const chrome: any;
// var script = document.createElement("script");
// script.src = "https://unpkg.com/web-vitals/dist/web-vitals.iife.js";
// script.onload = function () {
//   // When loading `web-vitals` using a classic script, all the public
//   // methods can be found on the `webVitals` global namespace.
//   setTimeout(() => {
//     console.log("webV1itals", webVitals);
//   }, 5000);
//   webVitals.getCLS(console.log);
//   webVitals.getFID(console.log);
//   webVitals.getLCP(console.log);
// };
// document.head.appendChild(script);

document.body.style.border = "10px solid blue";

var bg = chrome.extension.getBackgroundPage();

console.log(bg);

chrome.runtime.onMessage.addListener(function (
  request: any,
  sender: any,
  sendResponse: any
) {
  // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
  if (request.cmd == "test") alert(request.value);
  sendResponse("我收到了你的消息！");
});

chrome.runtime.sendMessage(
  { greeting: "你好，我是content-script呀，我主动发消息给后台！" },
  function (response: any) {
    console.log("收到来自后台的回复：" + response);
  }
);
