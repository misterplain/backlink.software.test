(function () {
  var _0x1 = atob("YmFja2xpbmstc29mdHdhcmUtdGVzdC5vbnJlbmRlci5jb20=");
  var _0x2 = function (_0x3) {
    var _0x4 = (_0x3 || atob("")).toLowerCase();
    return _0x4.indexOf(atob("d3d3Lg==")) === 0 ? _0x4.slice(4) : _0x4;
  };
  var _0x5 = function (_0x3) {
    var _0x6 = _0x2(_0x3 || atob(""));
    return _0x6 === _0x1 || _0x6.endsWith(atob("Lg==") + _0x1);
  };
  document.addEventListener(atob("RE9NQ29udGVudExvYWRlZA=="), function () {
    var _0x7 = function () {
      document.addEventListener(atob("Y29weQ=="), function (_0x8) {
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
        var _0xc = " Source: " + document.location.href;
        var _0xd = document.createElement(atob("ZGl2"));
        _0xd.appendChild(_0xb);
        var _0xe = _0xd.innerText + _0xc;
        var _0xf = _0xd.innerHTML + "" + _0xc + "";
        _0x8.clipboardData.setData(atob("dGV4dC9wbGFpbg=="), _0xe);
        _0x8.clipboardData.setData(atob("dGV4dC9odG1s"), _0xf);
        _0x8.preventDefault();
      } catch (_0x10) {
        console.error("Error handling copy event:", _0x10);
      }
    };
    _0x7();
  });
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
//         var sourceLink = " Source: " + document.location.href;
//         var temporaryDiv = document.createElement("div");
//         temporaryDiv.appendChild(clonedContents);
//         var plainTextData = temporaryDiv.innerText + sourceLink;
//         var htmlData = temporaryDiv.innerHTML + "" + sourceLink + "";
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
