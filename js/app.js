/* Navbutton */
const navBtn = document.querySelector("nav button");
const sidebar = document.querySelector('.sidebar')


const sideBarOpen = () => {
    sidebar.classList.add('active')
};

navBtn.addEventListener("click", sideBarOpen);

/* Navbutton End */




/* Cancelbutton */
const cancelBtn = document.querySelector(".cancelBtn");

const closeSidebar = (event) =>{
    if (
      event.target.classList.contains("sidebar") ||
      event.target.classList.contains("cancelBtn")
    ) {

        sidebar.classList.remove("active");
    }
    
}
const cancelbtn=document.querySelector(".cancelBtn");
 
const closeSidebarcancel=()=>{
    sidebar.classList.remove('active')
};
cancelbtn.addEventListener("click",closeSidebarcancel)

cancelBtn.addEventListener('click', closeSidebar)
sidebar.addEventListener('click', closeSidebar)

/* Cancelbutton End*/

/* Darkmode */
const darkModeBtn = document.querySelector(".darkModeBtn");
const body = document.querySelector('body')
const darkMode = () => {
    body.classList.toggle('darkmode')
}

darkModeBtn.addEventListener('click', darkMode)


/* Darkmode Ends */

/* Cursor */

const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customMouseCursor = (event) =>{
    console.log(event.pageX);
    cursor.style.top = `${event.pageY}px`;
    cursor.style.left = `${event.pageX}px`;
    cursorSm.style.top = `${event.pageY}px`;
    cursorSm.style.left = `${event.pageX}px`;
    
}

window.addEventListener("mousemove", customMouseCursor);

/* Cursor Ends */