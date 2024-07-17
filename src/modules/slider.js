import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

if (window.innerWidth < 768) {
   
    const swiper = new Swiper('.posts__slider', {
        // configure Swiper to use modules
        modules: [Pagination],
       
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
          },
    });
}