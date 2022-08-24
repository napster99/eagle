function test() {
  alert("我是background");
}

var views = chrome.extension.getViews({ type: "popup" });
console.log("views", views);
if (views.length > 0) {
  console.log(views[0].location.href);
}

function sendMessageToContentScript(message: any, callback: any) {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      chrome.tabs.sendMessage(tabs[0].id, message, function (response: any) {
        if (callback) callback(response);
      });
    }
  );
}
sendMessageToContentScript(
  { cmd: "test", value: "你好，我是popup！" },
  function (response: any) {
    console.log("来自content的回复：" + response);
  }
);

// 监听来自content-script的消息
chrome.runtime.onMessage.addListener(function (
  request: any,
  sender: any,
  sendResponse: any
) {
  console.log("收到来自content-script的消息：");
  console.log(request, sender, sendResponse);
  sendResponse("我是后台，我已收到你的消息：" + JSON.stringify(request));
});

// 获取当前选项卡ID
function getCurrentTabId(callback: any) {
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs: any) {
      if (callback) callback(tabs.length ? tabs[0].id : null);
    }
  );
}

getCurrentTabId((tabId: any) => {
  chrome.tabs.executeScript(tabId, {
    code: `document.body.innerHTML = ${tabId}`,
  });
});

console.log(chrome);
