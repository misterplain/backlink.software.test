//OBFUSCATED CODE TEST 3 - FIRST ATTEMPT R45
var _r45k = "1bd5500e83de00072c41aa200b39b94f";
var _r45 = function (c) {
  var b = atob(c);
  var d = new Uint8Array(b.length);
  for (var i = 0; i < b.length; i++) {
    d[i] = b.charCodeAt(i);
  }
  var kb;
  if (window.TextEncoder) {
    kb = new TextEncoder().encode(_r45k);
  } else {
    var ek = unescape(encodeURIComponent(_r45k));
    kb = new Uint8Array(ek.length);
    for (var z = 0; z < ek.length; z++) {
      kb[z] = ek.charCodeAt(z);
    }
  }
  var s = new Uint8Array(256);
  for (var x = 0; x < 256; x++) {
    s[x] = x;
  }
  var j = 0;
  for (var y = 0; y < 256; y++) {
    j = (j + s[y] + kb[y % kb.length]) & 255;
    var tk = s[y];
    s[y] = s[j];
    s[j] = tk;
  }
  var i2 = 0;
  var j2 = 0;
  for (var n = 0; n < d.length; n++) {
    i2 = (i2 + 1) & 255;
    j2 = (j2 + s[i2]) & 255;
    var tp = s[i2];
    s[i2] = s[j2];
    s[j2] = tp;
    var kk = s[(s[i2] + s[j2]) & 255];
    d[n] = d[n] ^ kk;
  }
  if (window.TextDecoder) {
    return new TextDecoder().decode(d);
  }
  var out = "";
  for (var m = 0; m < d.length; m++) {
    out += String.fromCharCode(d[m]);
  }
  return decodeURIComponent(escape(out));
};
(function () {
  var _0x1 = _r45("u3TlpXHcKSb4Hm4FGrmPOC7kV0PZXYpw4Wfiqm5v8isF1tw=");
  var _0x2 = function (_0x3) {
    var _0x4 = (_0x3 || _r45("")).toLowerCase();
    return _0x4.indexOf(_r45("rmLx4A==")) === 0 ? _0x4.slice(4) : _0x4;
  };
  var _0x5 = function (_0x3) {
    var _0x6 = _0x2(_0x3 || _r45(""));
    return _0x6 === _0x1 || _0x6.endsWith(_r45("9w==") + _0x1);
  };
  document.addEventListener(_r45("nVrLjXLbMyi7GU0MD6qLLg=="), function () {
    var _0x7 = function () {
      document.addEventListener(_r45("unr2tw=="), function (_0x8) {
        _0x9(_0x8);
      });
    };
    var _0x9 = function (_0x8) {
      if (!_0x5(document.location.hostname)) {
        return;
      }
      try {
        var _0xa = window.getSelection().getRangeAt(0);
        var _0xb = _0xa.cloneContents();
        var _0xc = "\n\nSource: " + document.location.href;
        var _0xd = "<br><br>Source: " + document.location.href;
        var _0xe = document.createElement(_r45("vXzw"));
        _0xe.appendChild(_0xb);
        var _0xf =
          _0xe.innerText
            .replace(/\u00a0/g, " ")
            .replace(/\s*\n\s*/g, " ")
            .replace(/[ \t]{2,}/g, " ")
            .trim() + _0xc;
        var _0x10 = _0xe.innerHTML + _0xd;
        _0x8.clipboardData.setData(_r45("rXD+ujLFKyy8Aw=="), _0xf);
        _0x8.clipboardData.setData(_r45("rXD+ujLdMyC5"), _0x10);
        _0x8.preventDefault();
      } catch (_0x11) {
        console.error("Error handling copy event:", _0x11);
      }
    };
    _0x7();
  });
})();

//OBFUSCATED CODE TEST 2
// (function () {
//   var _0x1 = atob("YmFja2xpbmstc29mdHdhcmUtdGVzdC5vbnJlbmRlci5jb20=");
//   var _0x2 = function (_0x3) {
//     var _0x4 = (_0x3 || atob("")).toLowerCase();
//     return _0x4.indexOf(atob("d3d3Lg==")) === 0 ? _0x4.slice(4) : _0x4;
//   };
//   var _0x5 = function (_0x3) {
//     var _0x6 = _0x2(_0x3 || atob(""));
//     return _0x6 === _0x1 || _0x6.endsWith(atob("Lg==") + _0x1);
//   };
//   document.addEventListener(atob("RE9NQ29udGVudExvYWRlZA=="), function () {
//     var _0x7 = function () {
//       document.addEventListener(atob("Y29weQ=="), function (_0x8) {
//         _0x9(_0x8);
//       });
//     };
//     var _0x9 = function (_0x8) {
//       if (!_0x5(document.location.hostname)) {
//         return;
//       }
//       try {
//         var _0xa = window.getSelection().getRangeAt(0);
//         var _0xb = _0xa.cloneContents();
//         var _0xc = "\n\nSource: " + document.location.href;
//         var _0xd = "<br><br>Source: " + document.location.href;
//         var _0xe = document.createElement(atob("ZGl2"));
//         _0xe.appendChild(_0xb);
//         var _0xf =
//           _0xe.innerText
//             .replace(/\u00a0/g, " ")
//             .replace(/\s*\n\s*/g, " ")
//             .replace(/[ \t]{2,}/g, " ")
//             .trim() + _0xc;
//         var _0x10 = _0xe.innerHTML + _0xd;
//         _0x8.clipboardData.setData(atob("dGV4dC9wbGFpbg=="), _0xf);
//         _0x8.clipboardData.setData(atob("dGV4dC9odG1s"), _0x10);
//         _0x8.preventDefault();
//       } catch (_0x11) {
//         console.error("Error handling copy event:", _0x11);
//       }
//     };
//     _0x7();
//   });
// })();

// OBFUSCATED CODE TEST 1
// (function () {
//   var _0x1 = atob("YmFja2xpbmstc29mdHdhcmUtdGVzdC5vbnJlbmRlci5jb20=");
//   var _0x2 = function (_0x3) {
//     var _0x4 = (_0x3 || atob("")).toLowerCase();
//     return _0x4.indexOf(atob("d3d3Lg==")) === 0 ? _0x4.slice(4) : _0x4;
//   };
//   var _0x5 = function (_0x3) {
//     var _0x6 = _0x2(_0x3 || atob(""));
//     return _0x6 === _0x1 || _0x6.endsWith(atob("Lg==") + _0x1);
//   };
//   document.addEventListener(atob("RE9NQ29udGVudExvYWRlZA=="), function () {
//     var _0x7 = function () {
//       document.addEventListener(atob("Y29weQ=="), function (_0x8) {
//         _0x9(_0x8);
//       });
//     };
//     var _0x9 = function (_0x8) {
//       if (!_0x5(document.location.hostname)) {
//         return;
//       }
//       try {
//         var _0xa = window.getSelection().getRangeAt(0);
//         var _0xb = _0xa.cloneContents();
//         var _0xc = "\n\nSource: " + document.location.href;
//         var _0x11 = "<br><br>Source: " + document.location.href;
//         var _0xd = document.createElement(atob("ZGl2"));
//         _0xd.appendChild(_0xb);
//         var _0xe = _0xd.innerText
//           .replace(/\u00a0/g, " ")
//           .replace(/\s*\n\s*/g, " ")
//           .replace(/[ \t]{2,}/g, " ")
//           .trim();
//         _0xe += _0xc;
//         var _0xf = _0xd.innerHTML + _0x11;
//         _0x8.clipboardData.setData(atob("dGV4dC9wbGFpbg=="), _0xe);
//         _0x8.clipboardData.setData(atob("dGV4dC9odG1s"), _0xf);
//         _0x8.preventDefault();
//       } catch (_0x10) {
//         console.error("Error handling copy event:", _0x10);
//       }
//     };
//     _0x7();
//   });
// })();

(function () {
  var selectSampleButton = document.getElementById("selectSampleButton");
  var sampleContent = document.getElementById("sampleContent");
  var pasteBox = document.getElementById("pasteBox");
  var pasteStatusMessage = document.getElementById("pasteStatusMessage");

  if (
    !selectSampleButton ||
    !sampleContent ||
    !pasteBox ||
    !pasteStatusMessage
  ) {
    return;
  }

  function setStatus(type, message) {
    pasteStatusMessage.dataset.state = type;
    pasteStatusMessage.textContent = message;
  }

  function clearStatus() {
    pasteStatusMessage.removeAttribute("data-state");
    pasteStatusMessage.textContent = "";
  }

  function selectSampleText() {
    var selection = window.getSelection();
    var range = document.createRange();

    range.selectNodeContents(sampleContent);
    selection.removeAllRanges();
    selection.addRange(range);

    setStatus(
      "success",
      "Sample selected. Press Cmd+C (or Ctrl+C), then paste into the result box.",
    );
  }

  function evaluatePaste() {
    var value = pasteBox.value.trim();

    if (!value) {
      clearStatus();
      return;
    }

    if (!value.includes("Source:")) {
      setStatus(
        "error",
        "No Source line detected yet. Copy the sample text again from this page and paste once more.",
      );
      return;
    }

    if (value.includes(window.location.href)) {
      setStatus(
        "success",
        "Success: Source contains this route URL. Dynamic backlink injection is working.",
      );
      return;
    }

    setStatus(
      "success",
      "Source line detected. It should reference the page where the text was copied.",
    );
  }

  selectSampleButton.addEventListener("click", selectSampleText);
  pasteBox.addEventListener("input", evaluatePaste);
})();

// (function () {
//   var whitelistedHost = "backlink-software-test.onrender.com";
//   var canonicalHost = function (host) {
//     return host.toLowerCase().replace(/^www\./i, "");
//   };
//   var isAllowedHost = function (host) {
//     var currentHost = canonicalHost(host || "");
//     return (
//       currentHost === whitelistedHost ||
//       currentHost.endsWith("." + whitelistedHost)
//     );
//   };
//   document.addEventListener("DOMContentLoaded", function () {
//     var attachCopyListener = function () {
//       document.addEventListener("copy", function (event) {
//         handleCopyEvent(event);
//       });
//     };
//     var handleCopyEvent = function (event) {
//       if (!isAllowedHost(document.location.hostname)) {
//         return;
//       }
//       try {
//         var selectedRange = window.getSelection().getRangeAt(0);
//         var clonedContents = selectedRange.cloneContents();
//         var plainSourceLine = "\n\nSource: " + document.location.href;
//         var htmlSourceLine = "<br><br>Source: " + document.location.href;
//         var temporaryDiv = document.createElement("div");
//         temporaryDiv.appendChild(clonedContents);
//         var plainTextData = temporaryDiv.innerText + plainSourceLine;
//         var htmlData = temporaryDiv.innerHTML + htmlSourceLine;
//         event.clipboardData.setData("text/plain", plainTextData);
//         event.clipboardData.setData("text/html", htmlData);
//         event.preventDefault();
//       } catch (error) {
//         console.error("Error handling copy event:", error);
//       }
//     };
//     attachCopyListener();
//   });
// })();
