(this.webpackJsonphandman=this.webpackJsonphandman||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);n(8);var a=n(6),i=n(3),r=n(1),c=n(0),o=function(e){var t=e.wrongLetters.length;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("svg",{height:"250",width:"200",className:"figure-container",children:[Object(c.jsx)("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),Object(c.jsx)("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),Object(c.jsx)("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),Object(c.jsx)("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&Object(c.jsx)("circle",{cx:"140",cy:"70",r:"20"}),t>1&&Object(c.jsx)("line",{x1:"140",y1:"90",x2:"140",y2:"150"}),t>2&&Object(c.jsx)("line",{x1:"140",y1:"120",x2:"120",y2:"100"}),t>3&&Object(c.jsx)("line",{x1:"140",y1:"120",x2:"160",y2:"100"}),t>4&&Object(c.jsx)("line",{x1:"140",y1:"150",x2:"120",y2:"180"}),t>5&&Object(c.jsx)("line",{x1:"140",y1:"150",x2:"160",y2:"180"})]})})},s=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Hangman"}),Object(c.jsx)("p",{children:"Find the hidden word - Enter a letter"})]})},l=function(e){var t=e.showNotification;return Object(c.jsx)("div",{className:"notification-container ".concat(t?"show":""),children:Object(c.jsx)("p",{children:"You have already entered this letter"})})},u=function(e){e(!0),setTimeout((function(){e(!1)}),2e3)},j=function(e,t,n){var a="win";return n.split("").forEach((function(t){e.includes(t)||(a="")})),6===t.length&&(a="lose"),a},h=function(e){var t=e.correctLetters,n=e.wrongLetters,a=e.setplayable,i=e.selectedWord,o=e.playAgain,s="",l="",u=!0;return"win"===j(t,n,i)?(s="abhinandan! \ud83d\ude03",u=!1):"lose"===j(t,n,i)&&(s="unfortunatly you lose!",l="... the word was: ".concat(i),u=!1),Object(r.useEffect)((function(){a(u)})),Object(c.jsx)("div",{className:"popup-container",onClick:o,style:""!==s?{display:"flex"}:{},children:Object(c.jsxs)("div",{className:"popup",children:[Object(c.jsxs)("h2",{children:[s," "]}),Object(c.jsxs)("h3",{children:[l," "]}),Object(c.jsx)("button",{onClick:o,children:"Play Again"})]})})},b=function(e){var t=e.selectedWord,n=e.correctLetters;return Object(c.jsx)("div",{className:"word",children:t.split("").map((function(e,t){return Object(c.jsx)("span",{className:"letter",children:n.includes(e)?e:""},t)}))})},y=function(e){var t=e.wrongLetters;return Object(c.jsx)("div",{className:"wrong-letters-container",children:Object(c.jsxs)("div",{children:[t.length>0&&Object(c.jsx)("p",{children:"Wrong"}),t.map((function(e,t){return Object(c.jsx)("span",{children:e},t)})).reduce((function(e,t){return null===e?[t]:[e,",",t]}),null)]})})},d=["abruptly","absurd","abyss","affix","askew","avenue","awkward","axiom","azure","bagpipes","bandwagon","banjo","bayou","beekeeper","bikini","blitz","blizzard","boggle","bookworm","boxcar","boxful","buckaroo","buffalo","buffoon","buxom","buzzard","buzzing","buzzwords","caliph","cobweb","cockiness","croquet","crypt","curacao","cycle","daiquiri","dirndl","disavow","dizzying","duplex","dwarves","embezzle","equip","espionage","euouae","exodus","faking","fishhook","fixable","fjord","flapjack","flopping","fluffiness","flyby","foxglove","frazzled","frizzled","fuchsia","funny","gabby","galaxy","galvanize","gazebo","giaour","gizmo","glowworm","glyph","gnarly","gnostic","gossip","grogginess","haiku","haphazard","hyphen","iatrogenic","icebox","injury","ivory","ivy","jackpot","jaundice","jawbreaker","jaywalk","jazziest","jazzy","jelly","jigsaw","jinx","jiujitsu","jockey","jogging","joking","jovial","joyful","juicy","jukebox","jumbo","kayak","kazoo","keyhole","khaki","kilobyte","kiosk","kitsch","kiwifruit","klutz","knapsack","larynx","lengths","lucky","luxury","lymph","marquis","matrix","megahertz","microwave","mnemonic","mystify","naphtha","nightclub","nowadays","numbskull","nymph","onyx","ovary","oxidize","oxygen","pajama","peekaboo","phlegm","pixel","pizazz","pneumonia","polka","pshaw","psyche","puppy","puzzling","quartz","queue","quips","quixotic","quiz","quizzes","quorum","razzmatazz","rhubarb","rhythm","rickshaw","schnapps","scratch","shiv","snazzy","sphinx","spritz","squawk","staff","strength","strengths","stretch","stronghold","stymied","subway","swivel","syndrome","thriftless","thumbscrew","topaz","transcript","transgress","transplant","triphthong","twelfth","twelfths","unknown","unworthy","unzip","uptown","vaporize","vixen","vodka","voodoo","vortex","voyeurism","walkway","waltz","wave","wavy","waxy","wellspring","wheezy","whiskey","whizzing","whomever","wimpy","witchcraft","wizard","woozy","wristwatch","wyvern","xylophone","yachtsman","yippee","yoked","youthful","yummy","zephyr","zigzag","zigzagging","zilch","zipper","zodiac","zombie"],x=d[Math.floor(Math.random()*d.length)];var p=function(){var e=Object(r.useState)(!0),t=Object(i.a)(e,2),n=t[0],j=t[1],p=Object(r.useState)([]),g=Object(i.a)(p,2),w=g[0],f=g[1],z=Object(r.useState)([]),m=Object(i.a)(z,2),k=m[0],O=m[1],v=Object(r.useState)(!1),L=Object(i.a)(v,2),q=L[0],N=L[1];return Object(r.useEffect)((function(){var e=function(e){var t=e.key,i=e.keyCode;if(n&&i>=65&&i<=90){var r=t.toLowerCase();x.includes(r)?w.includes(r)?u(N):f((function(e){return[].concat(Object(a.a)(e),[r])})):k.includes(r)?u(N):O((function(e){return[].concat(Object(a.a)(e),[r])}))}};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[k,w,n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s,{}),Object(c.jsxs)("div",{className:"game-container",children:[Object(c.jsx)(o,{wrongLetters:k}),Object(c.jsx)(y,{wrongLetters:k}),Object(c.jsx)(b,{selectedWord:x,correctLetters:w})]}),Object(c.jsx)(h,{wrongLetters:k,correctLetters:w,selectedWord:x,setplayable:j,playAgain:function(){j(!0),f([]),O([]);var e=Math.floor(Math.random()*d.length);x=d[e]}}),Object(c.jsx)(l,{showNotification:q})]})},g=n(7);n.n(g).a.render(Object(c.jsx)(p,{}),document.getElementById("root"))},8:function(e,t,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.ba634184.chunk.js.map