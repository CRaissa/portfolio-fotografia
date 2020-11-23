const Gallery = ({ images }) => (
    <div className="gallery">
      {images.map(image => {
        return (
          <div className="image" key={image}>
            <img src={image} className="image_2" />
          </div>
        );
      })}
  
      <style jsx>{`
        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-bottom: 50px;
          max-width: 900px;
          margin: 0 auto;
        }

        .gallery .image_2 {
          opacity: 1;
          display: block;
          transition: .5s ease;
          backface-visibility: hidden;
        }

        .gallery:hover .image_2 {
          opacity: 0.8;
        }

        .gallery .image {
          padding: 20px;
          width: 50%;
        }
        @media (max-width: 600px) {
          .gallery .image {
            width: auto;
            padding: 10px 20px;
          }
        }
      `}</style>
    </div>
  );
  
  export default Gallery;