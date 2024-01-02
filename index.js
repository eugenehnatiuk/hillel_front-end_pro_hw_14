(function () {
  const imagesList = [
    {
      id: '1',
      title: 'The Hunters in the Snow',
      width: '1280',
      height: '918',
    },
    {
      id: '2',
      title: 'The Peasant Wedding',
      width: '1280',
      height: '885',
    },
    {
      id: '3',
      title: 'Peasant Dance',
      width: '1280',
      height: '891',
    },
    {
      id: '4',
      title: 'Winter Landscape with Skaters and a Bird Trap',
      width: '1280',
      height: '849',
    },
    {
      id: '5',
      title: 'Dulle Griet (Mad Meg)',
      width: '1280',
      height: '925',
    },
    {
      id: '6',
      title: 'The Fight between Carnival and Lent',
      width: '1280',
      height: '924',
    },
    {
      id: '7',
      title: 'Landscape with the Fall of Icarus',
      width: '1280',
      height: '818',
    },
    {
      id: '8',
      title: 'The Tower of Babel',
      width: '1280',
      height: '937',
    },
    {
      id: '9',
      title: 'Netherlandish Proverbs',
      width: '1280',
      height: '906',
    },
    {
      id: '10',
      title: 'The Triumph of Death',
      width: '1280',
      height: '913',
    },
  ];

  let activeIndex = 0;

  function renderImage() {
    const imageContainer = document.querySelector('.main__image-box');
    const activeImage = imagesList[activeIndex];
    const imageLink = `images/Pieter_Bruegel/${activeImage.id}.jpg`;
    const html = `<img src="${imageLink}" alt="${activeImage.title}" width="${activeImage.width}" height="${activeImage.height}">`;
    imageContainer.innerHTML = html;
  }

  renderImage();

  const forwordArrow = document.querySelector('.main__forward-arrow');
  const backwordArrow = document.querySelector('.main__back-arrow');
  backwordArrow.style.display = 'none';

  function updateArrowVisability() {
    backwordArrow.style.display = activeIndex <= 0 ? 'none' : 'inline-block';
    forwordArrow.style.display = activeIndex === imagesList.length - 1 ? 'none' : 'inline-block';
    // activeIndex <= 0
    //   ? (backwordArrow.style.display = 'none')
    //   : (backwordArrow.style.display = 'inline-block');
    // activeIndex === imagesList.length - 1
    //   ? (forwordArrow.style.display = 'none')
    //   : (forwordArrow.style.display = 'inline-block');
  }

  forwordArrow.addEventListener('click', () => {
    if (activeIndex < imagesList.length - 1) {
      activeIndex++;
      renderImage();
      updateArrowVisability();
    }
  });

  backwordArrow.addEventListener('click', () => {
    if (activeIndex > 0) {
      activeIndex--;
      renderImage();
      updateArrowVisability();
    }
  });
})();
