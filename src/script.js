document.addEventListener("mousemove", (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    if (Number.isNaN(mouseX)) {
        console.log(e)
    }
    let cursor = document.getElementById("cursor");
    cursor.style.setProperty("--pos-x", mouseX + "px");
    cursor.style.setProperty("--pos-y", mouseY + "px");
})


// Check if page has been scrolled in three seconds
hasScrolled = false;

function handleScroll() {
    hasScrolled = true;
    window.removeEventListener("scroll", handleScroll);
}

window.addEventListener("scroll", handleScroll);

setTimeout(() => {
    if (!hasScrolled) {
        window.removeEventListener("scroll", handleScroll);
        
        document.getElementById("what-is").scrollIntoView({ behavior: "smooth" });
    }
}, 2000);
