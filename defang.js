// Program to de-fang URLS/IPs
// e.g convert www.google.com to www(.)google(.)com

function defangit(fangstring) {
	return fangstring.split('.').join('[.]');
};

const args = process.argv.slice(2);
const fangedString = args[0];

if (!fangedString) {
	console.log("skill issue?");
} else {
	let deFangedString = defangit(fangedString);
	console.log("De-fanged:   ", deFangedString);
};

// s*** code but 



