function pullDown() {

    const pullDownButton = document.getElementById("lists")
    const pullDownParents = document.getElementById("pull-down")
    const pullDownChild = document.querySelectorAll(".pull-down-list")
    const currentList = document.getElementById("current-list")

    pullDownButton.addEventListener('mouseover', function() {
        this.setAttribute("style", "background-color:blue;")
        console.log('乗った')
    })

    pullDownButton.addEventListener('mouseout', function() {
        this.removeAttribute("style", "background-color:red;")
        console.log('離れた')
    })

    pullDownButton.addEventListener('click', function() {
        if (pullDownParents.getAttribute("style") == "display:block;"){
            pullDownParents.removeAttribute("style", "display:block;")
            console.log("非表示")
        } else {
            pullDownParents.setAttribute("style", "display:block;")
            console.log("表示")
        }
        console.log('クリック')
    })

    pullDownChild.forEach(function(list) {
        list.addEventListener('click', function() {
            const value = list.innerHTML
            currentList.innerHTML = value;
            console.log(value)
        })
    })
}
    window.addEventListener('load', pullDown)