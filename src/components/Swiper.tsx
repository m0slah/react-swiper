import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

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

  return (
    <div className="relative w-full max-w-5xl mx-auto bg-blue-400">
      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3} // Show 3 cards at a time
        centeredSlides={true} // Keep center card in focus
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
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
            <div className="flex justify-center px-10">
              <div
                className={`w-[300px] h-[400px] ${card.bgColor} rounded-lg p-6 shadow-lg flex flex-col justify-center items-center text-white`}
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
        className="absolute  top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black transition duration-300 flex items-center justify-center w-12 h-12"
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
