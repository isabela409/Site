const upload = document.getElementById('upload');
const gallery = document.getElementById('gallery');

// Adiciona imagem ao clicar no input
upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imgURL = event.target.result;
      addImageToGallery(imgURL);
    };
    reader.readAsDataURL(file);
  }
});

function addImageToGallery(imgURL) {
  const pin = document.createElement('div');
  pin.classList.add('pin');
  const img = document.createElement('img');
  img.src = imgURL;
  pin.appendChild(img);
  gallery.appendChild(pin);
}

// Imagens iniciais
const initialImages = [
  'https://source.unsplash.com/300x400/?nature',
  'https://source.unsplash.com/300x500/?travel',
  'https://source.unsplash.com/300x450/?art',
  'https://source.unsplash.com/300x350/?food',
  'https://source.unsplash.com/300x600/?technology',
  'https://source.unsplash.com/300x400/?city'
];

initialImages.forEach(url => addImageToGallery(url));
