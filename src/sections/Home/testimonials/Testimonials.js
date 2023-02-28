import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper";

import SVGHeader from "../../../components/SVGHeader/SVGHeader";
import { Box } from "@mui/material";
import Testimonial from "../../../components/Testimonial/Testimonial";
import useResponsive from "../../../hooks/useResponsive";

const Testimonials = () => {
  const isDesktop = useResponsive("up", "lg");

  const [activeIndex, setActiveIndex] = useState(0);
  const updateSlides = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  let array = [
    "https://images.unsplash.com/photo-1518762837157-1709b5d236b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518762837157-1709b5d236b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518762837157-1709b5d236b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518762837157-1709b5d236b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518762837157-1709b5d236b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  ];

  let testimonials = [
    {
      person: "Louis Brocker",
      message:
        "great, learned a lot. we already started a bigger project",
      cover:
        "https://media.licdn.com/dms/image/C4E03AQFhaclZIfBfgA/profile-displayphoto-shrink_800_800/0/1516240488280?e=2147483647&v=beta&t=3u8LTTN3JM_qpxS5Cphfdo7FNXTRNOyRLDOEh1bE5YA",
    },
    {
      person: "Todd Zemek",
      message:
        "Excellent job. Patiently supported getting every aspect of the job working perfectly. Brilliant level of professional support.",
      cover:
        "https://i0.wp.com/toddzemek.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-11-at-10.43.42-pm.png?w=1076&ssl=1",
    },
    {
      person: "Todd Zemek",
      message:
        "Fantastic work! So reliable. Grateful for such a professional job and great attention to detail. Highly recommended!!!",
      cover:
      "https://i0.wp.com/toddzemek.com/wp-content/uploads/2022/09/Screen-Shot-2022-09-11-at-10.43.42-pm.png?w=1076&ssl=1",
    },
   
  ];

  return (
    <Box my={10} mb={isDesktop ? 20 : 5}>
      <SVGHeader
        heading="People With Love"
        text="Checkout what our client has to say about us."
      />
      <Swiper
        spaceBetween={50}
        slidesPerView={isDesktop ? 3 : 1}
        speed={1000}
        autoplay={{
          // delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ marginTop: isDesktop ? 100 : 30 }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={(swiper) => updateSlides(swiper)}
      >
        {testimonials.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <Testimonial
                image={slide.cover}
                person={slide.person}
                message={slide.message}
                activeIndex={activeIndex}
                index={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Testimonials;
