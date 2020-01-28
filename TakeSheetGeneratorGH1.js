(function(){
var bill = getText("div[aria-label^='Bill title,']>div");
var take = getText("div[aria-label^='Take']>div");
var email = getText("div[aria-label^='Title']>div");
var received = getText("div[aria-label^='Received']>div");
var sentby = getText("div[aria-label^='Submitted by']>div");


var amdStart = getText("div[aria-label^='AMD start']>div");
var amdEnd = getText("div[aria-label^='AMD end']>div");
var ncStart = getText("div[aria-label^='NC start']>div");
var ncEnd = getText("div[aria-label^='NC end']>div");
var nsStart = getText("div[aria-label^='NS start']>div");
var nsEnd = getText("div[aria-label^='NS end']>div");


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
console.log(document.querySelector("div[aria-label^='Files']>div"));

if (document.querySelector("div[aria-label^='Files']>div").textContent == 'Yes'){
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

var star;

if (document.querySelector("div[aria-label^='Star']>div").textContent == 'Yes'){
    star = "Please star &#x2605;"
} else {
    star = "Please <i>do not</i> star"
}

var html = "<html lang='en'><head><meta charset='UTF-8'><title>Amendment Take Sheet</title><style>html{font-family:'Frutiger LT Std',Verdana,Helvetica,Arial,sans-serif;}.center{text-align:center;}.right{text-align:right;}.takeVal{font-size:44pt;}.titleBlock{text-align:center;margin-bottom:20%;}h3{text-align:center;}h4{text-align:center;}.emailTitle{margin-bottom:10%;}.amendsBlock{margin-bottom:20%;}.bigger{font-size:x-large}.tab{margin:0 auto;}}.lastRow{margin-bottom:10px;}.headerBlock{margin-bottom:10%;}</style></head><body><div class='headerBlock'><table width='100%'><colgroup><col width='50%'/><col width='50%'/></colgroup><tbody><tr><td class='paperLabel'></td><td class='right takeLabel'>TAKE</td></tr><tr><td class='paperVal'></td><td class='right takeVal'>" + take + "</td></tr></tbody></table></div><div class='titleBlock'><h3>Amendment Take Sheet</h3><h2>" + bill + "</h2></div><div class='amendsBlock'><h2 class='center'>" + totalamds + " amendment(s) in total</h2><table class='tab'><tbody><tr><td class='bigger center'>Amds = " + amdTotal + "</td></tr><tr><td class='bigger center'>NC = " + ncTotal + "</td></tr><tr><td class='bigger center'>NS = " + nsTotal + "</td></tr></tbody></table><p class='center'>(" + star + ")</p></div><div class='filesBlock'><table width='90%' class='tab'><colgroup><col width='50%'/><col width='50%'/></colgroup><tbody><tr><td colspan='2'><b>See email:</b></td></tr><tr><td colspan='2' class='emailTitle'>" + email + "</td></tr><tr><td colspan='2'>&nbsp;</td></tr><tr><td colspan='2'><b>Attached file(s):</b> " + files + "</td></tr><tr><td colspan='2'>&nbsp;</td></tr><tr><td><b>Received at:</b></td><td><b>Sent by:</b></td></tr><tr><td>" + received + "</td><td>" + sentby + "</td></tr></tbody></table></div></body></body></body></html>";
var myWindow = (window.open("", "", "width=900, height=1050"));
var writeOutput = myWindow.document.write(html);
myWindow.print();
myWindow.document.close();})();
