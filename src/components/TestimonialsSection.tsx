import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const testimonials = [
    {
      id: 1,
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Mickael Grants",
      position: "CEO",
      avatar: "👨‍💼", // Man with dark hair
      rating: 5
    },
    {
      id: 2,
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Mickael Grants",
      position: "CEO",
      avatar: "👨‍💼", // Man with dark hair
      rating: 5
    },
    {
      id: 3,
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Mickael Grants",
      position: "CEO",
      avatar: "🧔‍♂️", // Man with beard and reddish-brown hair
      rating: 5
    },
    {
      id: 4,
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Mickael Grants",
      position: "CEO",
      avatar: "👨‍💼",
      rating: 5
    },
    {
      id: 5,
      text: "We trust them completely with our payments. The integration was seamless, and the service is top-notch.",
      name: "Mickael Grants",
      position: "CEO",
      avatar: "🧔‍♂️",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-purple-500 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-dark-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 70%' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Client Feedbacks
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Trusted by
            <br />
            Businesses Like Yours
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: true,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-glow hover:shadow-glow-purple transition-all duration-300 h-full">
                  <div className="space-y-6">
                    {/* Testimonial Text */}
                    <div className="flex-1">
                      <p className="text-white leading-relaxed text-lg">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Client Information */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-purple-600/20 border border-primary-500/30 rounded-full flex items-center justify-center text-2xl">
                          {testimonial.avatar}
                        </div>
                        
                        {/* Name and Position */}
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.position}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 swiper-button-prev"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 swiper-button-next"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>

          {/* Custom Pagination */}
         
        </div>
      </div>


    </section>
  );
};

export default TestimonialsSection; 