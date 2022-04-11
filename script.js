(() => {
  processesDropdownSidebar();
  activeSidebar();
  scrollToActiveState();
})();

function processesDropdownSidebar() {
  var container = document.querySelectorAll(".sidebar .dropdown-container");
  container.forEach((c) => {
    c.classList.toggle("none");
  });

  var dropdowns = document.querySelectorAll(".sidebar .dropdown-btn");
  dropdowns.forEach((d) => {
    d.querySelector(".icon-down").style.display = "none";
    d.addEventListener("click", () => {
      var iconForward = d.querySelector(".icon-forward");
      var iconDown = d.querySelector(".icon-down");
      var dropdownContainer = d.nextElementSibling;
      var dropdownContainerList = dropdownContainer.classList;

      if (dropdownContainerList.contains("none") == true) {
        dropdownContainerList.remove("none");
        dropdownContainerList.add("block");

        iconForward.style.display = "none";
        iconDown.style.display = "inline-block";
      } else {
        dropdownContainerList.add("none");
        dropdownContainerList.remove("block");

        iconForward.style.display = "inline-block";
        iconDown.style.display = "none";
      }
    });
  });
}

function activeSidebar() {
  var sidePosition = ["left"];
  sidePosition.forEach((side) => {
    var items = document.querySelectorAll(".sidebar-" + side + " a");
    items[0].classList.add("active");
    items.forEach((i) => {
      i.addEventListener("click", () => {
        var itemsRemove = document.querySelectorAll(".sidebar-" + side + " a");
        itemsRemove.forEach((ir) => {
          ir.classList.remove("active");
        });
        i.classList.add("active");
      });
    });
  });
}

function scrollToActiveState() {
  const links = document.querySelectorAll(
    ".sidebar-right .dropdown-container a"
  );
  const contents = document.querySelectorAll(".content-middle--content");

  function changeLinkState() {
    let index = contents.length;

    while (--index && window.pageYOffset + 150 < contents[index].offsetTop) {
      console.clear();
      console.log("scroll space: " + window.pageYOffset);
      console.log("element space: " + contents[index].offsetTop);
    }

    links.forEach((link) => {
      link.classList.remove("active");
      link.parentElement.classList.remove("block");
      link.parentElement.classList.add("none");
    });
    links[index].parentElement.classList.add("block");
    links[index].classList.add("active");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);
}
