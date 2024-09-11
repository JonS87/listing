import React, { useEffect, useState } from 'react';
import { Listing } from './components/Listing';
import { EtsyItem } from './types';
import { jsonData } from './data/etsy.tsx';

const App: React.FC = () => {
    const [items, setItems] = useState<EtsyItem[]>([]);

    useEffect(() => {
      try {
        // eslint-disable-next-line no-control-regex
        const sanitizedJsonData = jsonData.replace(/[\u0000-\u001F\u007F]/g, '');

        const data = JSON.parse(sanitizedJsonData);
        const filteredDate = data.filter((item: EtsyItem) => item.MainImage);
        setItems(filteredDate);
      } catch (error) {
        console.error('Ошибка при парсинге JSON:', error);
      }
        
    }, []);

    return (
      <Listing items={items} />
    );
};

export default App;
