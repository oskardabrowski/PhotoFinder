
async function searchImage() {
    const ImagesCardContainer = document.querySelector('.ImagesCardContainer');
    const ImageNameInput = document.querySelector('.ImageNameInput');
    let name = ImageNameInput.value;
    if(name != '') {
        ImagesCardContainer.innerHTML = '';
        const data = await fetch(`https://api.unsplash.com/search/photos?client_id=EDnmS8IiTXOXtCKOUuQEDI174eyu14RKLdnwX600NgE&query=${name}`);
        const jsondata = await data.json();
        const photos = await jsondata.results;
        photos.forEach(el => {
            const markup = `<div class="card">
                <img src="${el.urls.regular}"></img>
                <a href="${el.links.download}" download class="card-download">Download</a>
            </div>`;
            ImagesCardContainer.insertAdjacentHTML('beforeend', markup);
        });
    } else {
        alert('You should write something')
    }
    
}

function SearchBtn() {
    return (
        <button className="searchBtn" onClick={() => searchImage()}>
            <svg viewBox="0 0 24 24">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        </button>
    )
}

export default SearchBtn;