import React, { useMemo, useState } from 'react';

import { Heading, ListingCard } from '../../../../../components';

import signupImage from '../../../../../assets/images/signupImage.png';
import css from './ExploreVerifiedCreators.module.css';
import IconCollection from '../../../../../components/IconCollection/IconCollection';

const ALL_CATEGORIES = 'All Categories';

const ExploreVerifiedCreators = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(ALL_CATEGORIES);

  const creators = useMemo(
    () => [
      {
        id: 'lena-hart',
        category: 'Creator',
        name: 'Lena Hart',
        subtitle: 'Content Creator & Entrepreneur',
        itemsCountText: '20+ items',
      },
      {
        id: 'alex-moreno',
        category: 'Athletes & Fitness',
        name: 'Alex Moreno',
        subtitle: 'Professional Football Player',
        itemsCountText: '20+ items',
      },
      {
        id: 'daniel-cross',
        category: 'Performer',
        name: 'Daniel Cross',
        subtitle: 'Film & TV Actor',
        itemsCountText: '20+ items',
      },
      {
        id: 'marco-silva',
        category: 'Athletes & Fitness',
        name: 'Marco Silva',
        subtitle: 'Former National Team Athlete',
        itemsCountText: '20+ items',
      },
      {
        id: 'alex-hawkins',
        category: 'Athletes & Fitness',
        name: 'Alex Hawkins',
        subtitle: 'Content Creator & Entrepreneur',
        itemsCountText: '20+ items',
      },
      {
        id: 'landon-riddle',
        category: 'Creator',
        name: 'Landon Riddle',
        subtitle: 'Content Creator & Entrepreneur',
        itemsCountText: '20+ items',
      },
      {
        id: 'elaina-juarez',
        category: 'Performer',
        name: 'Elaina Juarez',
        subtitle: 'Content Creator & Entrepreneur',
        itemsCountText: '20+ items',
      },
      {
        id: 'caiden-cotton',
        category: 'Creator',
        name: 'Caiden Cotton',
        subtitle: 'Content Creator & Entrepreneur',
        itemsCountText: '20+ items',
      },
    ],
    []
  );

  const filteredCreators = useMemo(() => {
    const q = query.trim().toLowerCase();
    return creators.filter(c => {
      const matchesQuery = !q || c.name.toLowerCase().includes(q);
      const matchesCategory =
        category === ALL_CATEGORIES || c.category.toLowerCase() === category.toLowerCase();
      return matchesQuery && matchesCategory;
    });
  }, [creators, query, category]);

  const uniqueCategories = useMemo(() => {
    const cats = Array.from(new Set(creators.map(c => c.category)));
    return [ALL_CATEGORIES, ...cats];
  }, [creators]);

  return (
    <section className={css.root} aria-label="Explore verified creators">
      <div className={css.inner}>
        <div className={css.headerRow}>
          <div className={css.headerText}>
            <Heading as="h2" styledAs="h2" rootClassName={css.title}>
              Explore verified creators
            </Heading>
            <p className={css.subtitle}>Discover personal items from verified creators and public figures.</p>
          </div>

          <div className={css.controls}>
            <div className={css.searchControl}>
              <span className={css.searchIcon} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.5 16.5 21 21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                className={css.searchInput}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by seller name"
                aria-label="Search by seller name"
              />
            </div>

            <select
              className={css.categorySelect}
              value={category}
              onChange={e => setCategory(e.target.value)}
              aria-label="All Categories"
            >
              {uniqueCategories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={css.grid} role="list">
          {filteredCreators.map(c => (
            <ListingCard
              key={c.id}
              className={css.card}
              variant="verifiedCreatorCollection"
              thumbnailSrc={signupImage}
              itemsCountText={c.itemsCountText}
              categoryLabel={c.category}
              creatorName={c.name}
              creatorSubtitle={c.subtitle}
              ctaText="View Collection"
              ctaHref="#"
            />
          ))}
        </div>

        <div className={css.footerLinkRow}>
          <a className={css.footerLink} href="#">
            Explore all verified creators <span aria-hidden="true"><IconCollection name="arrowRight" /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreVerifiedCreators;

