import React from 'react';

import { LayoutSingleColumn, Page } from '../../components';
import TopbarContainer from '../TopbarContainer/TopbarContainer';
import FooterContainer from '../FooterContainer/FooterContainer';

import { useIntl } from '../../util/reactIntl';

import css from './FaqBuyerPage.module.css';

const FAQ_ITEM_KEYS = [
  'whatIsWearby',
  'authentic',
  'whoShips',
  'shippingPaidBy',
  'condition',
  'customs',
  'process',
  'paymentsSecure',
  'returns',
  'shippingTime',
  'international',
  'contactSeller',
  'issue',
  'oneItem',
];

const ChevronIcon = props => {
  return (
    <svg
      className={props.className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5.5 8L10 12.5L14.5 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const FaqBuyerPage = () => {
  const intl = useIntl();
  const faqItems = FAQ_ITEM_KEYS.map(key => ({
    question: intl.formatMessage({ id: `FaqBuyerPage.items.${key}.question` }),
    answer: intl.formatMessage({ id: `FaqBuyerPage.items.${key}.answer` }),
  }));

  return (
    <Page title={intl.formatMessage({ id: 'FaqBuyerPage.pageTitle' })} scrollingDisabled={false}>
      <LayoutSingleColumn
        mainColumnClassName={css.layoutWrapperMain}
        topbar={<TopbarContainer />}
        footer={<FooterContainer />}
      >
        <div className={css.root}>
          <header className={css.hero}>
            <div className={css.heroInner}>
              <div className={css.eyebrow}>{intl.formatMessage({ id: 'FaqBuyerPage.eyebrow' })}</div>
              <h1 className={css.title}>{intl.formatMessage({ id: 'FaqBuyerPage.title' })}</h1>
              <p className={css.subtitle}>{intl.formatMessage({ id: 'FaqBuyerPage.subtitle' })}</p>
            </div>
          </header>

          <main className={css.main}>
            <div className={css.content}>
              <div className={css.faqList} role="list">
                {faqItems.map(item => (
                  <details key={item.question} className={css.faqItem}>
                    <summary className={css.faqSummary}>
                      <span className={css.question}>{item.question}</span>
                      <span className={css.iconWrap} aria-hidden="true">
                        <ChevronIcon className={css.chevron} />
                      </span>
                    </summary>
                    <div className={css.answer} role="listitem">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </main>
        </div>
      </LayoutSingleColumn>
    </Page>
  );
};

export default FaqBuyerPage;