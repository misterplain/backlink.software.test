(function () {
  var whitelistedHost = "backlink-software-test.onrender.com";
  var canonicalHost = function (host) {
    return host.toLowerCase().replace(/^www\./i, "");
  };
  var isAllowedHost = function (host) {
    var currentHost = canonicalHost(host || "");
    return (
      currentHost === whitelistedHost ||
      currentHost.endsWith("." + whitelistedHost)
    );
  };
  document.addEventListener("DOMContentLoaded", function () {
    var attachCopyListener = function () {
      document.addEventListener("copy", function (event) {
        handleCopyEvent(event);
      });
    };
    var handleCopyEvent = function (event) {
      if (!isAllowedHost(document.location.hostname)) {
        return;
      }
      try {
        var selectedRange = window.getSelection().getRangeAt(0);
        var clonedContents = selectedRange.cloneContents();
        var sourceLink = " Source: " + document.location.href;
        var temporaryDiv = document.createElement("div");
        temporaryDiv.appendChild(clonedContents);
        var plainTextData = temporaryDiv.innerText + sourceLink;
        var htmlData = temporaryDiv.innerHTML + "" + sourceLink + "";
        event.clipboardData.setData("text/plain", plainTextData);
        event.clipboardData.setData("text/html", htmlData);
        event.preventDefault();
      } catch (error) {
        console.error("Error handling copy event:", error);
      }
    };
    attachCopyListener();
  });
})();
