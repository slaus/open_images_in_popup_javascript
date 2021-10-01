window.addEventListener('DOMContentLoaded', () => {
  
  /* OPEN IMAGES INTO MODAL WINDOW */
    const popupImage = (trigger, element) => {
        const workSection = document.querySelectorAll(trigger);

        workSection.forEach(gridItem => {
            const imagesBlock = gridItem.querySelectorAll(element);

            imagesBlock.forEach(image => {
                image.addEventListener('click', () => {
                    const popup = document.createElement('div'),
                          popupDiv = document.createElement('div'),
                          popupImg = document.createElement('img');

                    popupImg.setAttribute('src', image.children[0].currentSrc);
                    popupImg.setAttribute('alt', '');

                    popup.classList.add('popup');
                    if (!document.querySelectorAll('.popup').length) {
                        document.body.appendChild(popup);
                        popup.appendChild(popupDiv);
                        popupDiv.appendChild(popupImg);
                        document.querySelector('html').style.overflow = 'hidden';
                        document.body.style.overflow = 'hidden';
                    }
                });
            });


            try {
                document.body.addEventListener('click', (e) => {
                    let target = e.target;

                    if (target && target.classList.contains('popup')) {
                        document.querySelector('.popup').remove();
                        document.querySelector('html').style.overflow = '';
                        document.body.style.overflow = '';
                    }
                });
            } catch (e) {}
        });
    };

    popupImage('.grid', '.grid-item');
});
