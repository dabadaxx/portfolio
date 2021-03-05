
// // baffle for logo
const text = baffle('.baffle');
 text.set({
  characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
  speed: 300
 });
 text.start();
 text.reveal(3000);
 text.set(2);

const roleWord = document.querySelectorAll('span.role-change');
const wordsToggle = setKeywordsToggle(roleWord);

function setKeywordsToggle (keywords) {
	let index = 0;
  return setInterval(() => {
  	keywords[index].classList.remove('shown');
    if (++index >= keywords.length) 
    	index = 0;
    keywords[index].classList.add('shown.hover');
  }, 3000);
}