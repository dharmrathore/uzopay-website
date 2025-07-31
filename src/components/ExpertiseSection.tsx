import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check, Smartphone, Server, Key, CreditCard, Laptop, Database } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ExpertiseSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const expertiseCards = [
    {
      id: 1,
      title: "UPI Autopay",
      description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
      icon: "smartphone",
      color: "green"
    },
    {
      id: 2,
      title: "API Banking",
      description: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
      icon: "network",
      color: "blue"
    },
    {
      id: 3,
      title: "Payouts",
      description: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
      icon: "server",
      color: "purple"
    },
    {
      id: 4,
      title: "Bulk Payments",
      description: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
      icon: "bulk",
      color: "green"
    }
  ];

  const renderIcon = (icon: string, color: string) => {
    const baseClasses = "w-16 h-16 rounded-lg flex items-center justify-center";
    const colorClasses = {
      green: "bg-green-500/20 border border-green-500/30",
      blue: "bg-blue-500/20 border border-blue-500/30",
      purple: "bg-purple-500/20 border border-purple-500/30"
    };

    switch (icon) {
      case "smartphone":
        return (
          <div className={`${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} relative`}>
            <Smartphone className="text-white" size={32} />
            <div className="absolute -bottom-1 -right-1 w-8 h-5 bg-purple-600 rounded-sm border border-white/20"></div>
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-green-500/10 animate-pulse"></div>
          </div>
        );
      case "network":
        return (
          <div className={`${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} relative`}>
            <div className="grid grid-cols-2 gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            </div>
            <Laptop className="absolute text-white" size={24} />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg"></div>
          </div>
        );
      case "server":
        return (
          <div className={`${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} relative`}>
            <div className="flex flex-col gap-1">
              <div className="w-8 h-2 bg-blue-500 rounded-sm"></div>
              <div className="w-8 h-2 bg-purple-600 rounded-sm"></div>
              <div className="w-8 h-2 bg-blue-500 rounded-sm"></div>
            </div>
            <Key className="absolute -top-2 -right-2 text-white" size={20} />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-600/20 rounded-lg"></div>
          </div>
        );
      case "bulk":
        return (
          <div className={`${baseClasses} ${colorClasses[color as keyof typeof colorClasses]} relative`}>
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
            </div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-12 h-8 bg-green-500/30 rounded-lg border border-green-500/50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent rounded-lg"></div>
          </div>
        );
      default:
        return <div className={`${baseClasses} ${colorClasses[color as keyof typeof colorClasses]}`}></div>;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-dark-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/10 via-transparent to-transparent" style={{ backgroundPosition: '80% 70%' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gray-400 text-lg font-medium">Our Expertise</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-2"></div>
          </div>
          <h2 className="hero-title text-4xl sm:text-5xl lg:text-[55px] heading-title font-medium leading-tight text-white">
            Redefining Payment <br/> Processing for You
          </h2>
        </div>

        {/* Expertise Cards Slider */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.expertise-pagination',
            }}
            navigation={{
              nextEl: '.expertise-button-next',
              prevEl: '.expertise-button-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 4,
                centeredSlides: false,
              },
            }}
            className="expertise-swiper"
          >
            {expertiseCards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 lg:p-8 shadow-glow hover:shadow-glow-purple transition-all duration-300 relative group h-full">
                  {/* Checkmark Icon */}
                  <div className="absolute top-4 right-4 w-6 h-6 bg-white/10 rounded-md flex items-center justify-center">
                    <Check className="text-white" size={16} />
                  </div>

                  {/* Main Icon */}
                  <div className="mb-6">
                    {renderIcon(card.icon, card.color)}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button 
                    className="mt-6 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    aria-label={`Learn more about ${card.title}`}
                  >
                    <ArrowRight className="text-white" size={16} />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button 
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 expertise-button-prev"
              aria-label="Previous card"
            >
              <ChevronLeft className="text-white" size={20} />
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 expertise-button-next"
              aria-label="Next card"
            >
              <ChevronRight className="text-white" size={20} />
            </button>
          </div>

          {/* Custom Pagination */}
          <div className="expertise-pagination flex justify-center items-center space-x-2 mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection; 