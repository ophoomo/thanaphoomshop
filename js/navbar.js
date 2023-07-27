
window.onresize = () => {
    if (document.body.clientWidth > 763) {
        if (document.getElementById('menu').classList.contains('menu_active')) {
            document.getElementById('menu').classList.remove('menu_active');
        }
    }
}

const toggle = () => {
    if (document.getElementById('menu').classList.contains('menu_active')) {
        document.getElementById('menu').classList.remove('menu_active');
    } else {
        document.getElementById('menu').classList.add('menu_active');
    }

    if (!document.getElementById('navbar').classList.contains('active') && document.getElementById('menu').classList.contains('menu_active')) {
        document.getElementById('navbar').style.background = "rgba(0,0,0,0.8)";
    } else {
        document.getElementById('navbar').style.background = "";
    }
}
