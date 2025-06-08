import { useState, useEffect } from "react";

export const useImageLoad = (imageSrc: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!imageSrc) {
      setIsLoaded(true);
      return;
    }

    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };

    img.onerror = () => {
      setHasError(true);
      setIsLoaded(true); // Consider it "loaded" even with error to prevent infinite loading
    };

    img.src = imageSrc;

    // Cleanup function
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc]);

  return { isLoaded, hasError };
};

export const useMultipleImageLoad = (imageSources: string[]) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isAllLoaded, setIsAllLoaded] = useState(false);

  useEffect(() => {
    if (imageSources.length === 0) {
      setIsAllLoaded(true);
      return;
    }

    let loadedImages = 0;

    const imagePromises = imageSources.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();

        const handleLoad = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          resolve();
        };

        img.onload = handleLoad;
        img.onerror = handleLoad; // Still resolve on error to prevent hanging
        img.src = src;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsAllLoaded(true);
    });

    // Cleanup
    return () => {
      setLoadedCount(0);
      setIsAllLoaded(false);
    };
  }, [imageSources]);

  return {
    loadedCount,
    totalCount: imageSources.length,
    isAllLoaded,
    progress:
      imageSources.length > 0 ? (loadedCount / imageSources.length) * 100 : 100,
  };
};
