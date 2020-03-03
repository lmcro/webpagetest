Help.latestReleaseNote=function(){if(!Help._latestReleaseNote){Help._latestReleaseNote=Help.releaseNoteText.reduce((acc,note)=>note.version>acc.version?note:acc);}
return Help._latestReleaseNote;};Help._showReleaseNoteIfNeeded=function(){Help._innerShowReleaseNoteIfNeeded(Help._releaseNoteVersionSetting.get(),Help.latestReleaseNote().version,Common.settings.moduleSetting('help.show-release-note').get());};Help._innerShowReleaseNoteIfNeeded=function(lastSeenVersion,latestVersion,showReleaseNote){if(!lastSeenVersion){Help._releaseNoteVersionSetting.set(latestVersion);return;}
if(!showReleaseNote)
return;if(lastSeenVersion>=latestVersion)
return;Help._releaseNoteVersionSetting.set(latestVersion);UI.viewManager.showView(Help.releaseNoteViewId,true);};Help.releaseNoteViewId='release-note';Help.ReleaseNoteHighlight;Help.ReleaseNote;Help.HelpLateInitialization=class{run(){Help._showReleaseNoteIfNeeded();}};Help.ReleaseNotesActionDelegate=class{handleAction(context,actionId){InspectorFrontendHost.openInNewTab(Help.latestReleaseNote().link);return true;}};Help._releaseNoteVersionSetting=Common.settings.createSetting('releaseNoteVersionSeen',0);;Help.ReleaseNoteView=class extends UI.VBox{constructor(){super(true);this.registerRequiredCSS('help/releaseNote.css');const releaseNoteElement=this._createReleaseNoteElement(Help.latestReleaseNote());const topSection=this.contentElement.createChild('div','release-note-top-section');topSection.textContent=Common.UIString(Help.latestReleaseNote().header);this.contentElement.appendChild(releaseNoteElement);}
_createReleaseNoteElement(releaseNote){const hbox=createElementWithClass('div','hbox');const container=hbox.createChild('div','release-note-container');const contentContainer=container.createChild('ul');for(const highlight of releaseNote.highlights){const listItem=contentContainer.createChild('li');const title=UI.XLink.create(highlight.link,highlight.title+' ','release-note-title');title.title='';listItem.appendChild(title);const subtitle=UI.XLink.create(highlight.link,highlight.subtitle+' ','release-note-subtitle');subtitle.title='';listItem.appendChild(subtitle);}
const actionContainer=container.createChild('div','release-note-action-container');actionContainer.appendChild(UI.createTextButton(Common.UIString('Learn more'),event=>{event.consume(true);InspectorFrontendHost.openInNewTab(releaseNote.link);}));actionContainer.appendChild(UI.createTextButton(Common.UIString('Close'),event=>{event.consume(true);UI.inspectorView.closeDrawerTab(Help.releaseNoteViewId,true);},'close-release-note'));const imageLink=UI.XLink.create(releaseNote.link,' ');imageLink.classList.add('release-note-image');imageLink.title='';hbox.appendChild(imageLink);const image=imageLink.createChild('img');image.src='Images/whatsnew.png';return hbox;}};;const continueToHereShortcut=Host.isMac()?'Command':'Control';const networkSearchShortcut=Host.isMac()?'Command + F':'Control + F';const commandMenuShortcut=Host.isMac()?'Command + Shift + P':'Control + Shift + P';Help.releaseNoteText=[{version:13,header:'Highlights from the Chrome 71 update',highlights:[{title:'Hover over a Live Expression to highlight a DOM node',subtitle:'Hover over a result that evaluates to a node to highlight that node in the viewport.',link:'https://developers.google.com/web/updates/2018/10/devtools#hover',},{title:'Store DOM nodes as global variables',subtitle:'Right-click a node in the Elements panel or Console and select "Store as global variable".',link:'https://developers.google.com/web/updates/2018/10/devtools#store',},{title:'Initiator and priority information now in HAR imports and exports',subtitle:'Get more context around what caused a resource to be requested and what priority the browser assigned to each resource when sharing network logs.',link:'https://developers.google.com/web/updates/2018/10/devtools#HAR',},{title:'Access the Command Menu from the Main Menu',subtitle:'Open the Main Menu and select "Run command".',link:'https://developers.google.com/web/updates/2018/10/devtools#command-menu',},],link:'https://developers.google.com/web/updates/2018/10/devtools',},{version:12,header:'Highlights from the Chrome 70 update',highlights:[{title:'Live Expressions in the Console',subtitle:'Pin expressions to the top of the Console to monitor their values in real-time.',link:'https://developers.google.com/web/updates/2018/08/devtools#watch',},{title:'Highlight DOM nodes during Eager Evaluation',subtitle:'Type an expression that evaluates to a node to highlight that node in the viewport.',link:'https://developers.google.com/web/updates/2018/08/devtools#nodes',},{title:'Autocomplete Conditional Breakpoints',subtitle:'Type expressions quickly and accurately.',link:'https://developers.google.com/web/updates/2018/08/devtools#autocomplete',},{title:'Performance panel optimizations',subtitle:'Faster loading and processing of Performance recordings.',link:'https://developers.google.com/web/updates/2018/08/devtools#performance',},{title:'More reliable debugging',subtitle:'Bug fixes for sourcemaps and blackboxing.',link:'https://developers.google.com/web/updates/2018/08/devtools#debugging',},{title:'Debug Node.js apps with ndb',subtitle:'Detect and attach to child processes, place breakpoints before modules are required, edit files within DevTools, and more.',link:'https://developers.google.com/web/updates/2018/08/devtools#ndb',},],link:'https://developers.google.com/web/updates/2018/08/devtools',},{version:11,header:'Highlights from the Chrome 68 update',highlights:[{title:'Eager evaluation',subtitle:'Preview return values in the Console without explicitly executing expressions.',link:'https://developers.google.com/web/updates/2018/05/devtools#eagerevaluation',},{title:'Argument hints',subtitle:`View a function's expected arguments in the Console.`,link:'https://developers.google.com/web/updates/2018/05/devtools#hints',},{title:'Function autocompletion',subtitle:'View available properties and methods after calling a function in the Console.',link:'https://developers.google.com/web/updates/2018/05/devtools#autocomplete',},{title:'Audits panel updates',subtitle:'Faster, more consisent audits, a new UI, and new audits, thanks to Lighthouse 3.0.',link:'https://developers.google.com/web/updates/2018/05/devtools#lh3',}],link:'https://developers.google.com/web/updates/2018/05/devtools',},{version:10,header:'Highlights from the Chrome 67 update',highlights:[{title:'Search across all network headers',subtitle:`Press ${networkSearchShortcut} in the Network panel to open the Network Search pane.`,link:'https://developers.google.com/web/updates/2018/04/devtools#network-search',},{title:'CSS variable value previews in the Styles pane',subtitle:'When a property value is a CSS variable, DevTools now shows a color preview next to the variable.',link:'https://developers.google.com/web/updates/2018/04/devtools#vars',},{title:'Stop infinite loops',subtitle:'Pause JavaScript execution then select the new Stop Current JavaScript Call button.',link:'https://developers.google.com/web/updates/2018/04/devtools#stop',},{title:'Copy as fetch',subtitle:'Right-click a network request then select Copy > Copy as fetch.',link:'https://developers.google.com/web/updates/2018/04/devtools#fetch',},{title:'More audits',subtitle:'Two new audits, desktop configuration options, and viewing traces.',link:'https://developers.google.com/web/updates/2018/04/devtools#audits',},{title:'User Timing in the Performance tabs',subtitle:'Click the User Timing section to view measures in the Summary, Bottom-Up, and Call Tree tabs.',link:'https://developers.google.com/web/updates/2018/04/devtools#tabs',},],link:'https://developers.google.com/web/updates/2018/04/devtools',},{version:9,header:'Highlights from the Chrome 66 update',highlights:[{title:'Pretty-printing in the Preview and Response tabs',subtitle:'The Preview tab now pretty-prints by default, and you can force '+'pretty-printing in the Response tab via the new Format button.',link:'https://developers.google.com/web/updates/2018/02/devtools#pretty-printing',},{title:'Previewing HTML content in the Preview tab',subtitle:'The Preview tab now always does a basic rendering of HTML content.',link:'https://developers.google.com/web/updates/2018/02/devtools#previews',},{title:'Local Overrides with styles defined in HTML',subtitle:'Local Overrides now works with styles defined in HTML, with one exception.',link:'https://developers.google.com/web/updates/2018/02/devtools#overrides',},{title:'Blackboxing in the Initiator column',subtitle:'Hide framework scripts in order to see the app code that caused a request.',link:'https://developers.google.com/web/updates/2018/02/devtools#blackboxing',},],link:'https://developers.google.com/web/updates/2018/02/devtools',},{version:8,header:'Highlights from the Chrome 65 update',highlights:[{title:'Local overrides',subtitle:'Override network requests and serve local resources instead.',link:'https://developers.google.com/web/updates/2018/01/devtools#overrides',},{title:'Changes tab',subtitle:'Track changes that you make locally in DevTools via the Changes tab.',link:'https://developers.google.com/web/updates/2018/01/devtools#changes',},{title:'New accessibility tools',subtitle:'Inspect the accessibility properties and contrast ratio of elements.',link:'https://developers.google.com/web/updates/2018/01/devtools#a11y',},{title:'New audits',subtitle:'New performance audits, a whole new category of SEO audits, and more.',link:'https://developers.google.com/web/updates/2018/01/devtools#audits',},{title:'Code stepping updates',subtitle:'Reliably step into web worker and asynchronous code.',link:'https://developers.google.com/web/updates/2018/01/devtools#stepping',},{title:'Multiple recordings in the Performance panel',subtitle:'Temporarily save up to 5 recordings.',link:'https://developers.google.com/web/updates/2018/01/devtools#recordings',},],link:'https://developers.google.com/web/updates/2018/01/devtools',},{version:7,header:'Highlights from the Chrome 64 update',highlights:[{title:'Performance monitor',subtitle:'Get a real-time view of various performance metrics.',link:'https://developers.google.com/web/updates/2017/11/devtools-release-notes#perf-monitor',},{title:'Console sidebar',subtitle:'Reduce console noise and focus on the messages that are important to you.',link:'https://developers.google.com/web/updates/2017/11/devtools-release-notes#console-sidebar',},{title:'Group similar console messages',subtitle:'The Console now groups similar messages by default.',link:'https://developers.google.com/web/updates/2017/11/devtools-release-notes#group-similar',},],link:'https://developers.google.com/web/updates/2017/11/devtools-release-notes',},{version:6,header:'Highlights from the Chrome 63 update',highlights:[{title:'Multi-client remote debugging',subtitle:'Use DevTools while debugging your app from an IDE or testing framework.',link:'https://developers.google.com/web/updates/2017/10/devtools-release-notes#multi-client',},{title:'Workspaces 2.0',subtitle:'Save changes made in DevTools to disk, now with more helpful UI and better auto-mapping.',link:'https://developers.google.com/web/updates/2017/10/devtools-release-notes#workspaces',},{title:'Four new audits',subtitle:'Including "Appropriate aspect ratios for images", "Avoid JS libraries with known vulnerabilities", and more.',link:'https://developers.google.com/web/updates/2017/10/devtools-release-notes#audits',},{title:'Custom push notifications',subtitle:'Simulate push notifications with custom data.',link:'https://developers.google.com/web/updates/2017/10/devtools-release-notes#push',},{title:'Custom background sync events',subtitle:'Trigger background sync events with custom tags.',link:'https://developers.google.com/web/updates/2017/10/devtools-release-notes#sync',},],link:'https://developers.google.com/web/updates/2017/10/devtools-release-notes',},{version:5,header:'Highlights from the Chrome 62 update',highlights:[{title:'Top-level await operators in the Console',subtitle:'Use await to conveniently experiment with asynchronous functions in the Console.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#await',},{title:'New screenshot workflows',subtitle:'Take screenshots of a portion of the viewport, or of specific HTML nodes.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#screenshots',},{title:'CSS Grid highlighting',subtitle:'Hover over an element to see the CSS Grid that\'s affecting it.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#css-grid-highlighting',},{title:'A new Console API for querying objects',subtitle:'Call queryObjects(Constructor) to get an array of objects instantiated with that constructor.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#query-objects',},{title:'New Console filters',subtitle:'Filter out logging noise with the new negative and URL filters.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#console-filters',},{title:'HAR imports in the Network panel',subtitle:'Drag-and-drop a HAR file to analyze a previous network recording.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#har-imports',},{title:'Previewable cache resources in the Application panel',subtitle:'Click a row in a Cache Storage table to see a preview of that resource.',link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes#cache-preview',}],link:'https://developers.google.com/web/updates/2017/08/devtools-release-notes',},{version:4,header:'Highlights from the Chrome 61 update',highlights:[{title:'Mobile device throttling',subtitle:'Simulate a mobile device\'s CPU and network throttling from Device Mode.',link:'https://developers.google.com/web/updates/2017/07/devtools-release-notes#throttling',},{title:'Storage usage',subtitle:'See how much storage (IndexedDB, local, session, cache, etc.) an origin is using.',link:'https://developers.google.com/web/updates/2017/07/devtools-release-notes#storage',},{title:'Cache timestamps',subtitle:'View when a service worker cached a response.',link:'https://developers.google.com/web/updates/2017/07/devtools-release-notes#time-cached',},{title:'ES6 Modules support',subtitle:'Debug ES6 Modules natively from the Sources panel.',link:'https://developers.google.com/web/updates/2017/07/devtools-release-notes#modules',}],link:'https://developers.google.com/web/updates/2017/07/devtools-release-notes',},{version:3,header:'Highlights from the Chrome 60 update',highlights:[{title:'New Audits panel, powered by Lighthouse',subtitle:'Find out whether your site qualifies as a Progressive Web App, measure the accessibility and performance of a page, and discover best practices.',link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes#lighthouse',},{title:'Third-party badges',subtitle:'See what third-party entities are logging to the Console, making network requests, and causing work during performance recordings.',link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes#badges',},{title:'New "Continue to Here" gesture',subtitle:'While paused on a line of code, hold '+continueToHereShortcut+' and then click to continue to another line of code.',link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes#continue',},{title:'Step into async',subtitle:'Predictably step into a promise resolution or other asynchronous code with a single gesture.',link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes#step-into-async',},{title:'More informative object previews',subtitle:'Get a better idea of the contents of objects when logging them to the Console.',link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes#object-previews',},{title:'Real-time Coverage tab updates',subtitle:'See what code is being used in real-time.',link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes#coverage',}],link:'https://developers.google.com/web/updates/2017/05/devtools-release-notes',},{version:2,header:'Highlights from Chrome 59 update',highlights:[{title:'CSS and JS code coverage',subtitle:'Find unused CSS and JS with the new Coverage drawer.',link:'https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage',},{title:'Full-page screenshots',subtitle:'Take a screenshot of the entire page, from the top of the viewport to the bottom.',link:'https://developers.google.com/web/updates/2017/04/devtools-release-notes#screenshots',},{title:'Block requests',subtitle:'Manually disable individual requests in the Network panel.',link:'https://developers.google.com/web/updates/2017/04/devtools-release-notes#block-requests',},{title:'Step over async await',subtitle:'Step through async functions predictably.',link:'https://developers.google.com/web/updates/2017/04/devtools-release-notes#async',},{title:'Unified Command Menu',subtitle:'Execute commands and open files from the newly-unified Command Menu ('+commandMenuShortcut+').',link:'https://developers.google.com/web/updates/2017/04/devtools-release-notes#command-menu',}],link:'https://developers.google.com/web/updates/2017/04/devtools-release-notes',},{version:1,header:'Highlights from Chrome 58 update',highlights:[{title:'New Performance and Memory panels',subtitle:'Head to Performance for JavaScript profiling',link:'https://developers.google.com/web/updates/2017/03/devtools-release-notes#performance-panel',},{title:'Editable cookies',subtitle:'You can edit any existing cookies and create new ones in the Application panel',link:'https://developers.google.com/web/updates/2017/03/devtools-release-notes#cookies',},{title:'Console filtering & settings',subtitle:'Use the text filter or click the Console settings icon to touch up your preferences',link:'https://developers.google.com/web/updates/2017/03/devtools-release-notes#console',},{title:'Debugger catches out-of-memory errors',subtitle:'See the stack or grab a heap snapshot to see why the app may crash',link:'https://developers.google.com/web/updates/2017/03/devtools-release-notes#out-of-memory-breakpoints',},],link:'https://developers.google.com/web/updates/2017/03/devtools-release-notes',}];;Runtime.cachedResources["help/releaseNote.css"]="/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n}\n\n.hbox {\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.release-note-top-section {\n    height: 27px;\n    line-height: 27px;\n    padding: 0 15px;\n    flex: none;\n    background-color: var(--toolbar-bg-color);\n    border-bottom: var(--divider-border);\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n:host-context(.-theme-with-dark-background) .release-note-top-section {\n    color: white;\n}\n\n.release-note-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.release-note-container ul {\n    display: flex;\n    padding: 10px 16px;\n    flex-direction: column;\n    flex: none;\n    margin: 4px 12px 0 2px;\n    max-width: 600px;\n}\n\n.release-note-container li {\n    display: flex;\n    flex-direction:column;\n    flex: none;\n    line-height: 24px;\n    font-size: 14px;\n}\n\n\n.release-note-container li:hover {\n    color: #039be5;\n}\n\n.release-note-title,\n.release-note-subtitle {\n    color: inherit;\n    text-decoration: none;\n}\n\n.release-note-subtitle {\n    font-size: 13px;\n    line-height: 13px;\n    padding-bottom: 8px;\n}\n\n.release-note-container li:not(:hover) .release-note-subtitle {\n    color: #999;\n}\n\n.release-note-action-container > button {\n    margin: 10px 0 20px 20px;\n    color: #757575;\n}\n\n.release-note-action-container {\n    flex: none;\n}\n\n.release-note-image {\n    flex-shrink: 2;\n}\n\nimg {\n    margin: 20px;\n    width: 260px;\n    height: 200px;\n    flex: none;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);\n}\n\nimg:hover {\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .5);\n}\n\n/*# sourceURL=help/releaseNote.css */";