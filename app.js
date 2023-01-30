let menuLinks = document.querySelectorAll('.menu__link'),
    mainItems = document.querySelectorAll('.main__item'),
    mainInner = document.querySelector('.main__inner'),
    cloneMainItems = [...mainInner.children];

menuLinks.forEach((ml, v) => {
  ml.setAttribute('href', `#t${v+1}`)
  ml.setAttribute('data-l', `t${v+1}`)

  ml.addEventListener('click', event => {
    // event.preventDefault();
    
    mainItems.forEach(item => item.remove(item));

    menuLinks.forEach(item => item.classList.remove('menu__active'));
    if (!ml.closest('.menu__active')) {
      ml.classList.add('menu__active');
      
      cloneMainItems.forEach(item => {
        let dh = item.getAttribute('data-h');
        if (ml.getAttribute('data-l') == dh) {
          mainInner.append(item)
        }
      })
    }
  });
});
menuLinks[0].click();