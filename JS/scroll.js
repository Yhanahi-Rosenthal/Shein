const menu = document.getElementsByClassName("header-sticky")

window.onscroll = () =>{
    sticky()
}

function sticky(){
    if(window.pageYOffset === 2){
        menu.style.opacity = "0"
        menu.style.visibility = "visible"
    }else{
        menu.style.opacity = "1"
        menu.style.visibility = "hidden"
    }
}

