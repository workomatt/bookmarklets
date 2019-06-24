(function() {

var bill = getText("div[aria-label^='Bill,']>div>div>button");
var take = getText("div[aria-label^='Take']>div>span");
var star = getText("div[aria-label^='Star']>div>span");
var email = getText("div[aria-label^='Title']>div>span");

var amdStart = getText("div[aria-label^='AMD start']>div>span");
var amdEnd = getText("div[aria-label^='AMD end']>div>span");
var ncStart = getText("div[aria-label^='NC start']>div>span");
var ncEnd = getText("div[aria-label^='NC end']>div>span");
var nsStart = getText("div[aria-label^='NS start']>div>span");
var nsEnd = getText("div[aria-label^='NS end']>div>span");



function getText(query){
	var element = document.querySelector(query);
	var elementText;
	try{
		elementText = element.textContent;
	} catch(e) {
		return '';
	}
	return elementText;
}

var amdTotal;

if (Number(amdStart) == 0) { 
	amdTotal = 0;
 } else  
	if (Number(amdEnd) == 0) {
		amdTotal = 1;
	}
	else {
	amdTotal = Number(amdEnd) - Number(amdStart) + 1;
}

var ncTotal;

if (Number(ncStart) == 0) {
    ncTotal = 0;
} else 
    if (Number(ncEnd) == 0) {
        ncTotal = 1;
    }
    else {
        ncTotal = Number(ncEnd) - Number(ncStart) + 1;
    }

var nsTotal;

if (Number(nsStart) == 0) {
    nsTotal = 0;
} else
    if(Number(nsEnd) == 0) {
        nsTotal = 1;
    }
    else {
        nsTotal = Number(nsEnd) - Number(nsStart) + 1;
    }

var files;
console.log(document.querySelector("div[aria-label^='Files']>div>span"));

if (document.querySelector("div[aria-label^='Files']>div>span").textContent == 'Yes'){
	files = '';
	var attachments =  document.querySelectorAll("div.ReactFieldEditor-Attachments-Renderer>a");
	console.log(attachments);
	for (var i = 0; i < attachments.length; i++) {
		// get text content
		files += ' <br/> ' + attachments[i].textContent;
		// chage the href to not have ?web=1
	}
} else {
	files = 'N/A';
}

var totalamds = Number(amdTotal) + Number(ncTotal) + Number(nsTotal);

var html = "<html lang='en'><head><meta charset='UTF-8'><title>Amendment Take Sheet</title><style>html{font-family:'Frutiger LT Std',Verdana,Helvetica,Arial,sans-serif;font-size:x-large;}.container{width:90%;margin:auto;}h2{text-align:center;font-size:xx-large;padding-bottom:15%;}.left{float:left;}.right{float:right;}.right > strong{font-size:xx-large}.clear{clear:both;}.bill{padding-bottom:15%;}.amds{padding-bottom:15%;}</style></head><body><table><tbody><tr><td>Paper</td><td>Take</td></tr><tr><td></td><td>" + take + "</td></tr><tr><td><h2>Amendment Take Sheet</td></tr><tr><td><h3>" + bill + "</h3></td></tr><tr><td>Total Amendments: " + totalamds + "</td><td>&nbsp;</td></tr><tr><td>NC = " + ncTotal + "</td><td></td></tr><tr><td>NS = " + nsTotal + "</td><td></td></tr><tr><td>AMD = " + amdTotal + "</td><td>Star? " + star + "</td></tr><tr><td>See email titled: " + email + "</td></tr><tr><td>Received at: </td><td>Sent by:</td></tr><tr><td>File name(s): " + files + "</td></tr></tbody></table></body></html>";
var myWindow = (window.open("", "", "width=900, height=1050"));
var writeOutput = myWindow.document.write(html);
myWindow.print();
myWindow.document.close();}();
