var tags = ["header", "footer"];
for (var i = 0, tag; tag = tags[i]; i++) {
	document.createElement(tag);
};

var _gauges = _gauges || [];
(function() {
  var t   = document.createElement('script');
  t.type  = 'text/javascript';
  t.async = true;
  t.id    = 'gauges-tracker';
  t.setAttribute('data-site-id', '4e525169613f5d1ce2000003');
  t.src = '//secure.gaug.es/track.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(t, s);
})();
