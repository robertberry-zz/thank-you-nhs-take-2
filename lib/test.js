(function () {
    var menuButton = document.querySelector(".js-menu-button"),
        nav = document.querySelector(".js-nav"),
        isNavOpen = false;

    function contains(xs, x) {
        var xn, i;
        
        for (i = 0, xn = xs.length; i < xn; ++i) {
            if (xs[i] === x) return true;
        }

        return false;
    }

    function without(xs, x) {
        var acc = [], i, xn;

        for (i = 0, xn = xs.length; i < xn; ++i) {
            if (xs[i] !== x) acc.push(xs[i]);
        }

        return acc;
    }
    
    function setClass(element, className, on) {
        var classes = element.className.split(" ");

        if (on) {
            if (!contains(classes, className)) {
                element.className = element.className + " " + className;
            }
        } else {
            element.className = without(classes, className).join(" ");
        }
    }

    menuButton.onclick = function () {
        if (isNavOpen) {
            setClass(nav, "nav--expanded", false);
            setClass(menuButton, "header__menu-button--closed", true);
            setClass(menuButton, "header__menu-button--opened", false);
        } else {
            setClass(nav, "nav--expanded", true);
            setClass(menuButton, "header__menu-button--closed", false);
            setClass(menuButton, "header__menu-button--opened", true);
        }

        isNavOpen = !isNavOpen;
    };
})();
