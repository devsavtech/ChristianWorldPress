'use client';

import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { useTypingAnimation } from '@/hooks/useTypingAnimation';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Add custom styles to handle vertical gaps
const sliderStyles = `
  .slick-vertical-gap-0 .slick-list {
    margin-bottom: 0;
  }
  .slick-vertical-gap-0 .slick-track {
    margin-top: 0;
    margin-bottom: 0;
  }
  .slick-vertical-gap-0 .slick-slide {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const BookSection = ({ booksData, sectionTitle = "Best Selling Books", sectionId = "bestsellers" }: { booksData?: any[], sectionTitle?: string, sectionId?: string }) => {
  const { displayedText, isTyping, sectionRef } = useTypingAnimation(sectionTitle);
  
  const books = booksData || [
    {
      id: 1,
      image: '/bestsellingbooks/apracticalguidetosoulwinning.jpg',
      title: 'God Changes Us',
      author: 'Cherri S Wheeler',
      rating: 5,
      reviews: 3,
      price: 12.95,
      link: 'https://www.amazon.com/dp/1969506717?ref=cm_sw_r_ffobk_cp_ud_dp_35Y94TDN0K9WZ8ENVXFQ&ref_=cm_sw_r_ffobk_cp_ud_dp_35Y94TDN0K9WZ8ENVXFQ&social_share=cm_sw_r_ffobk_cp_ud_dp_35Y94TDN0K9WZ8ENVXFQ&bestFormat=true'
    },
    {
      id: 2,
      image: '/bestsellingbooks/chosenfamily.jpg',
      title: 'Chosen Family',
      author: 'Hope Sprit Redemption',
      rating: 5,
      reviews: 2,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B09QTRKS7B/ref=cm_sw_r_em_ap_atc_dp_8NT7QSBJQG25M7F7355C'
    },
    {
      id: 3,
      image: '/bestsellingbooks/godchangesus.jpg',
      title: 'God Changes Us',
      author: 'Cherri S Wheeler',
      rating: 5,
      reviews: 3,
      price: 12.95,
      link: 'https://www.amazon.com/dp/1969506717?ref=cm_sw_r_ffobk_cp_ud_dp_35Y94TDN0K9WZ8ENVXFQ&ref_=cm_sw_r_ffobk_cp_ud_dp_35Y94TDN0K9WZ8ENVXFQ&social_share=cm_sw_r_ffobk_cp_ud_dp_35Y94TDN0K9WZ8ENVXFQ&bestFormat=true'
    },
    {
      id: 4,
      image: '/bestsellingbooks/godsecret.jpg',
      title: 'God Secret',
      author: 'Timothy Alberino',
      rating: 5,
      reviews: 1,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
    },
    {
      id: 5,
      image: '/bestsellingbooks/inhisimage.jpg',
      title: 'In His Image',
      author: 'Timothy Alberino',
      rating: 5,
      reviews: 1,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
    },
    // {
    //   id: 6,
    //   image: '/bestsellingbooks/insightsfromtheheartsofashepheard.jpg',
    //   title: 'Insights from the Hearts of a Shepheard',
    //   author: 'Shepherd David Mubita',
    //   rating: 5,
    //   reviews: 2,
    //   price: 12.95,
    //   link: 'https://www.amazon.com/dp/B08XKVMSBD/ref=cm_sw_r_em_ap_atc_dp_ZMBVGKFSMA85FG8556RV'
    // },
    {
      id: 7,
      image: '/bestsellingbooks/livingalifeinbalance.jpg',
      title: 'Living a Life in Balance',
      author: 'Timothy Alberino',
      rating: 5,
      reviews: 1,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
    },
    {
      id: 8,
      image: '/bestsellingbooks/prayingwithdavid.jpg',
      title: 'Praying with David',
      author: 'Timothy Alberino',
      rating: 5,
      reviews: 1,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
    },
     {
      id: 9,
      image: '/bestsellingbooks/thecarpetcleaner.jpg',
      title: 'The Carpet Cleaner',
      author: 'Timothy Alberino',
      rating: 5,
      reviews: 1,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
    },
     {
      id: 10,
      image: '/bestsellingbooks/thelifeframework.jpg',
      title: 'The Life Framework',
      author: 'Timothy Alberino',
      rating: 5,
      reviews: 1,
      price: 12.95,
      link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-3 h-3 fill-yellow-500"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
    );
  };

  const CustomPrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white hover:bg-red-700 rounded-full p-2 shadow-lg transition-all duration-200 !m-0 !w-auto !h-auto !flex !items-center !justify-center"
        onClick={onClick}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
    );
  };

  const CustomNextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white hover:bg-red-700 rounded-full p-2 shadow-lg transition-all duration-200 !m-0 !w-auto !h-auto !flex !items-center !justify-center"
        onClick={onClick}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
    draggable: true,
    swipeToSlide: true,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <style>{sliderStyles}</style>
      <section ref={sectionRef} id={sectionId} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="text-center mb-0 sm:mb-0 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground uppercase tracking-wider mb-0 sm:mb-0.5 min-h-[1.2em]">
            {displayedText || " "}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>
        
        <Slider {...sliderSettings} className="slick-vertical-gap-0">
          {books.map((book) => (
            <div key={book.id} className="px-0">
              <div className="group relative overflow-hidden rounded">
                <div className="flex flex-col items-center p-0">
                  {/* Book Image */}
                  <div className="relative w-48 mb-0 flex justify-center">
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="h-60 object-contain"
                    />
                  </div>

                  <div className="text-center">
                    {/* Book Title */}
                    <h3 className="font-serif font-bold text-base sm:text-lg text-foreground mb-0 line-clamp-2 group-hover:text-accent transition-colors">
                      {book.title}
                    </h3>
                    
                    {/* Author */}
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      by {book.author}
                    </p>

                    {/* Rating and Reviews */}
                    <div className="flex justify-center items-center gap-0 mb-2">
                      <StarRating rating={book.rating} />
                      <span className="text-[10px] text-muted-foreground ml-1">
                        ({book.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex justify-center items-center gap-0 mb-2">
                      <span className="text-lg font-bold text-accent">
                        ${book.price}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        ${book.originalPrice}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <Link href={book.link || `/book/${book.id}`} className="block w-full">
                      <button className="w-40 h-10 bg-primary text-primary-foreground font-semibold py-2.5 px-4 rounded transition-all duration-200 hover:bg-primary/90 uppercase text-xs tracking-wide mt-2 mx-auto">
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </>
  );
};

export default BookSection;