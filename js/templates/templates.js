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
(function() {
window["ContactManager"] = window["ContactManager"] || {};

window["ContactManager"]["contactform.tmpl"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="page-header text-center">' +
((__t = ( isNew ? 'Create' : 'Edit' )) == null ? '' : __t) +
' Contact</h2>\n<form role="form" class="form-horizontal">\n  <div class="form-group">\n    <label class="col-sm-4 control-label">Full name:</label>\n    <div class="col-sm-6">\n      <input type="text" class="form-control" value="' +
__e( name ) +
'">\n    </div>\n  </div>\n  <div class="form-group">\n    <label class="col-sm-4 control-label">Email address:</label>\n    <div class="col-sm-6">\n      <input type="email" class="form-control" value="' +
__e( email ) +
'">\n    </div>\n  </div>\n  <div class="form-group">\n    <label class="col-sm-4 control-label">Telephone number:</label>\n    <div class="col-sm-6">\n      <input type="tel" class="form-control" value="' +
__e( tel ) +
'">\n    </div>\n  </div>\n  <div class="form-group">\n    <div class="col-sm-offset-4 col-sm-3">\n      <button type="submit" class="btn btn-outline btn-lg btn-block">Submit</button>\n    </div>\n    <div class="col-sm-3">\n      <a href="#contacts" class="btn btn-outline btn-lg btn-block">Cancel</a>\n    </div>\n  </div>\n</form>';

}
return __p
}})();