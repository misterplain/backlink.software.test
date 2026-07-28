//obfuscated code test 7 - production
var _r45k = "9b38001ec1ced5ab7170a78697fa30b9";
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
  var _0x1 = [
    /^backlink-software-test\.onrender\.com$/i,
    /^.*\.backlink-software-test\.onrender\.com$/i,
    /^localhost$/i,
    /^127\.0\.0\.1$/i,
    /^192\.168\.\d{1,3}\.\d{1,3}$/i,
    /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i,
    /^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/i,
    /^::1$/i,
  ];
  var _0x2 = function (_0x3) {
    var _0x4 = (_0x3 || _r45("")).toLowerCase();
    return _0x4.indexOf(_r45("KOZf3Q==")) === 0 ? _0x4.slice(4) : _0x4;
  };
  var _0x5 = function (_0x3) {
    var _0x6 = _0x2(_0x3 || _r45(""));
    return _0x1.some(function (_0x7) {
      return _0x7.test(_0x6);
    });
  };
  var _0x8 = function () {
    var _0x9 = function () {
      document.addEventListener(_r45("PP5Yig=="), function (_0xa) {
        _0xb(_0xa);
      });
    };
    var _0xb = function (_0xa) {
      if (!_0x5(document.location.hostname)) {
        return;
      }
      try {
        var _0xc = window.getSelection();
        if (!_0xc || _0xc.rangeCount === 0 || _0xc.isCollapsed) {
          return;
        }
        var _0xd = _0xc.getRangeAt(0);
        var _0xe = _0xd.cloneContents();
        var _0xf = document.createElement(_r45("O/he"));
        _0xf.appendChild(_0xe);
        var _0x10 = _0xf.querySelectorAll("script,style");
        for (var _0x11 = 0; _0x11 < _0x10.length; _0x11 += 1) {
          if (_0x10[_0x11] && _0x10[_0x11].parentNode) {
            _0x10[_0x11].parentNode.removeChild(_0x10[_0x11]);
          }
        }
        var _0x12 = _0xc.toString();
        if (!_0x12) {
          _0x12 = _0xf.innerText || _0xf.textContent || "";
        }
        _0x12 = _0x12
          .replace(/\u00a0/g, " ")
          .replace(/\s*\n\s*/g, " ")
          .replace(/[ \t]{2,}/g, " ")
          .trim();
        if (!_0x12) {
          return;
        }
        var _0x13 =
          String.fromCharCode(10, 10) + "Source: " + document.location.href;
        var _0x14 = "<br><br>Source: " + document.location.href;
        var _0x15 = _0x12 + _0x13;
        var _0x16 = _0xf.innerHTML + _0x14;
        var _0x17 = false;
        if (_0xa && _0xa.clipboardData && _0xa.clipboardData.setData) {
          _0xa.clipboardData.setData(_r45("K/RQh1lANgW6FA=="), _0x15);
          _0xa.clipboardData.setData(_r45("K/RQh1lYLgm/"), _0x16);
          _0x17 = true;
        }
        if (
          !_0x17 &&
          window.isSecureContext &&
          window.navigator &&
          window.navigator.clipboard &&
          window.navigator.clipboard.writeText
        ) {
          window.navigator.clipboard.writeText(_0x15).catch(function () {});
          _0x17 = true;
        }
        if (_0x17 && _0xa && _0xa.preventDefault) {
          _0xa.preventDefault();
        }
      } catch (_0x18) {
        console.error("Error handling copy event:", _0x18);
      }
    };
    _0x9();
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", _0x8);
  } else {
    _0x8();
  }
})();

//obfuscated code test 6 - local and successful
// var _r45k = "9b4360868558cc1279d9b15aa40650b0";
// var _r45 = function (c) {
//   var b = atob(c);
//   var d = new Uint8Array(b.length);
//   for (var i = 0; i < b.length; i++) {
//     d[i] = b.charCodeAt(i);
//   }
//   var kb;
//   if (window.TextEncoder) {
//     kb = new TextEncoder().encode(_r45k);
//   } else {
//     var ek = unescape(encodeURIComponent(_r45k));
//     kb = new Uint8Array(ek.length);
//     for (var z = 0; z < ek.length; z++) {
//       kb[z] = ek.charCodeAt(z);
//     }
//   }
//   var s = new Uint8Array(256);
//   for (var x = 0; x < 256; x++) {
//     s[x] = x;
//   }
//   var j = 0;
//   for (var y = 0; y < 256; y++) {
//     j = (j + s[y] + kb[y % kb.length]) & 255;
//     var tk = s[y];
//     s[y] = s[j];
//     s[j] = tk;
//   }
//   var i2 = 0;
//   var j2 = 0;
//   for (var n = 0; n < d.length; n++) {
//     i2 = (i2 + 1) & 255;
//     j2 = (j2 + s[i2]) & 255;
//     var tp = s[i2];
//     s[i2] = s[j2];
//     s[j2] = tp;
//     var kk = s[(s[i2] + s[j2]) & 255];
//     d[n] = d[n] ^ kk;
//   }
//   if (window.TextDecoder) {
//     return new TextDecoder().decode(d);
//   }
//   var out = "";
//   for (var m = 0; m < d.length; m++) {
//     out += String.fromCharCode(d[m]);
//   }
//   return decodeURIComponent(escape(out));
// };
// (function () {
//   var _0x1 = [
//     new RegExp(_r45("Sepy/xyhuhJBtRmpiX8="), "i"),
//     new RegExp(_r45("Sac50SbuoS9v/Ru+uAdh528ERw=="), "i"),
//     /^localhost$/i,
//     /^127\.0\.0\.1$/i,
//     /^192\.168\.\d{1,3}\.\d{1,3}$/i,
//     /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i,
//     /^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/i,
//     /^::1$/i,
//   ];
//   var _0x2 = function (_0x3) {
//     var _0x4 = (_0x3 || _r45("")).toLowerCase();
//     return _0x4.indexOf(_r45("YP5kow==")) === 0 ? _0x4.slice(4) : _0x4;
//   };
//   var _0x5 = function (_0x3) {
//     var _0x6 = _0x2(_0x3 || _r45(""));
//     return _0x1.some(function (_0x7) {
//       return _0x7.test(_0x6);
//     });
//   };
//   document.addEventListener(_r45("U8ZezhWutitz7zaphT8q4A=="), function () {
//     var _0x8 = function () {
//       document.addEventListener(_r45("dOZj9A=="), function (_0x9) {
//         _0xa(_0x9);
//       });
//     };
//     var _0xa = function (_0x9) {
//       if (!_0x5(document.location.hostname)) {
//         return;
//       }
//       try {
//         var _0xb = window.getSelection();
//         if (!_0xb || _0xb.rangeCount === 0 || _0xb.isCollapsed) {
//           return;
//         }
//         var _0xc = _0xb.getRangeAt(0);
//         var _0xd = _0xc.cloneContents();
//         var _0xe = document.createElement(_r45("c+Bl"));
//         _0xe.appendChild(_0xd);
//         _0xe.querySelectorAll("script,style").forEach(function (_0xf) {
//           _0xf.remove();
//         });
//         var _0x10 = _0xb
//           .toString()
//           .replace(/\u00a0/g, " ")
//           .replace(/\s*\n\s*/g, " ")
//           .replace(/[ \t]{2,}/g, " ")
//           .trim();
//         if (!_0x10) {
//           return;
//         }
//         var _0x11 =
//           String.fromCharCode(10, 10) + "Source: " + document.location.href;
//         var _0x12 = "<br><br>Source: " + document.location.href;
//         var _0x13 = _0x10 + _0x11;
//         var _0x14 = _0xe.innerHTML + _0x12;
//         _0x9.clipboardData.setData(_r45("Y+xr+VWwri909Q=="), _0x13);
//         _0x9.clipboardData.setData(_r45("Y+xr+VWotiNx"), _0x14);
//         _0x9.preventDefault();
//       } catch (_0x15) {
//         console.error("Error handling copy event:", _0x15);
//       }
//     };
//     _0x8();
//   });
// })();
// Active snippet under test (readable form for deterministic local debugging)
// (function () {
//   var whitelist = [
//     /^carfax\.com$/i,
//     /^.*\.carfax\.com$/i,
//     /^localhost$/i,
//     /^127\.0\.0\.1$/i,
//     /^192\.168\.\d{1,3}\.\d{1,3}$/i,
//     /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i,
//     /^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/i,
//     /^::1$/i,
//   ];

//   function canonicalHost(host) {
//     var normalizedHost = (host || "").toLowerCase();
//     return normalizedHost.indexOf("www.") === 0
//       ? normalizedHost.slice(4)
//       : normalizedHost;
//   }

//   function isAllowedHost(host) {
//     var currentHost = canonicalHost(host || "");
//     return whitelist.some(function (pattern) {
//       return pattern.test(currentHost);
//     });
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     document.addEventListener("copy", function (event) {
//       if (!isAllowedHost(document.location.hostname)) {
//         return;
//       }

//       try {
//         var selection = window.getSelection();
//         if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
//           return;
//         }

//         var selectedRange = selection.getRangeAt(0);
//         var clonedContents = selectedRange.cloneContents();
//         var temporaryDiv = document.createElement("div");
//         temporaryDiv.appendChild(clonedContents);

//         // Never include script/style node content in copied output.
//         temporaryDiv.querySelectorAll("script,style").forEach(function (node) {
//           node.remove();
//         });

//         var selectedText = selection
//           .toString()
//           .replace(/\u00a0/g, " ")
//           .replace(/\s*\n\s*/g, " ")
//           .replace(/[ \t]{2,}/g, " ")
//           .trim();

//         if (!selectedText) {
//           return;
//         }

//         var plainSourceLine = "\n\nSource: " + document.location.href;
//         var htmlSourceLine = "<br><br>Source: " + document.location.href;
//         var plainTextData = selectedText + plainSourceLine;
//         var htmlData = temporaryDiv.innerHTML + htmlSourceLine;

//         event.clipboardData.setData("text/plain", plainTextData);
//         event.clipboardData.setData("text/html", htmlData);
//         event.preventDefault();
//       } catch (error) {
//         console.error("Error handling copy event:", error);
//       }
//     });
//   });
// })();

//Obfuscated code test 4 - with localhost added to whitelist
// var _r45k = "e52eb2191a28859a656422578d2d0339";
// var _r45 = function (c) {
//   var b = atob(c);
//   var d = new Uint8Array(b.length);
//   for (var i = 0; i < b.length; i++) {
//     d[i] = b.charCodeAt(i);
//   }
//   var kb;
//   if (window.TextEncoder) {
//     kb = new TextEncoder().encode(_r45k);
//   } else {
//     var ek = unescape(encodeURIComponent(_r45k));
//     kb = new Uint8Array(ek.length);
//     for (var z = 0; z < ek.length; z++) {
//       kb[z] = ek.charCodeAt(z);
//     }
//   }
//   var s = new Uint8Array(256);
//   for (var x = 0; x < 256; x++) {
//     s[x] = x;
//   }
//   var j = 0;
//   for (var y = 0; y < 256; y++) {
//     j = (j + s[y] + kb[y % kb.length]) & 255;
//     var tk = s[y];
//     s[y] = s[j];
//     s[j] = tk;
//   }
//   var i2 = 0;
//   var j2 = 0;
//   for (var n = 0; n < d.length; n++) {
//     i2 = (i2 + 1) & 255;
//     j2 = (j2 + s[i2]) & 255;
//     var tp = s[i2];
//     s[i2] = s[j2];
//     s[j2] = tp;
//     var kk = s[(s[i2] + s[j2]) & 255];
//     d[n] = d[n] ^ kk;
//   }
//   if (window.TextDecoder) {
//     return new TextDecoder().decode(d);
//   }
//   var out = "";
//   for (var m = 0; m < d.length; m++) {
//     out += String.fromCharCode(d[m]);
//   }
//   return decodeURIComponent(escape(out));
// };
// (function () {
//   var _0x1 = [
//     new RegExp("^carfax\\.com$", "i"),
//     new RegExp("^.*\\.carfax\\.com$", "i"),
//     /^localhost$/i,
//     /^127\.0\.0\.1$/i,
//     /^192\.168\.\d{1,3}\.\d{1,3}$/i,
//     /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/i,
//     /^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/i,
//     /^::1$/i,
//   ];
//   var _0x3 = function (_0x4) {
//     var _0x5 = (_0x4 || _r45("")).toLowerCase();
//     return _0x5.indexOf(_r45("Ri2cTg==")) === 0 ? _0x5.slice(4) : _0x5;
//   };
//   var _0x6 = function (_0x4) {
//     var _0x7 = _0x3(_0x4 || _r45(""));
//     return _0x1.some(function (_0x8) {
//       return _0x8.test(_0x7);
//     });
//   };
//   document.addEventListener(_r45("dRWmI1shgGqpCUxSAgwL8w=="), function () {
//     var _0x9 = function () {
//       document.addEventListener(_r45("UjWbGQ=="), function (_0xa) {
//         _0xb(_0xa);
//       });
//     };
//     var _0xb = function (_0xa) {
//       if (!_0x6(document.location.hostname)) {
//         return;
//       }
//       try {
//         var _0xc = window.getSelection().getRangeAt(0);
//         var _0xd = _0xc.cloneContents();
//         var _0xe = "\n\nSource: " + document.location.href;
//         var _0xf = "<br><br>Source: " + document.location.href;
//         var _0x10 = document.createElement(_r45("VTOd"));
//         _0x10.appendChild(_0xd);
//         var _0x11 =
//           _0x10.innerText
//             .replace(/\u00a0/g, " ")
//             .replace(/\s*\n\s*/g, " ")
//             .replace(/[ \t]{2,}/g, " ")
//             .trim() + _0xe;
//         var _0x12 = _0x10.innerHTML + _0xf;
//         _0xa.clipboardData.setData(_r45("RT+TFBs/mG6uEw=="), _0x11);
//         _0xa.clipboardData.setData(_r45("RT+TFBsngGKr"), _0x12);
//         _0xa.preventDefault();
//       } catch (_0x13) {
//         console.error("Error handling copy event:", _0x13);
//       }
//     };
//     _0x9();
//   });
// })();

//OBFUSCATED CODE TEST 3 - FIRST ATTEMPT R45
// var _r45k = "1bd5500e83de00072c41aa200b39b94f";
// var _r45 = function (c) {
//   var b = atob(c);
//   var d = new Uint8Array(b.length);
//   for (var i = 0; i < b.length; i++) {
//     d[i] = b.charCodeAt(i);
//   }
//   var kb;
//   if (window.TextEncoder) {
//     kb = new TextEncoder().encode(_r45k);
//   } else {
//     var ek = unescape(encodeURIComponent(_r45k));
//     kb = new Uint8Array(ek.length);
//     for (var z = 0; z < ek.length; z++) {
//       kb[z] = ek.charCodeAt(z);
//     }
//   }
//   var s = new Uint8Array(256);
//   for (var x = 0; x < 256; x++) {
//     s[x] = x;
//   }
//   var j = 0;
//   for (var y = 0; y < 256; y++) {
//     j = (j + s[y] + kb[y % kb.length]) & 255;
//     var tk = s[y];
//     s[y] = s[j];
//     s[j] = tk;
//   }
//   var i2 = 0;
//   var j2 = 0;
//   for (var n = 0; n < d.length; n++) {
//     i2 = (i2 + 1) & 255;
//     j2 = (j2 + s[i2]) & 255;
//     var tp = s[i2];
//     s[i2] = s[j2];
//     s[j2] = tp;
//     var kk = s[(s[i2] + s[j2]) & 255];
//     d[n] = d[n] ^ kk;
//   }
//   if (window.TextDecoder) {
//     return new TextDecoder().decode(d);
//   }
//   var out = "";
//   for (var m = 0; m < d.length; m++) {
//     out += String.fromCharCode(d[m]);
//   }
//   return decodeURIComponent(escape(out));
// };
// (function () {
//   var _0x1 = _r45("u3TlpXHcKSb4Hm4FGrmPOC7kV0PZXYpw4Wfiqm5v8isF1tw=");
//   var _0x2 = function (_0x3) {
//     var _0x4 = (_0x3 || _r45("")).toLowerCase();
//     return _0x4.indexOf(_r45("rmLx4A==")) === 0 ? _0x4.slice(4) : _0x4;
//   };
//   var _0x5 = function (_0x3) {
//     var _0x6 = _0x2(_0x3 || _r45(""));
//     return _0x6 === _0x1 || _0x6.endsWith(_r45("9w==") + _0x1);
//   };
//   document.addEventListener(_r45("nVrLjXLbMyi7GU0MD6qLLg=="), function () {
//     var _0x7 = function () {
//       document.addEventListener(_r45("unr2tw=="), function (_0x8) {
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
//         var _0xe = document.createElement(_r45("vXzw"));
//         _0xe.appendChild(_0xb);
//         var _0xf =
//           _0xe.innerText
//             .replace(/\u00a0/g, " ")
//             .replace(/\s*\n\s*/g, " ")
//             .replace(/[ \t]{2,}/g, " ")
//             .trim() + _0xc;
//         var _0x10 = _0xe.innerHTML + _0xd;
//         _0x8.clipboardData.setData(_r45("rXD+ujLFKyy8Aw=="), _0xf);
//         _0x8.clipboardData.setData(_r45("rXD+ujLdMyC5"), _0x10);
//         _0x8.preventDefault();
//       } catch (_0x11) {
//         console.error("Error handling copy event:", _0x11);
//       }
//     };
//     _0x7();
//   });
// })();

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
