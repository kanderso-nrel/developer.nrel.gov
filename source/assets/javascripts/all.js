//= require jquery/jquery.js
//= require _vendor/jquery.tableofcontents.js

$(document).ready(function() {
  $('#toc').tableOfContents(document.body, {
    startLevel: 2,
    depth: 2
  });
});
