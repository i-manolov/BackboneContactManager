(function() {
window["ContactManager"] = window["ContactManager"] || {};

window["ContactManager"]["contact.tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a class="btn contact">\n    <div class="contact-header" style="background-color:' +
((__t = ( groupColor )) == null ? '' : __t) +
'"></div>\n    <div class="img-div">\n        <img src="/img/' +
__e( photo ) +
'" class="contact-image img-circle">\n    </div>\n    <div class="contact-name">\n        <h4> ' +
((__t = ( name )) == null ? '' : __t) +
'</h4>\n    </div>\n    <div class=\'contact-info\'> \n        <div style="float:right;">\n            <button type="button" class="btn btn-primary editBtn" title="Edit">\n                <span class="glyphicon glyphicon-edit bigger-glyphicon"></span>\n            </button>\n            <button type="button" class="btn btn-danger deleteBtn" title="Delete">\n                <span class="glyphicon glyphicon-trash bigger-glyphicon"></span>\n            </button>\n        </div>\n        <br><br>\n        <span class=\'glyphicon glyphicon-info-sign icon-black\'></span>\n        <label>' +
((__t = ( group )) == null ? '' : __t) +
'</label>\n        <br>\n        <span class="glyphicon glyphicon-map-marker icon-black"></span>\n        <label>' +
((__t = ( address )) == null ? '' : __t) +
'</label>\n        <br>\n        <span class="glyphicon glyphicon-envelope icon-black"></span>\n        <label>' +
((__t = ( email )) == null ? '' : __t) +
'</label>\n        <br>\n        <span class="glyphicon glyphicon-earphone icon-black"></span>\n        <label>' +
((__t = ( phone )) == null ? '' : __t) +
'</label>\n    </div>\n</a>';

}
return __p
}})();