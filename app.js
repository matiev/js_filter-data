let filterLinks = document.querySelectorAll('.filter__link'),
    contentItems = document.querySelectorAll('.content__item'),
    content = document.querySelector('.content');
    const items = [...content.children];

filterLinks.forEach(item => {
    content.innerHTML = '';    
    item.addEventListener('click', event => {    
        event.preventDefault();
        filterLinks.forEach(item => item.classList.remove('active'));
        if (!item.closest('.active')) {
            item.classList.add('active');

            let iLinkData = item.getAttribute('data-link');
            // let season = content.querySelectorAll(`[data-s="${iLinkData}"]`);

            content.innerHTML = '';

            items.forEach(item => {
                if (item.getAttribute('data-s') === iLinkData) {
                    content.append(item)
                }
            })
        }
    });
});

filterLinks[0].click();