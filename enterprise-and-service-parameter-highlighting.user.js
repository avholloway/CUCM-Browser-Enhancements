// ==UserScript==
// @name         CUCM Enterprise Parameter Highlighting
// @namespace    http://avholloway.com/
// @version      0.1
// @description  Enhance your CUCM browsing
// @author       Anthony Holloway (avholloway@gmail.com)
// @match        https://*/ccmadmin/enterpriseParamEdit.do*
// @match        https://*/ccmadmin/serviceParamEdit.do*
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  console.log(`location: ${window.location.pathname}`);

  // Grab all rows on the page which have exactly three columns (param name, param value, default value)
  const rows = $('tr').filter(function(index) { return $('td', this).length === 3});
})();
