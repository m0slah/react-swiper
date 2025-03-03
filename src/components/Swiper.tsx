import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";

const cards = [
  {
    title: "Card 1",
    description: "This is the first card.",
    bgColor: "bg-blue-500",
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    bgColor: "bg-red-500",
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    bgColor: "bg-green-500",
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    bgColor: "bg-yellow-500",
  },
  {
    title: "Card 5",
    description: "This is the fifth card.",
    bgColor: "bg-purple-500",
  },
  {
    title: "Card 6",
    description: "This is the sixth card.",
    bgColor: "bg-pink-500",
  },
];

const TheSwiper = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-2">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper?.params?.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center px-2 transition-all">
              <div
                className={`rounded-lg p-6 shadow-lg flex flex-col justify-center items-center text-white transition-all duration-300
                  ${
                    activeIndex === index
                      ? "scale-110 w-[350px] h-[400px] shadow-xl"
                      : "scale-90 w-[250px] h-[350px] opacity-75"
                  }
                  ${card.bgColor}`}
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-sm mt-2">{card.description}</p>
                <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black transition duration-300 flex items-center justify-center w-12 h-12"
      >
        ❮
      </button>

      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black transition duration-300 flex items-center justify-center w-12 h-12"
      >
        ❯
      </button>
    </div>
  );
};

export default TheSwiper;
