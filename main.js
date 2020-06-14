(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- navigation -->\r\n<header id=\"main-header\">\r\n  <nav class=\"navbar navbar-expand-lg fixed-top\">\r\n    <div class=\"container\">\r\n      <a href=\"/\" class=\"navbar-brand\" title=\"Raycille Dimla\">Raycille Dimla</a>\r\n      <!-- <a (click)=\"setTitle( 'Raycille Dimla' )\" routerLink=\"/\" routerLinkActive=\"active\" class=\"navbar-brand\" title=\"Raycille Dimla\">Raycille Dimla</a> -->\r\n      <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarPrimary\" aria-controls=\"navbarPrimary\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"><i class=\"fas fa-ellipsis-v\"></i></span>\r\n      </button>\r\n\r\n      <div class=\"navbar-collapse collapse\" id=\"navbarPrimary\" style=\"\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"menuDropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Playground</a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"menuDropdown\">\r\n              <!-- <span class=\"dropdown-header\">Virtual Intrument</span>\r\n              <a class=\"dropdown-item\" href=\"#\">String (Guitar & Ukulele)</a>\r\n              <div class=\"dropdown-divider\"></div> -->\r\n              <span class=\"dropdown-header\">Generators</span>\r\n              <a class=\"dropdown-item\" (click)=\"setTitle( 'Scale Generator' )\" routerLink=\"/scale-generator\" routerLinkActive=\"active\">Scale Generator</a>\r\n              <a class=\"dropdown-item\" (click)=\"setTitle( 'Tabs Generator' )\" routerLink=\"/tabs-generator\" routerLinkActive=\"active\">Tabs Generator</a>\r\n              <a class=\"dropdown-item\" (click)=\"setTitle( 'Chord Diagram Generator' )\" routerLink=\"/chord-diagram-generator\" routerLinkActive=\"active\">Chord Diagram Generator</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <span class=\"dropdown-header\">Others</span>\r\n              <a href=\"http://omusiclab.com/\" class=\"dropdown-item\" (click)=\"setTitle( 'oMusic Laboratory' )\">oMusic Laboratory</a>\r\n              <!-- <a class=\"dropdown-item\" (click)=\"setTitle( 'Playground' )\" routerLink=\"/playground\" routerLinkActive=\"active\">Elements</a> -->\r\n            </div>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"/timeline\" class=\"nav-link\">Timeline</a>\r\n            <!-- <a (click)=\"setTitle( 'Timeline' )\" routerLink=\"/timeline\" routerLinkActive=\"active\" class=\"nav-link\">Timeline</a> -->\r\n          </li>\r\n        </ul>\r\n        <ul class=\"social-media\">\r\n          <li><a href=\"//www.linkedin.com/in/raycille-dimla/\" title=\"linkedin\"><i class=\"fab fa-linkedin\"></i></a></li>\r\n          <li><a href=\"//www.facebook.com/raycilledimla/\" title=\"facebook\"><i class=\"fab fa-facebook-square\"></i></a></li>\r\n          <li><a href=\"//github.com/chiedev/\" title=\"github\"><i class=\"fab fa-github-square\"></i></a></li>\r\n          <li><a href=\"//codepen.io/chiedevdimla/\" title=\"codepen\"><i class=\"fab fa-codepen\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  <!-- </nav>\r\n  <nav class=\"navbar navbar-inverse fixed-top\">\r\n    <div class=\"container\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarPrimaryMenu\" aria-controls=\"navbarPrimaryMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarPrimaryMenu\">\r\n          <ul class=\"navbar-nav menu\">\r\n            <li class=\"nav-item active\"><a href=\"/\">Home</a></li>\r\n            <li class=\"nav-item\"><a href=\"/timeline\">Timeline</a></li>\r\n            <li class=\"nav-item\"><a href=\"/playground\">Playground</a></li>\r\n          </ul>\r\n        </div>\r\n      <div class=\"navbar-right\">\r\n        <ul class=\"social-media\">\r\n          <li><a href=\"//www.linkedin.com/in/raycille-dimla/\"><i class=\"fab fa-linkedin\"></i></a></li>\r\n          <li><a href=\"//www.facebook.com/raycilledimla/\"><i class=\"fab fa-facebook-square\"></i></a></li>\r\n          <li><a href=\"//github.com/chiedev/\"><i class=\"fab fa-github-square\"></i></a></li>\r\n          <li><a href=\"//codepen.io/chiedevdimla/\"><i class=\"fab fa-codepen\"></i></a></li>\r\n        </ul>\r\n      </div>\r\n    </div> -->\r\n  </nav><!-- end of navigation -->\r\n</header>\r\n\r\n<div id=\"main-content\">\r\n  <div class=\"loading\">\r\n    <div class=\"content\">\r\n    </div>\r\n  </div>\r\n\r\n  <router-outlet></router-outlet>\r\n  <!-- <app-main-frame></app-main-frame> -->\r\n</div><!-- end of #main-content -->\r\n\r\n<footer id=\"main-footer\" class=\"container-fluid\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-4 left\">\r\n        <p>Portfolio version 1.9.5 since 2017 | All Rights Reserved. | 2020 &copy; <br>\r\n        Free website quotation? You may send a message at <a href=\"emailto:developer@chiedimla.com\">developer@chiedimla.com</a></p>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-4 center\">\r\n        <p>\r\n          <a href=\"/timeline\">Timeline</a> \r\n          <!-- <a (click)=\"setTitle( 'Timeline' )\" routerLink=\"/timeline\" routerLinkActive=\"active\">Timeline</a>  -->\r\n          <a (click)=\"setTitle( 'Privacy Policy' )\" routerLink=\"/privacy-policy\" routerLinkActive=\"active\">Privacy Policy</a> \r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-4 right\">\r\n        <p>“Others inspire us, information feeds us, practice improves our performance, but we need quiet time to figure things out, to emerge with new discoveries, to unearth original answers.”\r\n          <br> ~ Ester Bucholz</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chord-diagram-generator/chord-diagram-generator.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chord-diagram-generator/chord-diagram-generator.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid page white-bg\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h3>Chord Diagram Generator</h3>\r\n        <p>A simple guitar & ukulele chord diagram generator</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container white-container\">\r\n    <div class=\"row\">\r\n      <iframe width=\"100%\" height=\"600\" src=\"//musictools.chiedimla.com/chord-diagram-generator\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parallax-container\" style=\"height: unset;\">\r\n  <div class=\"parallax\" style=\"position: relative;\">\r\n    <img src=\"/assets/images/bg.jpg\" alt=\"parallax-background\">\r\n  </div>\r\n\r\n  <div class=\"container page\">\r\n    <pre style=\"max-width: 300px; margin: auto; margin-bottom: 5%;\">\r\n    <img width=\"100%\" style=\"\" src=\"/assets/images/profile.png\">\r\n\r\n    Raycille Dimla\r\n    | Female\r\n    | Web Developer\r\n    | Manila, Philippines\r\n\r\n    Be classy with a little bit of hood and a lot of universe in you.\r\n\r\n    </pre>\r\n\r\n    <!-- <pre style=\"max-width: 300px; text-align: center; margin: auto;\">\r\n      UNDER CONSTRUCTION\r\n      <div class=\"progress\">\r\n        <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 60%;\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\">60%</div>\r\n      </div>\r\n    </pre> -->\r\n\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-frame/main-frame.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-frame/main-frame.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<iframe src=\"{{mainFrameSRC}}\" width=\"100%\" height=\"100%\"></iframe>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playground/playground.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playground/playground.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid page white-bg\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h4>Welcome to my playground!</h4>\r\n        <p>This page will contain frontend development stuff. Will keep this updated! :)</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <script async src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>\r\n  <!-- Portfolio Ads -->\r\n  <ins class=\"adsbygoogle\"\r\n      style=\"display:block\"\r\n      data-ad-client=\"ca-pub-9162519796594234\"\r\n      data-ad-slot=\"6550251279\"\r\n      data-ad-format=\"auto\"\r\n      data-full-width-responsive=\"true\"></ins>\r\n  <script>\r\n      (adsbygoogle = window.adsbygoogle || []).push({});\r\n  </script>\r\n\r\n  <div class=\"container white-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n          <h3>Basic Elements</h3>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6 center\">\r\n        <h6 class=\"left\">Icons - Circle</h6>\r\n        <ul>\r\n          <li class=\"icon circular\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></li>\r\n          <li class=\"icon circular\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></li>\r\n          <li class=\"icon circular\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></li>\r\n        </ul>\r\n        <ul>       \r\n          <li class=\"icon circular invert\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></li>\r\n          <li class=\"icon circular invert\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></li>\r\n          <li class=\"icon circular invert\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6 center\">\r\n          <h6 class=\"left\">Icons - Square</h6>\r\n          <ul>\r\n            <li class=\"icon square\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></li>\r\n            <li class=\"icon square\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></li>\r\n            <li class=\"icon square\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></li>\r\n          </ul>\r\n          <ul>\r\n            <li class=\"icon square invert\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></li>\r\n            <li class=\"icon square invert\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></li>\r\n            <li class=\"icon square invert\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-6 center\">\r\n        <h6 class=\"left\">Buttons</h6>\r\n        <ul>\r\n          <li><button class=\"button\">button</button>\r\n          <button class=\"button-2\">button-2</button>\r\n          <button class=\"button-3\">button-3</button></li>\r\n          <li><button class=\"button-4\">button-4</button>\r\n          <button class=\"button-5\">button-5</button>\r\n          <button class=\"button-6\">button-6</button></li>\r\n          <li><button class=\"button-7\">button-7</button>\r\n          <button class=\"button-8\">button-8</button>\r\n          <button class=\"button-9\">button-9</button></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <h6>Switch</h6>\r\n        <iframe height='265' scrolling='no' title='Switch' src='//codepen.io/chiedevdimla/embed/NEvjYz/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/chiedevdimla/pen/NEvjYz/'>Switch</a> by Chie Dev (<a href='https://codepen.io/chiedevdimla'>@chiedevdimla</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n          <h6>Gear Rotation | SVG Animation</h6>\r\n          <iframe height=\"265\" style=\"width: 100%;\" scrolling=\"no\" title=\"Gear Rotation | SVG Animation\" src=\"//codepen.io/chiedevdimla/embed/QoXQRW/?height=265&theme-id=0&default-tab=html,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">\r\n            See the Pen <a href='https://codepen.io/chiedevdimla/pen/QoXQRW/'>Gear Rotation | SVG Animation</a> by Chie Dev\r\n            (<a href='https://codepen.io/chiedevdimla'>@chiedevdimla</a>) on <a href='https://codepen.io'>CodePen</a>.\r\n          </iframe>\r\n      </div>\r\n      <div class=\"col-sm-12\">\r\n          <h6>4 - Image Polygon Gallery</h6>\r\n          <iframe height=\"265\" style=\"width: 100%;\" scrolling=\"no\" title=\"4 - Image Polygon Gallery\" src=\"https://codepen.io/chiedevdimla/embed/qBEeEgy?height=265&theme-id=dark&default-tab=css,result\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\">\r\n            See the Pen <a href='https://codepen.io/chiedevdimla/pen/qBEeEgy'>4 - Image Polygon Gallery</a> by Chie Dev\r\n            (<a href='https://codepen.io/chiedevdimla'>@chiedevdimla</a>) on <a href='https://codepen.io'>CodePen</a>.\r\n          </iframe>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <!-- <h3>Bootstrap 4 Components Redesigns</h3> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container page black-bg\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <h2>Welcome to Raycille Dimla's Portfolio Site</h2>\n            <p>These terms and conditions outline the rules and regulations for the use of Raycille Dimla's Website.</p>\n            <p>By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Raycille Dimla's website \n            if you do not accept all of the terms and conditions stated on this page.</p>\n            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice\n            and any or all Agreements: \"Client\", \"You\" and \"Your\" refers to you, the person accessing this website\n            and accepting the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\", refers\n            to our Company. \"Party\", \"Parties\", or \"Us\", refers to both the Client and ourselves, or either the Client\n            or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake\n            the process of our assistance to the Client in the most appropriate manner, whether by formal meetings\n            of a fixed duration, or any other means, for the express purpose of meeting the Client's needs in respect\n            of provision of the Company's stated services/products, in accordance with and subject to, prevailing law\n            of Philippines. Any use of the above terminology or other words in the singular, plural,\n            capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p><h2>License</h2>\n            <p>Unless otherwise stated, Raycille Dimla and/or it's licensors own the intellectual property rights for\n            all material on Raycille Dimla. All intellectual property rights are reserved. You may view and/or print\n            pages from https://portfolio.chiedimla.com for your own personal use subject to restrictions set in these terms and conditions.</p>\n            <p>You must not:</p>\n            <ol>\n                <li>Republish material from https://portfolio.chiedimla.com</li>\n                <li>Sell, rent or sub-license material from https://portfolio.chiedimla.com</li>\n                <li>Reproduce, duplicate or copy material from https://portfolio.chiedimla.com</li>\n            </ol>\n            <p>Redistribute content from Raycille Dimla (unless content is specifically made for redistribution).</p>\n\n        <h2>Hyperlinking to our Content</h2>\n            <ol>\n                <li>The following organizations may link to our Web site without prior written approval:\n                    <ol>\n                    <li>Government agencies;</li>\n                    <li>Search engines;</li>\n                    <li>News organizations;</li>\n                    <li>Online directory distributors when they list us in the directory may link to our Web site in the same\n                        manner as they hyperlink to the Web sites of other listed businesses; and</li>\n                    <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls,\n                        and charity fundraising groups which may not hyperlink to our Web site.</li>\n                    </ol>\n                </li>\n            </ol>\n            <ol start=\"2\">\n                <li>These organizations may link to our home page, to publications or to other Web site information so long\n                    as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or\n                    approval of the linking party and its products or services; and (c) fits within the context of the linking\n                    party's site.\n                </li>\n                <li>We may consider and approve in our sole discretion other link requests from the following types of organizations:\n                    <ol>\n                        <li>commonly-known consumer and/or business information sources such as Chambers of Commerce, American\n                            Automobile Association, AARP and Consumers Union;</li>\n                        <li>dot.com community sites;</li>\n                        <li>associations or other groups representing charities, including charity giving sites,</li>\n                        <li>online directory distributors;</li>\n                        <li>internet portals;</li>\n                        <li>accounting, law and consulting firms whose primary clients are businesses; and</li>\n                        <li>educational institutions and trade associations.</li>\n                    </ol>\n                </li>\n            </ol>\n            <p>We will approve link requests from these organizations if we determine that: (a) the link would not reflect\n            unfavorably on us or our accredited businesses (for example, trade associations or other organizations\n            representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed\n            to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from\n            the visibility associated with the hyperlink outweighs the absence of <?=$companyName?>; and (d) where the\n            link is in the context of general resource information or is otherwise consistent with editorial content\n            in a newsletter or similar product furthering the mission of the organization.</p>\n        \n            <p>These organizations may link to our home page, to publications or to other Web site information so long as\n            the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval\n            of the linking party and it products or services; and (c) fits within the context of the linking party's\n            site.</p>\n        \n            <p>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website,\n            you must notify us by sending an e-mail to <a href=\"mailto:developer@chiedimla.com\" title=\"send an email to developer@chiedimla.com\">developer@chiedimla.com</a>.\n            Please include your name, your organization name, contact information (such as a phone number and/or e-mail\n            address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site,\n            and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</p>\n        \n            <p>Approved organizations may hyperlink to our Web site as follows:</p>\n        \n            <ol>\n                <li>By use of our corporate name; or</li>\n                <li>By use of the uniform resource locator (Web address) being linked to; or</li>\n                <li>By use of any other description of our Web site or material being linked to that makes sense within the\n                    context and format of content on the linking party's site.</li>\n            </ol>\n            <p>No use of Raycille Dimla's logo or other artwork will be allowed for linking absent a trademark license\n            agreement.</p>\n        <h2>Iframes</h2>\n            <p>Without prior approval and express written permission, you may not create frames around our Web pages or\n            use other techniques that alter in any way the visual presentation or appearance of our Web site.</p>\n        <h2>Reservation of Rights</h2>\n            <p>We reserve the right at any time and in its sole discretion to request that you remove all links or any particular\n            link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also\n            reserve the right to amend these terms and conditions and its linking policy at any time. By continuing\n            to link to our Web site, you agree to be bound to and abide by these linking terms and conditions.</p>\n        <h2>Removal of links from our website</h2>\n            <p>If you find any link on our Web site or any linked web site objectionable for any reason, you may contact\n            us about this. We will consider requests to remove links but will have no obligation to do so or to respond\n            directly to you.</p>\n            <p>Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness\n            or accuracy; nor do we commit to ensuring that the website remains available or that the material on the\n            website is kept up to date.</p>\n        <h2>Content Liability</h2>\n            <p>We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify\n            and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any\n            page on your Web site or within any context containing content or materials that may be interpreted as\n            libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or\n            other violation of, any third party rights.</p>\n        <h2>Disclaimer</h2>\n            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:</p>\n            <ol>\n            <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>\n            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>\n            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>\n            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>\n            </ol>\n            <p>The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a)\n            are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or\n            in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort\n            (including negligence) and for breach of statutory duty.</p>\n            <p>To the extent that the website and the information and services on the website are provided free of charge,\n            we will not be liable for any loss or damage of any nature.</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-banner parallax-container\">\r\n    <div class=\"parallax\">\r\n      <img src=\"/assets/images/polygon_bg.jpg\" alt=\"polygon-background\">\r\n    </div>\r\n    <img src=\"/assets/images/banner.png\" alt=\"\" class=\"img-banner\">\r\n    <h1>{{title}}</h1>\r\n  </div>\r\n  \r\n  <img src=\"/assets/images/display_picture.png\" alt=\"display-picture\" class=\"display-picture\">\r\n  \r\n  <div class=\"container page black-bg\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <h2>SKILLS</h2>\r\n        <div class=\"skills-container\" >\r\n          <p>HTML</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n            <span class=\"sr-only\">HTML</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>CSS</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n            <span class=\"sr-only\">CSS</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>SASS</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n            <span class=\"sr-only\">SASS</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>Bootstrap 4</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n            <span class=\"sr-only\">Bootstrap 4</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>WordPress</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"80%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 80%\">\r\n            <span class=\"sr-only\">WordPress</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>PSD to HTML</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 100%\">\r\n            <span class=\"sr-only\">PSD to HTML</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>Git</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n            <span class=\"sr-only\">Git</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>PHP (Object-Oriented Programming)</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n            <span class=\"sr-only\">PHP (Object-Oriented Programming)</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>Laravel5 (PHP framework)</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n            <span class=\"sr-only\">Laravel5 (PHP framework)</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>jQuery</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n            <span class=\"sr-only\">jQuery</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>CPanel</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 50%\">\r\n              <span class=\"sr-only\">CPanel</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>Node Package Manager</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 50%\">\r\n              <span class=\"sr-only\">Node Package Manager</span>\r\n            </div>\r\n          </div>\r\n  \r\n          <p>Angular2</p>\r\n          <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 50%\">\r\n            <span class=\"sr-only\">Angular2</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <h2>PROJECTS</h2>\r\n        <div class=\"container\">\r\n          <div class=\"row post-cards\">\r\n            <div class=\"col-sm-12 col-md-6 card-item\">\r\n              <a href=\"https://teagardenskombucha.com.au/\" target=\"_blank\"><img src=\"assets/images/TGK.png\" alt=\"Asuki\" />\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\">Tea Gardens Kombucha</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6 card-item\">\r\n              <a href=\"https://pvgi.ph/\" target=\"_blank\"><img src=\"assets/images/PVGI.png\" alt=\"pvgi\" />\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\">PVGI</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6 card-item\">\r\n              <a href=\"https://vaztech.com.ph/\" target=\"_blank\"><img src=\"assets/images/VAZTECH.png\" alt=\"Vaztech\" />\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\">Vaztech</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6 card-item\">\r\n              <a href=\"https://rayomarine.com/\" target=\"_blank\"><img src=\"assets/images/RAYOMARINE.png\" alt=\"Rayomarine\" />\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\">Rayomarine</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6 card-item\">\r\n              <a href=\"https://www.cimtechnologies.com/\" target=\"_blank\"><img src=\"assets/images/CIM.png\" alt=\"CIM\" />\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\">CIM</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6 card-item\">\r\n              <a href=\"https://asukiscales.com.ph/\" target=\"_blank\"><img src=\"assets/images/ASUKI.png\" alt=\"Asuki\" />\r\n                <div class=\"overlay\">\r\n                  <div class=\"text\">Asuki Weighing Scale</div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/scale-generator/scale-generator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scale-generator/scale-generator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid page white-bg\">\r\n\r\n  <div class=\"fixed-top-250\">\r\n    <iframe width=\"100%\" height=\"250\" src=\"//musictools.chiedimla.com/scale-generator/\" frameborder=\"0\" allowfullscreen></iframe>\r\n  </div>\r\n\r\n  <div class=\"container white-container\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <h3>Guitar & Ukulele Scale Generator</h3>\r\n        <p>Hi, welcome folks!</p>\r\n        <p>Here's my first version of guitar & ukulele scale generator. I hope this tool can help you out generate the scales you desired.</p>\r\n        <p>Thank you and have a blast! :)</p>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 col-md-6\">\r\n        <h4>Features</h4>\r\n        <p>Two switches are available for you to navigate. The scales and notes switch. Scales switch, which will let you hide the complete set of notes for the currently selected scale and leave the 'glowing' set notes which are the notes you can use in constructing guitar/ukulele chord shape. Ie( Chord 'C' has the set of [C,E,G] notes you can use for the chord construction). Notes switch, which will let you show the complete notes from the frets regardless of the selected scale.</p>\r\n        <p>Currently, this tool has 4 available filters :</p>\r\n        <ol>\r\n          <li>String Instruments <span>(<a href=\"https://en.wikipedia.org/wiki/Guitar\">Guitar</a> and <a href=\"https://en.wikipedia.org/wiki/Ukulele\">Ukulele</a>)</span></li>\r\n          <li>Chords</li>\r\n          <li><a href=\"https://en.wikipedia.org/wiki/Chord_names_and_symbols_(popular_music)#Chord_quality\">Qualities</a></li>\r\n          <li><a href=\"https://en.wikipedia.org/wiki/Scale_(music)\">Scales</a></li>\r\n        </ol>\r\n        <p>You can see the full scale details from the status bar at the bottom part of the virtual instrument.</p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs-generator/tabs-generator.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs-generator/tabs-generator.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid page white-bg\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <h3>Tabs Generator</h3>\r\n        <p>A simple guitar & ukulele tabs generator</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container white-container\">\r\n    <div class=\"row\">\r\n      <iframe width=\"100%\" height=\"600\" src=\"//musictools.chiedimla.com/tabs-generator/\" frameborder=\"0\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/timeline.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/timeline.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-banner parallax-container\">\r\n  <div class=\"parallax\">\r\n    <img src=\"/assets/images/polygon_bg.jpg\" alt=\"polygon-background\">\r\n  </div>\r\n  <img src=\"/assets/images/banner.png\" alt=\"\" class=\"img-banner\">\r\n  <h1>{{title}}</h1>\r\n</div>\r\n\r\n<!-- <img src=\"/assets/images/display_picture.png\" alt=\"display-picture\" class=\"display-picture\"> -->\r\n\r\n<div class=\"container page black-bg overlap\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4 overlap\">\r\n      <div class=\"LI-profile-badge\"  data-version=\"v1\" data-size=\"large\" data-locale=\"en_US\" data-type=\"vertical\" data-theme=\"dark\" data-vanity=\"raycille-dimla\"><a class=\"LI-simple-link\" href='https://ph.linkedin.com/in/raycille-dimla?trk=profile-badge'>Raycille Dimla</a></div>\r\n      <div class=\"skills-container\" >\r\n        <p>HTML</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n          <span class=\"sr-only\">HTML</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>CSS</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n          <span class=\"sr-only\">CSS</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>SASS</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n          <span class=\"sr-only\">SASS</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>Bootstrap 4</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"95%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 95%\">\r\n          <span class=\"sr-only\">Bootstrap 4</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>WordPress</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"80%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 80%\">\r\n          <span class=\"sr-only\">WordPress</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>PSD to HTML</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 100%\">\r\n          <span class=\"sr-only\">PSD to HTML</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>Git</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n          <span class=\"sr-only\">Git</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>PHP (Object-Oriented Programming)</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n          <span class=\"sr-only\">PHP (Object-Oriented Programming)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>Laravel5 (PHP framework)</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n          <span class=\"sr-only\">Laravel5 (PHP framework)</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>jQuery</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"60%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 60%\">\r\n          <span class=\"sr-only\">jQuery</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>CPanel</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 50%\">\r\n            <span class=\"sr-only\">CPanel</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>Node Package Manager</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 50%\">\r\n            <span class=\"sr-only\">Node Package Manager</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p>Angular2</p>\r\n        <div class=\"progress\" style=\"height:10px; margin:8px 0;\">\r\n          <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50%\" aria-valuemin=\"0%\" aria-valuemax=\"100%\" style=\"width: 50%\">\r\n          <span class=\"sr-only\">Angular2</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-8 dont-overlap\">\r\n      <h2>WORDPRESS PROJECTS</h2>\r\n      <h3>Tags: Custom theme | Sass | PSD to HTML | Custom Post Types | Customized Theme Settings</h3>\r\n      <div class=\"container\">\r\n        <div class=\"row post-cards\">\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://pvgi.ph/\" target=\"_blank\"><img src=\"assets/images/PVGI.png\" alt=\"pvgi\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">PVGI</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://vaztech.com.ph/\" target=\"_blank\"><img src=\"assets/images/VAZTECH.png\" alt=\"Vaztech\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">Vaztech</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://rayomarine.com/\" target=\"_blank\"><img src=\"assets/images/RAYOMARINE.png\" alt=\"Rayomarine\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">Rayomarine</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://www.cimtechnologies.com/\" target=\"_blank\"><img src=\"assets/images/CIM.png\" alt=\"CIM\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">CIM</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://asukiscales.com.ph/\" target=\"_blank\"><img src=\"assets/images/ASUKI.png\" alt=\"Asuki\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">Asuki Weighing Scale</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://diamondcover.com.au/\" target=\"_blank\"><img src=\"assets/images/diamondcover_thumbnail_optimized.png\" alt=\"Diamond Cover\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">Diamond Cover</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h3>Tags: WordPress Page Builders | Divi | Beaver Builder | Woocommerce | Customized themes</h3>\r\n      <div class=\"container\">\r\n        <div class=\"row post-cards\">\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://teagardenskombucha.com.au/\" target=\"_blank\"><img src=\"assets/images/TGK.png\" alt=\"Asuki\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">Tea Gardens Kombucha</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-sm-12 col-md-6 card-item\">\r\n            <a href=\"https://www.renuvity.com/\" target=\"_blank\"><img src=\"assets/images/renuvity_thumbnail_optimized.jpg\" alt=\"Renuvity Spa\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"text\">Renuvity Spa</div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#video-tabs.container-fluid {\n  background-color: #222;\n  color: #FAFAFA;\n}\n\n#spotify-playlists ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n#spotify-playlists ul li {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGxhcmFnb25cXHd3d1xccG9ydGZvbGlvLmNoaWVkaW1sYS5jb20vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0FDRko7O0FET0U7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSko7O0FES0k7RUFDRSxZQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxufVxyXG4jdmlkZW8tdGFicyB7XHJcbiAgJi5jb250YWluZXItZmx1aWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgIGNvbG9yOiAjRkFGQUZBO1xyXG4gIH1cclxufVxyXG5cclxuI3Nwb3RpZnktcGxheWxpc3RzIHtcclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIjdmlkZW8tdGFicy5jb250YWluZXItZmx1aWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xuICBjb2xvcjogI0ZBRkFGQTtcbn1cblxuI3Nwb3RpZnktcGxheWxpc3RzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI3Nwb3RpZnktcGxheWxpc3RzIHVsIGxpIHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'Portfolio | Raycille Dimla';
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/timeline/timeline.component.ts");
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playground/playground.component */ "./src/app/playground/playground.component.ts");
/* harmony import */ var _scale_generator_scale_generator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scale-generator/scale-generator.component */ "./src/app/scale-generator/scale-generator.component.ts");
/* harmony import */ var _main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-frame/main-frame.component */ "./src/app/main-frame/main-frame.component.ts");
/* harmony import */ var _tabs_generator_tabs_generator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs-generator/tabs-generator.component */ "./src/app/tabs-generator/tabs-generator.component.ts");
/* harmony import */ var _chord_diagram_generator_chord_diagram_generator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chord-diagram-generator/chord-diagram-generator.component */ "./src/app/chord-diagram-generator/chord-diagram-generator.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ "./src/app/privacy-policy/privacy-policy.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'timeline', component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"] },
    { path: 'playground', component: _playground_playground_component__WEBPACK_IMPORTED_MODULE_6__["PlaygroundComponent"] },
    { path: 'scale-generator', component: _scale_generator_scale_generator_component__WEBPACK_IMPORTED_MODULE_7__["ScaleGeneratorComponent"] },
    { path: 'tabs-generator', component: _tabs_generator_tabs_generator_component__WEBPACK_IMPORTED_MODULE_9__["TabsGeneratorComponent"] },
    { path: 'chord-diagram-generator', component: _chord_diagram_generator_chord_diagram_generator_component__WEBPACK_IMPORTED_MODULE_10__["ChordDiagramGeneratorComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"] },
    { path: 'privacy-policy', component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyPolicyComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _playground_playground_component__WEBPACK_IMPORTED_MODULE_6__["PlaygroundComponent"],
                _scale_generator_scale_generator_component__WEBPACK_IMPORTED_MODULE_7__["ScaleGeneratorComponent"],
                _main_frame_main_frame_component__WEBPACK_IMPORTED_MODULE_8__["MainFrameComponent"],
                _tabs_generator_tabs_generator_component__WEBPACK_IMPORTED_MODULE_9__["TabsGeneratorComponent"],
                _chord_diagram_generator_chord_diagram_generator_component__WEBPACK_IMPORTED_MODULE_10__["ChordDiagramGeneratorComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsComponent"],
                _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyPolicyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chord-diagram-generator/chord-diagram-generator.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/chord-diagram-generator/chord-diagram-generator.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nob3JkLWRpYWdyYW0tZ2VuZXJhdG9yL2Nob3JkLWRpYWdyYW0tZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/chord-diagram-generator/chord-diagram-generator.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/chord-diagram-generator/chord-diagram-generator.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChordDiagramGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChordDiagramGeneratorComponent", function() { return ChordDiagramGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ChordDiagramGeneratorComponent = /** @class */ (function () {
    function ChordDiagramGeneratorComponent() {
    }
    ChordDiagramGeneratorComponent.prototype.ngOnInit = function () {
    };
    ChordDiagramGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chord-diagram-generator',
            template: __importDefault(__webpack_require__(/*! raw-loader!./chord-diagram-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chord-diagram-generator/chord-diagram-generator.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./chord-diagram-generator.component.scss */ "./src/app/chord-diagram-generator/chord-diagram-generator.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ChordDiagramGeneratorComponent);
    return ChordDiagramGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var HomeComponent = /** @class */ (function () {
    // title = 'Portfolio | Raycille Dimla';
    // base = '/';
    // og_metas = `<meta property="fb:app_id" content="318138918776445" />
    // <meta property="og:site_name" content="Raycille Dimla"/>
    // <meta property="og:title" content="Raycille Dimla's Portfolio"/>
    // <meta property="og:description" content="Female Web Developer | Philippines"/>
    // <meta property="og:url" content="https://portfolio.chiedimla.com/">
    // <meta property="og:image" content="https://portfolio.chiedimla.com/assets/images/uc_screenshot_compressed.png">
    // <meta property="og:image:alt" content="Web Developer Portfolio">
    // <meta property="og:type" content="website"/>`;
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main-frame/main-frame.component.scss":
/*!******************************************************!*\
  !*** ./src/app/main-frame/main-frame.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tZnJhbWUvbWFpbi1mcmFtZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/main-frame/main-frame.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-frame/main-frame.component.ts ***!
  \****************************************************/
/*! exports provided: MainFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFrameComponent", function() { return MainFrameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MainFrameComponent = /** @class */ (function () {
    function MainFrameComponent() {
        this.mainFrameSRC = 'https://musictools.chiedimla.com/chord-diagram-generator/';
    }
    MainFrameComponent.prototype.ngOnInit = function () {
    };
    MainFrameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-frame',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-frame.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main-frame/main-frame.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main-frame.component.scss */ "./src/app/main-frame/main-frame.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MainFrameComponent);
    return MainFrameComponent;
}());



/***/ }),

/***/ "./src/app/playground/playground.component.scss":
/*!******************************************************!*\
  !*** ./src/app/playground/playground.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h6 {\n  margin: 30px 0;\n}\n\nul {\n  padding: 0;\n  list-style: none;\n}\n\nul li {\n  margin: auto 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWdyb3VuZC9DOlxcbGFyYWdvblxcd3d3XFxwb3J0Zm9saW8uY2hpZWRpbWxhLmNvbS9zcmNcXGFwcFxccGxheWdyb3VuZFxccGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEREk7RUFDSSxpQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDYge1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxudWwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbiAgICB9XHJcbn0iLCJoNiB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG51bCB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG51bCBsaSB7XG4gIG1hcmdpbjogYXV0byAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/playground/playground.component.ts":
/*!****************************************************!*\
  !*** ./src/app/playground/playground.component.ts ***!
  \****************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PlaygroundComponent = /** @class */ (function () {
    function PlaygroundComponent() {
    }
    PlaygroundComponent.prototype.ngOnInit = function () {
    };
    PlaygroundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playground',
            template: __importDefault(__webpack_require__(/*! raw-loader!./playground.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playground/playground.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./playground.component.scss */ "./src/app/playground/playground.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PlaygroundComponent);
    return PlaygroundComponent;
}());



/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/privacy-policy/privacy-policy.component.ts":
/*!************************************************************!*\
  !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
  \************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PrivacyPolicyComponent = /** @class */ (function () {
    function PrivacyPolicyComponent() {
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
    };
    PrivacyPolicyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-privacy-policy',
            template: __importDefault(__webpack_require__(/*! raw-loader!./privacy-policy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./privacy-policy.component.scss */ "./src/app/privacy-policy/privacy-policy.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyPolicyComponent);
    return PrivacyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: left;\n  margin: 30px auto;\n  color: rgba(250, 250, 250, 0.8);\n  width: 100%;\n  font-size: 18px;\n}\nh2:after {\n  content: \"\";\n  display: block;\n  border: solid 1px rgba(250, 250, 250, 0.5);\n  width: 100%;\n  border-radius: 100px;\n  margin-top: 24px;\n}\n.skills-container {\n  margin: auto 15px;\n}\n.post-cards {\n  margin: auto;\n  max-width: 1500px;\n}\n.post-cards .card-item {\n  background-color: #000000;\n  max-height: 300px;\n  overflow: hidden;\n  margin: auto auto 35px auto;\n  padding: 0;\n  border: none;\n  text-align: center;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n}\n.post-cards .card-item img {\n  width: calc(100% - 30px);\n  height: auto;\n  margin: auto;\n  transition: 0.5s ease;\n}\n.post-cards .card-item .overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: calc(100% - 30px);\n  margin: auto;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #2ACAEA;\n}\n.post-cards .card-item:hover img {\n  opacity: 0.5;\n}\n.post-cards .card-item:hover .overlay {\n  opacity: 0.8;\n}\n.post-cards .card-item .text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXGxhcmFnb25cXHd3d1xccG9ydGZvbGlvLmNoaWVkaW1sYS5jb20vc3JjXFxhcHBcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNFTjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNFSjtBRERJO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDR047QURESTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0dOO0FEQU07RUFDSSxZQUFBO0FDRVY7QURBTTtFQUNJLFlBQUE7QUNFVjtBRENJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuNSk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG8gMTVweDtcclxufVxyXG5cclxuLnBvc3QtY2FyZHMge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAuY2FyZC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0byAzNXB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgIH1cclxuICAgIC5vdmVybGF5IHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFDQUVBO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgaW1nIHtcclxuICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICB9XHJcbiAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgIG9wYWNpdHk6IC44O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaDIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmgyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uc2tpbGxzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0byAxNXB4O1xufVxuXG4ucG9zdC1jYXJkcyB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XG59XG4ucG9zdC1jYXJkcyAuY2FyZC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogYXV0byBhdXRvIDM1cHggYXV0bztcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbn1cbi5wb3N0LWNhcmRzIC5jYXJkLWl0ZW0gaW1nIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xufVxuLnBvc3QtY2FyZHMgLmNhcmQtaXRlbSAub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyQUNBRUE7XG59XG4ucG9zdC1jYXJkcyAuY2FyZC1pdGVtOmhvdmVyIGltZyB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5wb3N0LWNhcmRzIC5jYXJkLWl0ZW06aG92ZXIgLm92ZXJsYXkge1xuICBvcGFjaXR5OiAwLjg7XG59XG4ucG9zdC1jYXJkcyAuY2FyZC1pdGVtIC50ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.title = '';
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __importDefault(__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/scale-generator/scale-generator.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/scale-generator/scale-generator.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjYWxlLWdlbmVyYXRvci9zY2FsZS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/scale-generator/scale-generator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/scale-generator/scale-generator.component.ts ***!
  \**************************************************************/
/*! exports provided: ScaleGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleGeneratorComponent", function() { return ScaleGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ScaleGeneratorComponent = /** @class */ (function () {
    function ScaleGeneratorComponent() {
        this.base = '/scale-generator/';
        this.og_metas = "<meta property=\"fb:app_id\" content=\"318138918776445\" />\n  <meta property=\"og:site_name\" content=\"Raycille Dimla\"/>\n  <meta property=\"og:title\" content=\"Raycille Dimla's Portfolio\"/>\n  <meta property=\"og:description\" content=\"Female Web Developer | Philippines\"/>\n  <meta property=\"og:url\" content=\"https://portfolio.chiedimla.com/scale-generator/\">\n  <meta property=\"og:image\" content=\"https://portfolio.chiedimla.com/scale-generator/assets/images/uc_screenshot_compressed.png\">\n  <meta property=\"og:image:alt\" content=\"Scale Generator\">\n  <meta property=\"og:type\" content=\"website\"/>";
    }
    ScaleGeneratorComponent.prototype.ngOnInit = function () {
    };
    ScaleGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scale-generator',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scale-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/scale-generator/scale-generator.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./scale-generator.component.scss */ "./src/app/scale-generator/scale-generator.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ScaleGeneratorComponent);
    return ScaleGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/tabs-generator/tabs-generator.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/tabs-generator/tabs-generator.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYnMtZ2VuZXJhdG9yL3RhYnMtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/tabs-generator/tabs-generator.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tabs-generator/tabs-generator.component.ts ***!
  \************************************************************/
/*! exports provided: TabsGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsGeneratorComponent", function() { return TabsGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TabsGeneratorComponent = /** @class */ (function () {
    function TabsGeneratorComponent() {
    }
    TabsGeneratorComponent.prototype.ngOnInit = function () {
    };
    TabsGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-generator',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tabs-generator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs-generator/tabs-generator.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tabs-generator.component.scss */ "./src/app/tabs-generator/tabs-generator.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TabsGeneratorComponent);
    return TabsGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/timeline/timeline.component.scss":
/*!**************************************************!*\
  !*** ./src/app/timeline/timeline.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  text-align: left;\n  margin: 30px auto;\n  color: rgba(250, 250, 250, 0.8);\n  width: 100%;\n  font-size: 18px;\n}\n\nh3 {\n  margin: 30px auto;\n  padding: 0 14px;\n  font-size: 14px;\n  color: #fafafa;\n  font-weight: normal;\n}\n\nh3:before {\n  content: \"\";\n  display: block;\n  border: solid 1px rgba(250, 250, 250, 0.5);\n  width: 100%;\n  border-radius: 100px;\n  margin-bottom: 24px;\n}\n\n@media only screen and (max-width: 768px) {\n  h2 {\n    text-align: center;\n  }\n\n  h3 {\n    color: #f0f0f0;\n  }\n}\n\n.skills-container {\n  margin: auto 15px;\n}\n\n.post-cards {\n  margin: auto;\n  max-width: 1500px;\n}\n\n.post-cards .card-item {\n  background-color: #000000;\n  max-height: 300px;\n  overflow: hidden;\n  margin-bottom: 30px;\n  padding: 0;\n  border: none;\n  text-align: center;\n  transition: 0.2s;\n  -webkit-transition: 0.2s;\n}\n\n@media only screen and (min-width: 769px) {\n  .post-cards .card-item:last-child, .post-cards .card-item:nth-last-child(2) {\n    margin-bottom: 0;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .post-cards .card-item:last-child {\n    margin-bottom: 0;\n  }\n}\n\n.post-cards .card-item img {\n  width: calc(100% - 30px);\n  height: auto;\n  margin: auto;\n  transition: 0.5s ease;\n}\n\n.post-cards .card-item .overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: calc(100% - 30px);\n  margin: auto;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #2ACAEA;\n}\n\n.post-cards .card-item:hover img {\n  opacity: 0.5;\n}\n\n.post-cards .card-item:hover .overlay {\n  opacity: 0.8;\n}\n\n.post-cards .card-item .text {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.LI-profile-badge {\n  text-align: center;\n  margin: 45px auto;\n}\n\n.overlap {\n  margin-top: -100px;\n  padding-top: 0;\n}\n\n.dont-overlap {\n  margin-top: 100px;\n}\n\n@media only screen and (max-width: 768px) {\n  .dont-overlap {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvQzpcXGxhcmFnb25cXHd3d1xccG9ydGZvbGlvLmNoaWVkaW1sYS5jb20vc3JjXFxhcHBcXHRpbWVsaW5lXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBU0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRExFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FERUE7RUFDRTtJQUNFLGtCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxjQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURBSTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUNFTjs7QURETTtFQUNFO0lBRUUsZ0JBQUE7RUNFUjtBQUNGOztBREFNO0VBQ0U7SUFDRSxnQkFBQTtFQ0VSO0FBQ0Y7O0FEQU07RUFDRSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNFUjs7QURBTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0VSOztBRENRO0VBQ0ksWUFBQTtBQ0NaOztBRENRO0VBQ0ksWUFBQTtBQ0NaOztBREVNO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBR0EsZ0NBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDRko7O0FES0U7RUFDRSxpQkFBQTtBQ0ZKOztBREtFO0VBQ0U7SUFDRSxhQUFBO0VDRko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gICAgY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC44KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMjUwLCAyNTAsIDI1MCwgMC41KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIH1cclxuICBtYXJnaW46IDMwcHggYXV0bztcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjZmFmYWZhO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBjb2xvcjogI2YwZjBmMDtcclxuICB9XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogYXV0byAxNXB4O1xyXG59XHJcblxyXG4ucG9zdC1jYXJkcyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAgIC5jYXJkLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IC4ycztcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OXB4KSB7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkLCBcclxuICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2OHB4KSB7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFDQUVBO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdmVybGF5IHtcclxuICAgICAgICAgICAgb3BhY2l0eTogLjg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuTEktcHJvZmlsZS1iYWRnZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDQ1cHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXAge1xyXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuZG9udC1vdmVybGFwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY4cHgpIHtcclxuICAgIC5kb250LW92ZXJsYXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG4gIH0iLCJoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBjb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjgpO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5oMzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGgzIHtcbiAgICBjb2xvcjogI2YwZjBmMDtcbiAgfVxufVxuLnNraWxscy1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG8gMTVweDtcbn1cblxuLnBvc3QtY2FyZHMge1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTUwMHB4O1xufVxuLnBvc3QtY2FyZHMgLmNhcmQtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAucG9zdC1jYXJkcyAuY2FyZC1pdGVtOmxhc3QtY2hpbGQsIC5wb3N0LWNhcmRzIC5jYXJkLWl0ZW06bnRoLWxhc3QtY2hpbGQoMikge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBvc3QtY2FyZHMgLmNhcmQtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG59XG4ucG9zdC1jYXJkcyAuY2FyZC1pdGVtIGltZyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbn1cbi5wb3N0LWNhcmRzIC5jYXJkLWl0ZW0gLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG1hcmdpbjogYXV0bztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkFDQUVBO1xufVxuLnBvc3QtY2FyZHMgLmNhcmQtaXRlbTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucG9zdC1jYXJkcyAuY2FyZC1pdGVtOmhvdmVyIC5vdmVybGF5IHtcbiAgb3BhY2l0eTogMC44O1xufVxuLnBvc3QtY2FyZHMgLmNhcmQtaXRlbSAudGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLkxJLXByb2ZpbGUtYmFkZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNDVweCBhdXRvO1xufVxuXG4ub3ZlcmxhcCB7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5kb250LW92ZXJsYXAge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZG9udC1vdmVybGFwIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/timeline/timeline.component.ts":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
        this.title = '';
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __importDefault(__webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/timeline/timeline.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./timeline.component.scss */ "./src/app/timeline/timeline.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\portfolio.chiedimla.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map