let page_title = document.title,
	page_h1_tag = '';
const header2 = document.getElementsByTagName('h2');
console.log(header2)
// prepare JSON data with page title & first h1 tag
let data = JSON.stringify({ title: page_title, h1: page_h1_tag });

// send message back to popup script
chrome.runtime.sendMessage(null, data);