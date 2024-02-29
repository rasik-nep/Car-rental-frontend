import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Gallery } from "react-grid-gallery";
import { images, CustomImage } from "./images";
import "yet-another-react-lightbox/styles.css";

export default function App() {
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleClick = (index: number, item: CustomImage) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  };

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={300}
      />
      <Lightbox
        open={viewerIsOpen}
        close={() => setViewerIsOpen(false)}
        index={currentImage}
        slides={images} />
    </div>
  );
}
