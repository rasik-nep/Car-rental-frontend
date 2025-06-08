import { ReactNode } from "react";
import { useImageLoad, useMultipleImageLoad } from "@/hooks/useImageLoad";
import Loading from "./Loading";
import ImageLoadingSpinner from "./ImageLoadingSpinner";

interface WithImageLoadingProps {
  children: ReactNode;
  imageSrc?: string;
  imageSources?: string[];
  fallbackComponent?: ReactNode;
  loadingMessage?: string;
  showProgress?: boolean;
}

export default function WithImageLoading({
  children,
  imageSrc,
  imageSources,
  fallbackComponent,
  loadingMessage = "Loading images...",
  showProgress = false,
}: WithImageLoadingProps) {
  // Handle single image
  const singleImageLoad = useImageLoad(imageSrc || "");

  // Handle multiple images
  const multipleImageLoad = useMultipleImageLoad(imageSources || []);

  // Determine if loading is complete
  const isLoaded = imageSrc
    ? singleImageLoad.isLoaded
    : imageSources?.length
    ? multipleImageLoad.isAllLoaded
    : true;

  if (!isLoaded) {
    if (fallbackComponent) {
      return <>{fallbackComponent}</>;
    }

    if (showProgress && imageSources?.length) {
      return (
        <ImageLoadingSpinner
          progress={multipleImageLoad.progress}
          loadedCount={multipleImageLoad.loadedCount}
          totalCount={multipleImageLoad.totalCount}
          message={loadingMessage}
        />
      );
    }

    return <Loading />;
  }

  return <>{children}</>;
}
