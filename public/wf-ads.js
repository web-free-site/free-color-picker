/* web-free.site ad loader for static pages (Adsterra placeholders). */
(function () {
  "use strict";
  if (window.__wfAds) return;
  window.__wfAds = 1;
  var C = {
    pop: "https://abscloud.org/1/wf23bplaceholderpopunder00000000",
    social: "https://bauval.org/14/wf23bplaceholdersocialbar0000000",
    native: "https://bauval.org/21/wf23bplaceholdernativebanner0000",
    nativeId: "container-wf23bplaceholdernativebanner0000",
    smart: "https://araplhn.org/4/wf23bplaceholdersmartlink0000000",
    bannerBase: "https://bauval.org/22/",
    banners: {
      "728x90": "wf23bplaceholderbanner728x900000",
      "468x60": "wf23bplaceholderbanner468x600000",
      "300x250": "wf23bplaceholderbanner300x250000",
      "160x600": "wf23bplaceholderbanner160x600000",
      "160x300": "wf23bplaceholderbanner160x300000",
      "320x50": "wf23bplaceholderbanner320x500000",
    },
  };
  var d = document;
  function addScript(src) {
    var s = d.createElement("script");
    s.src = src;
    s.async = true;
    s.setAttribute("data-cfasync", "false");
    d.body.appendChild(s);
  }
  function run() {
    addScript(C.social);
    addScript(C.pop);
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", run);
  else run();
})();