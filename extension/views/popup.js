'use strict';





let url = chrome.extension.getBackgroundPage()
// list of urls to navigate
let urls_list = [
	'https://website.com/page-1',
	'https://website.com/page-2',
	'https://website.com/page-3',
	'https://website.com/page-4',
	'https://website.com/page-5',
];



scrape.onclick = function() {
	chrome.tabs.query({active:true},function(tabs){
		let tab = tabs[0]
		chrome.scripting.executeScript({
			target: {tabId: tab.id},
			function: scrapedata,
		})
	})
}


function scrapedata(event){
	const cards = document.querySelector('.job-card-container')
	let company_logo;
	try{
		company_logo = document.querySelector('.p5').getElementsByTagName('img')[0].src
		console.log(company_logo)
	}
	catch(err){
		console.error(err)
	}

	const company_url = window.location.href
	console.log(company_url)
	const position = document.querySelector('.t-24').innerText;
	console.log(position)
	const company_name = document.querySelector('.jobs-unified-top-card__company-name').innerText
	console.log(company_name)
	const job_desc = document.querySelector('.jobs-box__html-content').innerText
	console.log(job_desc)


}


chrome.tabs.onActivated.addListener( function(activeInfo){
	chrome.tabs.get(activeInfo.tabId, function(tab){
		const y = tab.url; 
		console.log("you are here: "+y);
	});
})();

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
	if (tab.active && change.url) {
		console.log("you are here: "+change.url);           
	}
})();	


// // async function to wait for x seconds 
// async function waitSeconds(seconds) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve();
// 		}, seconds*1000);
// 	});
// }