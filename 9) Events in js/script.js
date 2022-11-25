// ⚡ Events in js ⚡
function fun() {  
    alert("Greetings");  
    }  
// ⭐ Mouse:
// 🔴 onclick
// The event occurs when the user clicks on an element
document.getElementById("div").onclick = function() {
    fun()
}

// 🔴 oncontextmenu
// User right-clicks on an element to open a context menu
document.getElementById("div1").oncontextmenu = function() {
    fun()
}

// 🔴 ondblclick
// The user double-clicks on an element
document.getElementById("div2").ondblclick = function() {
    fun()
}

// 🔴 onmousedown
// User presses a mouse button over an element
document.getElementById("div3").onmousedown = function() {
    fun()
}

// 🔴 onmouseenter
// The pointer moves onto an element
document.getElementById("div4").onmouseenter = function() {
    fun()
}

// 🔴 onmouseleave
// Pointer moves out of an element
document.getElementById("div5").onmouseleave = function() {
    fun()
}

// 🔴 onmousemove
// The pointer is moving while it is over an element
document.getElementById("div6").onmousemove = function() {
    fun()
}

// 🔴 onmouseover
// When the pointer is moved onto an element or one of its children
document.getElementById("div7").onmouseover = function() {
    fun()
}

// 🔴 onmouseout
// User moves the mouse pointer out of an element or one of its children
document.getElementById("div8").onmouseout = function() {
    fun()
}

// 🔴 onmouseup
// The user releases a mouse button while over an element
document.getElementById("div9").onmouseup = function() {
    fun()
}

// ⭐ Keyboard:
// 🟢 onkeydown
// When the user is pressing a key down


// 🟢 onkeypress
// The moment the user starts pressing a key

// 🟢 onkeyup
// The user releases a key

// ⭐ Getting Specific Key 
const keyBoard = document.querySelector('.inputTag')

keyBoard.addEventListener('keydown', e =>{
    // if(e.keyCode === 50 || e.keyCode === 90){
    //     document.getElementById("div_2").innerHTML = "Sorry! You cant use " + e.key 
    //     e.preventDefault()
    // }
        document.getElementById("div_3").innerHTML = "<b> Key: </b>" + e.key + "<b> Key Code: </b>" + e.keyCode 
})

// ⭐ Frame:

// 🟥 onabort
// The loading of a media is aborted

// 🟥 onbeforeunload
// Event occurs before the document is about to be unloaded

// 🟥 onerror
// An error occurs while loading an external file

// 🟥 onhashchange
// There have been changes to the anchor part of a URL

// 🟥 onload
// When an object has loaded

// 🟥 onpagehide
// The user navigates away from a webpage

// 🟥 onpageshow
// When the user navigates to a webpage

// 🟥 onresize
// The document view is resized

// 🟥 onscroll
// An element’s scrollbar is being scrolled

// 🟥 onunload
// Event occurs when a page has unloaded

// ⭐ Form:
// 🔻 onblur
// When an element loses focus

// 🔻 onchange
// The content of a form element changes (for <input>, <select>and <textarea>)

// 🔻 onfocus
// An element gets focus
function fun1() {
    document.getElementById("div_1").innerHTML = " Event Triggered"
}

// document.getElementById("inputTxt")onfocus = function() {
//     fun()
// }

// 🔻 onfocusin
// When an element is about to get focus
function fun2() {
    document.getElementById("div_2").innerHTML = " Event Triggered"
}

// 🔻 onfocusout
// The element is about to lose focus

// 🔻 oninput
// User input on an element

// 🔻 oninvalid
// An element is invalid

// 🔻 onreset
// A form is reset

// 🔻 onsearch
// The user writes something in a search field (for <input="search">)

// 🔻 onselect
// The user selects some text (for <input> and <textarea>)

// 🔻 onsubmit
// A form is submitted

// ⭐ Drag:
// ⚫ ondrag
// An element is dragged

// ⚫ ondragend
// The user has finished dragging the element

// ⚫ ondragenter
// The dragged element enters a drop target

// ⚫ ondragleave
// A dragged element leaves the drop target

// ⚫ ondragover
// The dragged element is on top of the drop target

// ⚫ ondragstart
// User starts to drag an element

// ⚫ ondrop
// Dragged element is dropped on the drop target

// ⭐ Clipboard:
// ⬛ oncopy
// User copies the content of an element

// ⬛ oncut
// The user cuts an element’s content

// ⬛ onpaste
// A user pastes content in an element

// ⭐ Media:
// 🔵 onabort
// Media loading is aborted

// 🔵 oncanplay
// The browser can start playing media (e.g. a file has buffered enough)

// 🔵 oncanplaythrough
// When browser can play through media without stopping

// 🔵 ondurationchange
// The duration of the media changes

// 🔵 onended
// The media has reached its end

// 🔵 onerror
// Happens when an error occurs while loading an external file

// 🔵 onloadeddata
// Media data is loaded

// 🔵 onloadedmetadata
// Meta Metadata (like dimensions and duration) are loaded

// 🔵 onloadstart
// Browser starts looking for specified media

// 🔵 onpause
// Media is paused either by the user or automatically

// 🔵 onplay
// The media has been started or is no longer paused

// 🔵 onplaying
// Media is playing after having been paused or stopped for buffering

// 🔵 onprogress
// Browser is in the process of downloading the media

// 🔵 onratechange
// The playing speed of the media changes

// 🔵 onseeked
// User is finished moving/skipping to a new position in the media

// 🔵 onseeking
// The user starts moving/skipping

// 🔵 onstalled
// The browser is trying to load the media but it is not available

// 🔵 onsuspend
// Browser is intentionally not loading media

// 🔵 ontimeupdate
// The playing position has changed (e.g. because of fast forward)

// 🔵 onvolumechange
// Media volume has changed (including mute)

// 🔵 onwaiting
// Media paused but expected to resume (for example, buffering)

// ⭐ Animation
// 🟡 animationend
// A CSS animation is complete

// 🟡 animationiteration
// CSS animation is repeated

// 🟡 animationstart
// CSS animation has started

// ⭐ Other:
// 🟣 transitionend
// Fired when a CSS transition has completed

// 🟣 onmessage
// A message is received through the event source

// 🟣 onoffline
// Browser starts to work offline

// 🟣 ononline
// The browser starts to work online

// 🟣 onpopstate
// When the window’s history changes

// 🟣 onshow
// A <menu> element is shown as a context menu

// 🟣 onstorage
// A Web Storage area is updated

// 🟣 ontoggle
// The user opens or closes the <details> element

// 🟣 onwheel
// Mouse wheel rolls up or down over an element

// 🟣 ontouchcancel
// Screen touch is interrupted

// 🟣 ontouchend
// User finger is removed from a touch screen

// 🟣 ontouchmove
// A finger is dragged across the screen

// 🟣 ontouchstart
// Finger is placed on touch screen
