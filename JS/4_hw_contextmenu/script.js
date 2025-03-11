const menu = document.getElementById("context-menu");

// Відкриття меню по правому кліку
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    menu.style.top = event.clientY + "px";
    menu.style.left = event.clientX + "px";
    menu.style.display = "block";
});

// Закриття меню по кліку будь-де
document.addEventListener("click", () => {
    menu.style.display = "none";
});

// Зміна фону по кліку на пункт меню
document.querySelectorAll(".menu-item").forEach(item => {
    item.addEventListener("click", () => {
        const color = item.getAttribute("data-color");
        document.body.style.backgroundColor = color;
        menu.style.display = "none";
    });
});

