import React from 'react';
import { EtsyItem } from '../../types';
import styles from './Listing.module.css';

interface ListingProps {
    items?: EtsyItem[];
}

export const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  return (
    <div className={styles["item-list"]}>
      {items.map(item => (
        <div className={styles["item"]} key={item.listing_id}>
          <div className={styles["item-image"]}>
            <a href={item.url}>
              <img src={item.MainImage.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className={styles["item-details"]}>
            <p className={styles["item-title"]}>
              {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
            </p>
            <p className={styles["item-price"]}>
              {item.currency_code === 'USD' ? `$${parseFloat(item.price).toFixed(2)}` :
                item.currency_code === 'EUR' ? `€${parseFloat(item.price).toFixed(2)}` :
                `${parseFloat(item.price).toFixed(2)} ${item.currency_code}`}
            </p>
            <p className={`${styles['item-quantity']} ${styles[`level-${getQuantityLevel(item.quantity)}`]}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const getQuantityLevel = (quantity: number): string => {
    if (quantity <= 10) return 'low';
    if (quantity <= 20) return 'medium';
    return 'high';
};
