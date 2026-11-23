/* web-free.site ad loader for static pages (Adsterra placeholders). */
(function () {
  "use strict";
  if (window.__wfAds) return;
  window.__wfAds = 1;
  var C = {
    pop: "https://abscloud.org/1/b071562449a4fbb21de9917a2e4810af",
    social: "https://bauval.org/14/e72fd1fc010185637550ee29361bdc9f",
    native: "https://bauval.org/21/02a8b6a1e82203a7229a83c08a898de8",
    nativeId: "container-02a8b6a1e82203a7229a83c08a898de8",
    smart: "https://araplhn.org/4/d237b6c36e5330912711ab8cebea8feb",
    bannerBase: "https://bauval.org/22/",
    banners: {
      "728x90": "4c1619f74d0072645cc5da333337f98d",
      "468x60": "d78057ea32022e123e4ef8b65f4431d1",
      "300x250": "fd847445faf7afb553a6182d8a80fccb",
      "160x600": "ff3fd4cfb6ac263e9231eb08681e4727",
      "160x300": "f8a9011bf3a6605e8fbfb811e0dce3e8",
      "320x50": "7146f3ce562e180a4aff33c15e4d7334",
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