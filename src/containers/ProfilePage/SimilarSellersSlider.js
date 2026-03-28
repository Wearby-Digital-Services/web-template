import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { ListingCard } from '../../components';
import signupImage from '../../assets/images/signupImage.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import css from './ProfilePage.module.css';

/**
 * “Similar sellers” carousel (Swiper). Matches static grid on SSR / first paint, then hydrates to Swiper.
 *
 * @param {Object} props
 * @param {Array<Object>} props.sellers seller entries (id, category, name, subtitle, itemsCountText)
 * @param {Object} props.intl react-intl
 * @returns {JSX.Element}
 */
const SimilarSellersSlider = props => {
  const { sellers, intl } = props;
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  const ctaText = intl.formatMessage({ id: 'ProfilePage.similarSellersViewCollection' });

  const renderCard = seller => (
    <ListingCard
      className={css.similarSellersCard}
      variant="verifiedCreatorCollection"
      thumbnailSrc={signupImage}
      itemsCountText={seller.itemsCountText}
      categoryLabel={seller.category}
      creatorName={seller.name}
      creatorSubtitle={seller.subtitle}
      ctaText={ctaText}
      ctaHref="#"
      intl={intl}
    />
  );

  if (!swiperReady) {
    return (
      <div className={css.similarSellersGrid} role="list">
        {sellers.map(seller => (
          <div key={seller.id} className={css.similarSellersItem} role="listitem">
            {renderCard(seller)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={css.similarSellersSwiperOuter}
      role="region"
      aria-roledescription="carousel"
      aria-label={intl.formatMessage({ id: 'ProfilePage.similarSellersCarouselLabel' })}
    >
      <Swiper
        className={css.similarSellersSwiper}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        spaceBetween={20}
        slidesPerView={1.15}
        centeredSlides
        watchOverflow
        grabCursor
        breakpoints={{
          480: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false,
          },
        }}
      >
        {sellers.map(seller => (
          <SwiperSlide key={seller.id} className={css.similarSellersSlide}>
            <div className={css.similarSellersItem}>{renderCard(seller)}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimilarSellersSlider;
