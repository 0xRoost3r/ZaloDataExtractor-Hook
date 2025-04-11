// chrome.action.onClicked.addListener(function(tab) {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: copyTextToClipboard
//   });
// });

document.getElementById("btn-copy-imei").addEventListener("click", async () => {
  var textInput = document.getElementById("imei");
  if (!textInput.value) return;

  copyTextToClipboard(textInput.value);

  let btnCopy = document.getElementById("btn-copy-imei");

  btnCopy.innerText = "Copied";
  let timeoutCopy = setTimeout(() => {
    btnCopy.innerHTML = `<i class="el-icon-document-copy"></i> Copy IMEI`;
    clearTimeout(timeoutCopy);
  }, 2000);
});

document.getElementById("btn-copy-cookies").addEventListener("click", async () => {
  var textInput = document.getElementById("cookies");
  if (!textInput.value) return;

  copyTextToClipboard(textInput.value);

  let btnCopy = document.getElementById("btn-copy-cookies");

  btnCopy.innerText = "Copied";
  let timeoutCopy = setTimeout(() => {
    btnCopy.innerHTML = `<i class="el-icon-document-copy"></i> Copy Cookies`;
    clearTimeout(timeoutCopy);
  }, 2000);
});

document.getElementById("btn-copy-ua").addEventListener("click", async () => {
  var textInput = document.getElementById("user-agent");
  if (!textInput.value) return;

  copyTextToClipboard(textInput.value);

  let btnCopy = document.getElementById("btn-copy-ua");

  btnCopy.innerText = "Copied";
  let timeoutCopy = setTimeout(() => {
    btnCopy.innerHTML = `<i class="el-icon-document-copy"></i> Copy User-Agent`;
    clearTimeout(timeoutCopy);
  }, 2000);
});

function copyTextToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

// document.getElementById("refresh-button").addEventListener("click", () => {
//   window.location.reload();
// });

document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("refresh-button")
      .addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.reload(tabs[0].id);
        });
      });
});

// Add the request handler
document.getElementById("request-trial").addEventListener("click", async () => {
  const imei = document.getElementById("imei").value
  const cookies = document.getElementById("cookies").value
  const userAgent = document.getElementById("user-agent").value
  const phone = document.getElementById("phone").value

  if (!imei || !cookies || !userAgent || !phone) {
    alert("Please ensure all fields are filled")
    return
  }

  try {
    const response = await fetch('http://zahook.site/api/new-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imei,
        cookies,
        agent: userAgent,
        phone
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    alert('Request successful!')
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to send request. Please check if the server is running.')
  }
})