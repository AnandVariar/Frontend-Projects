
const accessKey = "HTc98XcOzALS8-2-R1FQ9ut6V7fLK0yLUUP10jscxj4"

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search")
const searchResult = document.getElementById("search-result")
const showMore = document.getElementById("show-more")


let keyword = ""
let page = 1

async function searchImages() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=15`;

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results;

    if(page === 1) {
        searchResult.innerHTML = ""
    }

    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small
        const ref = document.createElement("a")
        ref.href = result.links.html;
        ref.terget = "_blank"

        ref.appendChild(image)
        searchResult.appendChild(ref)
    })
    showMore.style.display = "block"
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1
    searchImages()
})

showMore.addEventListener("click", () => {
    page++
    searchImages()
})