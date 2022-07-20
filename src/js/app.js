function navSide() {
    const bars = document.getElementById("burger");
    const nav = document.getElementById("navside");

    bars.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // burger animation
        bars.classList.toggle("closeBtn");
    });
}
navSide();

function searchAnime() {
    const searchBtn = document.getElementById("search_Btn");
    const searchInput = document.getElementById("search_input");

    searchBtn.addEventListener("click", () => {
        searchInput.classList.add("search-active");
        searchBtn.classList.add("search-active");
    });

    document.addEventListener("mouseup", (e) => {
        if(e.target !== searchBtn && e.target !== searchInput) {
            searchInput.classList.remove("search-active");
            searchBtn.classList.remove("search-active");
        }
    });
}
searchAnime();
