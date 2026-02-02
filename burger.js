function Menu(){
    var menuPanel = document.querySelector(".menu-panel");

    if (menuPanel.style.display === "none" || menuPanel.style.display === "" ){
        menuPanel.style.display = "flex";
    }
    else{
        menuPanel.style.display = "none" ;
    }

    if (menuPanel.classList.contains("show-menu")){
        menuPanel.classList.remove("show-menu");
    }
    else{
        menuPanel.classList.add("show-menu");
    }
}