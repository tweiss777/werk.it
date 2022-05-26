self["webpackHotUpdatewerkit_chrome_extension"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

let oldHref = document.location.href;
const matchUrls = /^https:\/\/www\.linkedin.com\/jobs\/(collections|search).+/;
const jobData = {};

window.onload = function () {
  const config = {
    childList: true,
    subtree: true
  };
  const bodyList = document.querySelector('body');
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (oldHref !== document.location.href) {
        oldHref = document.location.href;
        if (matchUrls.test(oldHref)) scrape();
      }
    });
  });
  scrape();
  observer.observe(bodyList, config);
};

const scrape = event => {
  let timer;

  const check = () => {
    if (document?.querySelector('#job-details').textContent.replace(/\s/g, '').length) {
      clearInterval(timer); //   const card = document.querySelector(
      //     '.jobs-details__main-content > div:first-child'
      //   );

      const activeJob = document.querySelector('.jobs-search-results-list__list-item--active');
      const company = document.querySelector('.jobs-unified-top-card__company-name > a');
      jobData.companyName = company.innerText;
      jobData.companyUrl = activeJob?.querySelector('a[data-control-name="job_card_company_link"]').href;
      jobData.companyLogo = activeJob?.getElementsByTagName('img')[0].src;
      jobData.position = document.querySelector('.t-24').innerText;
      const jobType = document.querySelector('.jobs-unified-top-card__workplace-type')?.innerText;
      jobData.location = document.querySelector('.jobs-unified-top-card__bullet').textContent.trim() + (jobType ? ` (${jobType})` : '');
      jobData.description = document.querySelector('#job-details > span').textContent.trim();
      jobData.source = activeJob?.querySelector('a.job-card-container__link').href.split('?')[0];
    }
  };

  timer = setInterval(check, 120);
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "get") sendResponse({
    got: jobData
  });
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(oldHref, "oldHref", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\pages\\Content\\index.js");
  reactHotLoader.register(matchUrls, "matchUrls", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\pages\\Content\\index.js");
  reactHotLoader.register(jobData, "jobData", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\pages\\Content\\index.js");
  reactHotLoader.register(scrape, "scrape", "D:\\Users\\User\\Documents\\Projects\\ITC\\werk.it\\extension\\src\\pages\\Content\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1d1a379374a37ac2f5eb")
/******/ })();
/******/ 
/******/ /* webpack/runtime/node module decorator */
/******/ (() => {
/******/ 	__webpack_require__.nmd = (module) => {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.868c3b23266832880e90.hot-update.js.map