let oldHref = document.location.href;

const matchUrls = /^https:\/\/www\.linkedin.com\/jobs\/(collections|search).+/;
const jobData = {};

window.onload = function () {
  const config = {
    childList: true,
    subtree: true,
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

const scrape = (event) => {
  let timer;
  const check = () => {
    if (
      document?.querySelector('#job-details').textContent.replace(/\s/g, '')
        .length
    ) {
      clearInterval(timer);
      //   const card = document.querySelector(
      //     '.jobs-details__main-content > div:first-child'
      //   );


      const activeJob = document.querySelector(
        '.jobs-search-results-list__list-item--active'
      );

      const company = document.querySelector(
        '.jobs-unified-top-card__company-name > a'
      );

      jobData.companyName = company.innerText;

      jobData.companyUrl = activeJob?.querySelector(
        'a[data-control-name="job_card_company_link"]'
      ).href;

      jobData.companyLogo = activeJob?.getElementsByTagName('img')[0].src;

      jobData.position = document.querySelector('.t-24').innerText;

      const jobType = document.querySelector(
        '.jobs-unified-top-card__workplace-type'
      )?.innerText;

      jobData.location =
        document
          .querySelector('.jobs-unified-top-card__bullet')
          .textContent.trim() + (jobType ? ` (${jobType})` : '');

      jobData.description = document
        .querySelector('#job-details > span')
        .textContent.trim();

      jobData.source = activeJob
        ?.querySelector('a.job-card-container__link')
        .href.split('?')[0];
    }
  };
  timer = setInterval(check, 120);
};

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "get")
        sendResponse({got: jobData});
    }
  );
