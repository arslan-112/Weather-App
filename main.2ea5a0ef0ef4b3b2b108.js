(()=>{"use strict";var n={523:(n,t,e)=>{e.d(t,{A:()=>g});var r=e(354),o=e.n(r),A=e(314),i=e.n(A),a=e(417),s=e.n(a),c=new URL(e(581),e.b),C=new URL(e(21),e.b),d=new URL(e(941),e.b),l=new URL(e(877),e.b),m=i()(o()),u=s()(c),f=s()(C),B=s()(d),p=s()(l);m.push([n.id,`* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: Arial, sans-serif;\n\tbackground: linear-gradient(to bottom, #061d3b, #29265d);\n}\n@font-face {\n\tfont-family: "sinkin_sans";\n\tsrc:\n\t\turl(${u}) format("woff2"),\n\t\turl(${f}) format("woff");\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: "source_sans";\n\tsrc:\n\t\turl(${B}) format("woff2"),\n\t\turl(${p}) format("woff");\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n.container {\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 20px;\n}\n\n.header-bar {\n\tgrid-column: 1/3;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbackground-color: #233167;\n\tcolor: rgba(255, 255, 255, 0.886);\n\tpadding: 10px 20px;\n\tmargin-left: 1.5rem;\n\tborder-radius: 0.8rem;\n}\n\n.title {\n\tfont-size: 24px;\n\tfont-family: "sinkin_sans";\n}\n\n#search-field {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#search {\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tborder: none;\n\tmargin-right: 10px;\n\tbackground-color: #1d1e4a;\n\tcolor: #e4e4e4;\n}\n#search::placeholder {\n\tcolor: #e4e4e4;\n\tfont-family: "source_sans";\n}\n\n.search-btn {\n\tfont-family: "source_sans";\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #231a4f;\n\tcolor: white;\n\tcursor: pointer;\n\tfont-weight: 700;\n}\n\n.today-main {\n\tcolor: #eee;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-row: auto 1fr;\n\tjustify-content: space-between;\n\tbackground-color: #333481;\n\tborder-radius: 0.8rem;\n\tpadding: 20px;\n\tmargin: 1rem 2rem;\n\tbox-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n.description {\n\tfont-family: "source_sans";\n\tfont-weight: 600;\n\tfont-size: 1.2rem;\n}\n\n.today-main .icon img {\n\twidth: 7rem;\n}\n\n.main-leftdata {\n\tgrid-column: 1/2;\n}\n.main-rightdata {\n\tgrid-column: 2/3;\n\tgrid-row: 1/3;\n\tfont-family: "source_sans";\n\tfont-size: 1.1rem;\n\tfont-weight: 700;\n\tpadding-left: 1rem;\n}\n\n.city {\n\tfont-family: "sinkin_sans";\n\tfont-size: 1.7rem;\n\tfont-weight: bold;\n}\n\n.temperature {\n\tfont-family: "source_sans";\n\tfont-size: 1.8rem;\n\tfont-weight: 700;\n\tpadding-bottom: 0.5rem;\n}\n.conditions {\n\tpadding-bottom: 0.5rem;\n\tfont-size: 1.2rem;\n}\n.seven-days-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: 1rem;\n\tbackground-color: #150d40;\n\tpadding: 1rem;\n\tbox-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 2rem;\n}\n\n.seven-day-title {\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tmargin-bottom: 1.5rem;\n\tcolor: #eee;\n\tfont-family: "sinkin_sans";\n}\n\n.seven-cards {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tjustify-content: space-between;\n\tmargin-bottom: 2rem;\n\tpadding: 10px;\n\tbackground-color: #243b63;\n\tborder-radius: 0.5rem;\n\tcolor: #eee;\n\tfont-weight: 700;\n\ttransition: 0.4s background-color;\n}\n.seven-cards:hover {\n\tbackground-color: #233167;\n}\n#last-card {\n\tmargin-bottom: 1rem;\n}\n\n.seven-icon {\n\tjustify-self: center;\n\talign-self: center;\n}\n.seven-icon img {\n\twidth: 4rem;\n\tgrid-column: 1/2;\n}\n.seven-data {\n\tgrid-column: 2/3;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n.seven-data > .seven-day {\n\tfont-family: "sinkin_sans";\n\tfont-weight: 800;\n\ttext-decoration: underline;\n\tpadding-bottom: 2px;\n}\n\n.today-hours-container {\n\tpadding: 0 2rem;\n}\n\n.today-cards-section {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(20rem, 0.8fr));\n\tgap: 1.5rem;\n\talign-items: stretch;\n\tmargin-top: 0;\n\tmargin-bottom: 20px;\n\tpadding-top: 0;\n}\n\n.today-title {\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n\tcolor: #e4e4e4;\n\tfont-family: "sinkin_sans";\n}\n\n.today-hours-cards {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tposition: relative;\n\tbackground-color: #202c61;\n\tcolor: rgb(37, 65, 109);\n\ttext-align: left;\n\tmin-height: calc(120px + 4vw);\n\tborder-radius: 7px;\n\tbox-shadow: 2px 2px 5px rgba(25, 5, 90, 0.671);\n\ttransition: 0.3s background-color;\n\tcursor: pointer;\n\tpadding: 1rem;\n}\n.today-hours-cards:hover {\n\tbackground-color: #333481;\n}\n\n.today-hours-icon img {\n\twidth: 6rem;\n\tgrid-column: 1/2;\n}\n.today-hours-icon {\n\talign-self: center;\n\tjustify-self: center;\n}\n.hours-data {\n\tfont-family: "source_sans";\n\tgrid-column: 2/3;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tfont-size: 1.3rem;\n\tfont-weight: 700;\n\tcolor: #eee;\n}\n\n.today-hours-time {\n\tfont-size: 2rem;\n}\n@media (min-width: 768px) {\n\t.container {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 300px;\n\t\tgrid-template-rows: auto 1fr;\n\t\tgrid-gap: 20px;\n\t}\n\n\t.today-main {\n\t\tgrid-column: 1 / 2;\n\t}\n\n\t.seven-days-container {\n\t\tmargin-top: 1rem;\n\t\tgrid-column: 2 / 3;\n\t\tgrid-row: 2/4;\n\t}\n\t.today-hours-container {\n\t\tgrid-column: 1/2;\n\t\tgrid-row: 3/4;\n\t}\n\n\t.seven-cards,\n\t.today-hours-cards {\n\t\tjustify-content: space-between;\n\t}\n}\n\n#search-history-container {\n\tmargin-top: 20px;\n\tfont-family: "sinkin_sans";\n}\n\n#search-history {\n\tlist-style-type: none;\n\tpadding: 0;\n}\n\n.search-item {\n\tcursor: pointer;\n\tcolor: rgb(219, 219, 223);\n}\n\n.search-item:hover {\n\tcolor: rgb(255, 255, 255);\n}\n\n#clear-history-btn {\n\tmargin-top: 10px;\n\tpadding: 5px 10px;\n\tbackground-color: rgb(72, 107, 153);\n\tcolor: white;\n\tborder: none;\n\tcursor: pointer;\n\tborder-radius: 10px;\n\tfont-family: "sinkin_sans";\n}\n\n#clear-history-btn:hover {\n\tbackground-color: darkred;\n}\n\n.temperature-toggle {\n\tmargin: 1rem;\n\tpadding: 1rem;\n}\n\n#temp-toggle-btn {\n\tfont-family: "source_sans";\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #231a4f;\n\tcolor: white;\n\tcursor: pointer;\n\tfont-weight: 700;\n}\n\n@media (max-width: 768px) {\n\t.container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\n\t.header-bar {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tmargin: 0;\n\t}\n\t#search-field {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 5px;\n\t}\n\t.search-btn {\n\t\tmargin: 3px;\n\t}\n\t.temperature-toggle {\n\t\tmargin: 2px;\n\t\tpadding: 0;\n\t}\n\n\t.today-main {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t}\n\n\t.seven-days-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tmargin-top: 20px;\n\t}\n\n\t.today-hours-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\tmargin-top: 20px;\n\t}\n\t.today-cards-section {\n\t\tjustify-content: center;\n\t}\n\n\t/* Adjust card layouts */\n\t.seven-cards,\n\t.today-hours-cards {\n\t\twidth: 90%; /* Make cards full-width with some padding */\n\t\tmargin-bottom: 10px;\n\t}\n}\n`,"",{version:3,sources:["webpack://./src/index.css"],names:[],mappings:"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",sourcesContent:['* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nbody {\n\tfont-family: Arial, sans-serif;\n\tbackground: linear-gradient(to bottom, #061d3b, #29265d);\n}\n@font-face {\n\tfont-family: "sinkin_sans";\n\tsrc:\n\t\turl("myfonts/sinkinsans-500medium-webfont.woff2") format("woff2"),\n\t\turl("myfonts/sinkinsans-500medium-webfont.woff") format("woff");\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: "source_sans";\n\tsrc:\n\t\turl("myfonts/sourcesanspro-regular-webfont.woff2") format("woff2"),\n\t\turl("myfonts/sourcesanspro-regular-webfont.woff") format("woff");\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n\n.container {\n\tmax-width: 1200px;\n\tmargin: 0 auto;\n\tpadding: 20px;\n}\n\n.header-bar {\n\tgrid-column: 1/3;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tjustify-content: space-between;\n\talign-items: center;\n\tbackground-color: #233167;\n\tcolor: rgba(255, 255, 255, 0.886);\n\tpadding: 10px 20px;\n\tmargin-left: 1.5rem;\n\tborder-radius: 0.8rem;\n}\n\n.title {\n\tfont-size: 24px;\n\tfont-family: "sinkin_sans";\n}\n\n#search-field {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n#search {\n\tpadding: 5px;\n\tborder-radius: 5px;\n\tborder: none;\n\tmargin-right: 10px;\n\tbackground-color: #1d1e4a;\n\tcolor: #e4e4e4;\n}\n#search::placeholder {\n\tcolor: #e4e4e4;\n\tfont-family: "source_sans";\n}\n\n.search-btn {\n\tfont-family: "source_sans";\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #231a4f;\n\tcolor: white;\n\tcursor: pointer;\n\tfont-weight: 700;\n}\n\n.today-main {\n\tcolor: #eee;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-row: auto 1fr;\n\tjustify-content: space-between;\n\tbackground-color: #333481;\n\tborder-radius: 0.8rem;\n\tpadding: 20px;\n\tmargin: 1rem 2rem;\n\tbox-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n}\n.description {\n\tfont-family: "source_sans";\n\tfont-weight: 600;\n\tfont-size: 1.2rem;\n}\n\n.today-main .icon img {\n\twidth: 7rem;\n}\n\n.main-leftdata {\n\tgrid-column: 1/2;\n}\n.main-rightdata {\n\tgrid-column: 2/3;\n\tgrid-row: 1/3;\n\tfont-family: "source_sans";\n\tfont-size: 1.1rem;\n\tfont-weight: 700;\n\tpadding-left: 1rem;\n}\n\n.city {\n\tfont-family: "sinkin_sans";\n\tfont-size: 1.7rem;\n\tfont-weight: bold;\n}\n\n.temperature {\n\tfont-family: "source_sans";\n\tfont-size: 1.8rem;\n\tfont-weight: 700;\n\tpadding-bottom: 0.5rem;\n}\n.conditions {\n\tpadding-bottom: 0.5rem;\n\tfont-size: 1.2rem;\n}\n.seven-days-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tborder-radius: 1rem;\n\tbackground-color: #150d40;\n\tpadding: 1rem;\n\tbox-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n\tmargin-bottom: 2rem;\n}\n\n.seven-day-title {\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tmargin-bottom: 1.5rem;\n\tcolor: #eee;\n\tfont-family: "sinkin_sans";\n}\n\n.seven-cards {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tjustify-content: space-between;\n\tmargin-bottom: 2rem;\n\tpadding: 10px;\n\tbackground-color: #243b63;\n\tborder-radius: 0.5rem;\n\tcolor: #eee;\n\tfont-weight: 700;\n\ttransition: 0.4s background-color;\n}\n.seven-cards:hover {\n\tbackground-color: #233167;\n}\n#last-card {\n\tmargin-bottom: 1rem;\n}\n\n.seven-icon {\n\tjustify-self: center;\n\talign-self: center;\n}\n.seven-icon img {\n\twidth: 4rem;\n\tgrid-column: 1/2;\n}\n.seven-data {\n\tgrid-column: 2/3;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n.seven-data > .seven-day {\n\tfont-family: "sinkin_sans";\n\tfont-weight: 800;\n\ttext-decoration: underline;\n\tpadding-bottom: 2px;\n}\n\n.today-hours-container {\n\tpadding: 0 2rem;\n}\n\n.today-cards-section {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(20rem, 0.8fr));\n\tgap: 1.5rem;\n\talign-items: stretch;\n\tmargin-top: 0;\n\tmargin-bottom: 20px;\n\tpadding-top: 0;\n}\n\n.today-title {\n\tfont-size: 20px;\n\tfont-weight: bold;\n\tmargin-bottom: 10px;\n\tcolor: #e4e4e4;\n\tfont-family: "sinkin_sans";\n}\n\n.today-hours-cards {\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tposition: relative;\n\tbackground-color: #202c61;\n\tcolor: rgb(37, 65, 109);\n\ttext-align: left;\n\tmin-height: calc(120px + 4vw);\n\tborder-radius: 7px;\n\tbox-shadow: 2px 2px 5px rgba(25, 5, 90, 0.671);\n\ttransition: 0.3s background-color;\n\tcursor: pointer;\n\tpadding: 1rem;\n}\n.today-hours-cards:hover {\n\tbackground-color: #333481;\n}\n\n.today-hours-icon img {\n\twidth: 6rem;\n\tgrid-column: 1/2;\n}\n.today-hours-icon {\n\talign-self: center;\n\tjustify-self: center;\n}\n.hours-data {\n\tfont-family: "source_sans";\n\tgrid-column: 2/3;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tfont-size: 1.3rem;\n\tfont-weight: 700;\n\tcolor: #eee;\n}\n\n.today-hours-time {\n\tfont-size: 2rem;\n}\n@media (min-width: 768px) {\n\t.container {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 300px;\n\t\tgrid-template-rows: auto 1fr;\n\t\tgrid-gap: 20px;\n\t}\n\n\t.today-main {\n\t\tgrid-column: 1 / 2;\n\t}\n\n\t.seven-days-container {\n\t\tmargin-top: 1rem;\n\t\tgrid-column: 2 / 3;\n\t\tgrid-row: 2/4;\n\t}\n\t.today-hours-container {\n\t\tgrid-column: 1/2;\n\t\tgrid-row: 3/4;\n\t}\n\n\t.seven-cards,\n\t.today-hours-cards {\n\t\tjustify-content: space-between;\n\t}\n}\n\n#search-history-container {\n\tmargin-top: 20px;\n\tfont-family: "sinkin_sans";\n}\n\n#search-history {\n\tlist-style-type: none;\n\tpadding: 0;\n}\n\n.search-item {\n\tcursor: pointer;\n\tcolor: rgb(219, 219, 223);\n}\n\n.search-item:hover {\n\tcolor: rgb(255, 255, 255);\n}\n\n#clear-history-btn {\n\tmargin-top: 10px;\n\tpadding: 5px 10px;\n\tbackground-color: rgb(72, 107, 153);\n\tcolor: white;\n\tborder: none;\n\tcursor: pointer;\n\tborder-radius: 10px;\n\tfont-family: "sinkin_sans";\n}\n\n#clear-history-btn:hover {\n\tbackground-color: darkred;\n}\n\n.temperature-toggle {\n\tmargin: 1rem;\n\tpadding: 1rem;\n}\n\n#temp-toggle-btn {\n\tfont-family: "source_sans";\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #231a4f;\n\tcolor: white;\n\tcursor: pointer;\n\tfont-weight: 700;\n}\n\n@media (max-width: 768px) {\n\t.container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t}\n\n\t.header-bar {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tmargin: 0;\n\t}\n\t#search-field {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 5px;\n\t}\n\t.search-btn {\n\t\tmargin: 3px;\n\t}\n\t.temperature-toggle {\n\t\tmargin: 2px;\n\t\tpadding: 0;\n\t}\n\n\t.today-main {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t}\n\n\t.seven-days-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\twidth: 100%;\n\t\tmargin-top: 20px;\n\t}\n\n\t.today-hours-container {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\twidth: 100%;\n\t\tmargin-top: 20px;\n\t}\n\t.today-cards-section {\n\t\tjustify-content: center;\n\t}\n\n\t/* Adjust card layouts */\n\t.seven-cards,\n\t.today-hours-cards {\n\t\twidth: 90%; /* Make cards full-width with some padding */\n\t\tmargin-bottom: 10px;\n\t}\n}\n'],sourceRoot:""}]);const g=m},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var C=[].concat(n[c]);r&&i[C[0]]||(void 0!==A&&(void 0===C[5]||(C[1]="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {").concat(C[1],"}")),C[5]=A),e&&(C[2]?(C[1]="@media ".concat(C[2]," {").concat(C[1],"}"),C[2]=e):C[2]=e),o&&(C[4]?(C[1]="@supports (".concat(C[4],") {").concat(C[1],"}"),C[4]=o):C[4]="".concat(o)),t.push(C))}},t}},417:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */");return[t].concat([A]).join("\n")}return[t].join("\n")}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var A={},i=[],a=0;a<n.length;a++){var s=n[a],c=r.base?s[0]+r.base:s[0],C=A[c]||0,d="".concat(c," ").concat(C);A[c]=C+1;var l=e(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var u=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:d,updater:u,references:1})}i.push(d)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var A=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<A.length;i++){var a=e(A[i]);t[a].references--}for(var s=r(n,o),c=0;c<A.length;c++){var C=e(A[c]);0===t[C].references&&(t[C].updater(),t.splice(C,1))}A=s}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},21:(n,t,e)=>{n.exports=e.p+"af4b765b38855d4290cf.woff"},581:(n,t,e)=>{n.exports=e.p+"3f845ffa2400e292fe0c.woff2"},877:(n,t,e)=>{n.exports=e.p+"1fbb8210867ba96be83c.woff"},941:(n,t,e)=>{n.exports=e.p+"52d51f433caa845913db.woff2"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var A=t[r]={id:r,exports:{}};return n[r](A,A.exports,e),A.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;const r=e.p+"f563cb90e12c2a007b45.png",o=e.p+"3543eb552e0311e8b509.png",A=e.p+"04e1887ad70fac0cf394.png",i=e.p+"a911a5255230129d0825.png";function a(n){return"Clear"===n?i:"Rain"===n?A:"Partially cloudy"===n?o:"Cloudy"===n?r:i}let s=!0;const c=document.querySelector("#temp-toggle-btn");function C(n){return Math.round(5*(n-32)/9)}function d(n){return Math.round(9*n/5+32)}c.addEventListener("click",(()=>{s=!s,c.textContent=s?"Switch to °F":"Switch to °C",function(){const n=document.querySelector(".temperature"),t=document.querySelector(".feels-like"),e=document.querySelectorAll(".today-hours-temp"),r=document.querySelectorAll(".seven-temp"),o=parseInt(n.textContent),A=parseInt(t.textContent.split(": ")[1]);isNaN(o)||isNaN(A)||(n.textContent=s?C(o)+"°C":d(o)+"°F",t.textContent=s?"Feels like: "+C(A)+"°C":"Feels like: "+d(A)+"°F",e.forEach((n=>{const t=parseInt(n.textContent);n.textContent=s?C(t)+"°C":d(t)+"°F"})),r.forEach((n=>{const t=parseInt(n.textContent);n.textContent=s?C(t)+"°C":d(t)+"°F"})))}()}));var l=e(72),m=e.n(l),u=e(825),f=e.n(u),B=e(659),p=e.n(B),g=e(56),y=e.n(g),h=e(540),b=e.n(h),x=e(113),w=e.n(x),v=e(523),E={};E.styleTagTransform=w(),E.setAttributes=y(),E.insert=p().bind(null,"head"),E.domAPI=f(),E.insertStyleElement=b(),m()(v.A,E),v.A&&v.A.locals&&v.A.locals;const k=new class{constructor(n){this.url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?key=YXXEU9VPW2DP5HQ28QW5ULY78`,this.response}changeLocation(n){return this.url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n.split(" ").join("+")}?key=YXXEU9VPW2DP5HQ28QW5ULY78`}async fetchData(){try{const n=await fetch(this.url,{mode:"cors"});if(!n.ok)throw new Error(`Error ${n.status}: ${n.statusText}`);const t=await n.json();this.response=t}catch(n){throw console.error("Error fetching weather data:",n),this.response=null,n}}getWeatherDays(){return this.response.days.slice(1,8)}getLocation(){return this.response.resolvedAddress}getCurrentConditions(){return this.response.currentConditions}getHours(){return this.response.days[0].hours}getDescription(){return this.response.description}}("Rawalpindi");async function S(){try{await k.fetchData(),!function(n,t,e){let r=document.querySelector(".icon"),o=document.querySelector(".conditions"),A=document.querySelector(".humidity"),i=document.querySelector(".feels-like"),s=document.querySelector(".city"),c=document.querySelector(".temperature"),C=document.querySelector(".description");o.textContent=n.conditions,i.textContent="Feels like: "+Math.round(5*(n.feelslike-32)/9)+"°C",A.textContent="Humidity: "+n.humidity+"%",s.textContent=t,c.textContent=Math.round(5*(n.temp-32)/9)+"°C",C.textContent=e,r.innerHTML="";let d=document.createElement("img");d.src=a(n.conditions),r.appendChild(d)}(k.getCurrentConditions(),k.getLocation(),k.getDescription()),function(n){const t=[];for(let e=1;e<n.length;e+=4)t.push(n[e]);console.log(t),document.querySelectorAll(".today-hours-cards").forEach(((n,e)=>{const r=n.querySelector(".today-hours-icon"),o=n.querySelector(".today-hours-temp"),A=n.querySelector(".today-hours-humidity"),i=n.querySelector(".today-hours-time");r.innerHTML="",o.textContent=Math.round(5*(t[e].temp-32)/9)+"°C",A.textContent="Humiditiy: "+t[e].humidity+"%",i.textContent=t[e].datetime;let s=document.createElement("img");s.src=a(t[e].conditions),r.appendChild(s)}))}(k.getHours()),function(n){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];document.querySelectorAll(".seven-cards").forEach(((e,r)=>{const o=e.querySelector(".seven-icon"),A=e.querySelector(".seven-condition"),i=e.querySelector(".seven-day"),s=e.querySelector(".seven-temp");o.innerHTML="";let c=document.createElement("img");c.src=a(n[r].conditions),o.appendChild(c),A.textContent=n[r].conditions,s.textContent=Math.round(5*(n[r].temp-32)/9)+"°C";const C=new Date(n[r].datetime).getDay();i.textContent=t[C]}))}(k.getWeatherDays())}catch(n){alert("Failed to fetch weather data. Please check the city name or try again later."),console.error("Error setting weather data:",n)}}S();const j=document.querySelector("#search"),q=document.querySelector(".search-btn"),W=document.querySelector("#search-history");function _(){const n=JSON.parse(localStorage.getItem("searchHistory"))||[];W.innerHTML="",n.forEach((n=>{const t=document.createElement("li");t.textContent=n,t.classList.add("search-item"),t.addEventListener("click",(()=>{j.value=n,z()})),W.appendChild(t)}))}function z(){const n=j.value.trim();""!==n?(k.changeLocation(j.value),S(),function(n){let t=JSON.parse(localStorage.getItem("searchHistory"))||[];t.includes(n)||(t.push(n),localStorage.setItem("searchHistory",JSON.stringify(t))),_()}(n),j.value=""):console.warn("Search input is empty. No API call made.")}document.querySelector("#clear-history-btn").addEventListener("click",(function(){localStorage.removeItem("searchHistory"),_()})),j.addEventListener("keypress",(n=>{"Enter"===n.key&&z()})),_(),q.addEventListener("click",(()=>z()))})();
//# sourceMappingURL=main.2ea5a0ef0ef4b3b2b108.js.map