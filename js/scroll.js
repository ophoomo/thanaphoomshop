window.onscroll = () => {
    scroll();
}

const scroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('navbar').classList.add("active");
    } else {
        document.getElementById('navbar').classList.remove("active");
    }

    if (!document.getElementById('navbar').classList.contains('active') && document.getElementById('menu').classList.contains('menu_active')) {
        document.getElementById('navbar').style.background = "rgba(0,0,0,0.8)";
    } else {
        document.getElementById('navbar').style.background = "";
    }
}

