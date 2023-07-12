const link = document.querySelectorAll('img')

link[0].addEventListener("click", () => {
    openlink("http://127.0.0.1:5500/stickyNotes/")
})
link[1].addEventListener("click", () => {
    openlink("http://127.0.0.1:5500/quoteGenerator/")
})
link[2].addEventListener("click", () => {
    openlink("http://127.0.0.1:5500/ToDoList/")
})
link[3].addEventListener("click", () => {
    openlink("http://127.0.0.1:5500/clock/")
})
link[4].addEventListener("click", () => {
    openlink("http://127.0.0.1:5500/imageCarousel/")
})

function openlink(link){
    window.open(link)
}