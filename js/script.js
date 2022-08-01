//Loader
function startLoader () {
     let loader = document.querySelector('.loader')
     setTimeout(() => {
          loader.style.display = 'none';
     }, 1000)
} 

     startLoader()

window.addEventListener('DOMContentLoaded', () => {
     // Colling Arr from Fake database
     axios.get('https://jsonplaceholder.typicode.com/photos')
          .then(res => {
               let photos = res.data;
               reloadFeatured(photos);
               reloadWorkers(photos);
               randomImg(photos)
               console.log(photos);
          })
          .catch(err => console.log(err))
     
     
     
     // Create Feautres Box
     let points = document.querySelectorAll('.point');
     let featured_products__box = document.querySelector('.featured_products__box');
     function reloadFeatured (arr) {
          /////////////////////////////////////
          let randomInd = Math.floor(Math.random() * 100)
          let nextInd = randomInd + 4;
          let data = arr.slice(randomInd, nextInd)
          console.log(randomInd, data);
          /////////////////////////////////////
          points.forEach(element => {
               element.onclick = () => {
                    points.forEach(item => item.classList.remove('active'))
                    element.classList.add('active')
               }
          });

          featured_products__box.innerHTML = "";
          for (const item of data) {
               let featured_products_item = document.createElement('div'),
                    featured_products_item_img = document.createElement('div'),
                    img = document.createElement('img'),
                    featured_products_item_text = document.createElement('div'),
                    span = document.createElement('span'),
                    p = document.createElement('p');
               
                    featured_products_item.classList.add('featured_products_item');
                    featured_products_item_img.classList.add('featured_products_item_img');
                    featured_products_item_text.classList.add('featured_products_item_text');
                    span.classList.add('span');
                    p.classList.add('p');
               
                    img.setAttribute('src', `${item.url}`);
                    span.innerHTML = item.title;
                    p.innerHTML = item.id;
               
                    featured_products_item_img.append(img)
                    featured_products_item_text.append(span, p)
                    featured_products_item.append(featured_products_item_img, featured_products_item_text),
                    featured_products__box.append(featured_products_item);
          }
     }

     // Workers Box
     let workers_box = document.querySelector('.workers__box');
     function reloadWorkers (arr) {
          let data = arr.slice(0, 18)
          for (const item of data) {
               let  workers_products_item = document.createElement('div'),
                    img = document.createElement('img')
               
                    workers_products_item.classList.add('workers_products_item')
                    img.setAttribute('src', `${item.thumbnailUrl}`)
               
                    workers_products_item.append(img);
                    workers_box.append(workers_products_item);
          }
     }

     
})

