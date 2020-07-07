import { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'services/models/image';

const useImages = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const result = await axios.get<Image[]>(
          'http://localhost:3001/api/photo/list',
        );

        // result.data.map(data => {
        //   console.log(data);
        // });

        //  console.log(result.data);
        setImages(result.data);
      } catch (err) {
        // console.log(err);
      }
    };

    load();
  }, []);

  return { images };
};

export default useImages;
