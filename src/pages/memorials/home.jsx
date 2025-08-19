import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import PetsTribute from './PetsTribute';
import SearchPets from './SearchPets';
import PetsCard from './PetsCard';
import GriefResources from './griefresources';
import MemoryIdeas from './MemoryIdeas';
import Footer from './Footer';

const images = [
  '/images/manwithcat.jpg',
  '/images/doggy.jpg',
  '/images/duck.jpg',
];

const Home = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-screen"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-[100vh] sm:h-[60vh] md:h-[80vh] lg:h-screen object-fit bg-cover bg-center relative"
              style={{ backgroundImage: `url(${img})` }} 
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center justify-start pl-8 sm:pl-12 md:pl-20">
                <h1 className="text-white text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-left">
                  Remembering <br />
                  Our <br />
                  Beloved <br />
                  Pets
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PetsTribute />
      <SearchPets />
      <PetsCard />
      <GriefResources />
      <MemoryIdeas />
      <Footer />
    </div>
  );
};

export default Home;



