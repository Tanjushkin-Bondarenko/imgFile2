window.addEventListener("load", function () {
    let imgArr = ["foto1.jpg",
        "foto2.jpg",
        "foto3.jpg",
        "foto4.jpg",
        "foto5.jpg",
        "foto6.jpg",
        "foto7.jpg",
        "foto8.jpg",
        "foto9.jpg",
        "foto10.jpg"]
    let div = document.querySelector("#output")

    for (let i = 0; i < imgArr.length; i++) {
        let img = document.createElement("img");
        img.classList.add("preview")
        img.src = imgArr[i]
        div.append(img)
        img.setAttribute("name", imgArr[i])
    }
    let imgShow = document.createElement("img");
    imgShow.classList.add("show")
    div.after(imgShow)
    for (let i = 0; i < document.images.length; i++){
        document.images[i].addEventListener("click", function (e) {
            imgShow.src = e.target.name
            imgShow.style.display = "block"
        })
    }
})
