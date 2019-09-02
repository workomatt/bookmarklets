(function(){
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var msg_title = document.querySelector('div[aria-label^="Title Required Field"]>div.od-FieldRenderer-text').textContent;
var msg_body = document.querySelector('div[aria-label^="Message body"]>div>div.od-FieldRenderer-text>div>div');
var msg_style = document.querySelector('div[aria-label^="Message body"]>div>div.od-FieldRenderer-text>div>style');
var msg_guid = document.querySelector('div[aria-label^="Message body"]>div>div.od-FieldRenderer-text>div');

var guid_attr = msg_guid.getAttribute('class');
var guid_val = guid_attr.replace('ExternalClass','');
	//re = new RegExp(guid_val, "g");

var str_body = msg_body.outerHTML;
var str_style = msg_style.outerHTML;

var clean_style = str_style.replaceAll(guid_val, '');


var html = "<html lang='en'><head><meta charset='UTF-8'><title>Message Body</title>" + clean_style + "</head><body><h1 style=\"font-family:'Frutiger LT Std',Verdana,Helvetica,Arial,sans-serif;font-size:x-large;\">" + msg_title +  "</h1>" + str_body + "</body></html>";

var myWindow = (window.open("", "", "width=900, height=1050"));
var writeOutput = myWindow.document.write(html);
myWindow.print();
myWindow.document.close();
})();
