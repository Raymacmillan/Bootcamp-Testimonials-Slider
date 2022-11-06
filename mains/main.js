const johnSection = document.querySelector(".John_section");
const tanyaSection = document.querySelector(".tanya_section");
const mainContainer = document.querySelector(".main_container");

let counter = 0;

function toggleClasses() {
  if (tanyaSection.classList.contains("hide_tanya_section")) {
    tanyaSection.classList.remove("hide_tanya_section");
  } else {
    tanyaSection.classList.add("hide_tanya_section");
  }

  if (johnSection.classList.contains("show_john_section")) {
    johnSection.classList.remove("show_john_section");
  } else {
    johnSection.classList.add("show_john_section");
  }

}


window.addEventListener("keyup", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    toggleClasses();
  }
});


mainContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "IMG" && event.target.parentNode.classList.contains("arrows")){
        toggleClasses();
    }
});
