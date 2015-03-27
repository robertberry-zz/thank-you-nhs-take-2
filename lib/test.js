(function () {
    var menuButton = document.querySelector(".js-menu-button"),
        nav = document.querySelector(".js-nav"),
        isNavOpen = false;

    menuButton.onclick = function () {
        if (isNavOpen) {
            nav.className = "nav js-nav";
        } else {
            nav.className = "nav js-nav nav--expanded";
        }

        isNavOpen = !isNavOpen;
    };
})();
