import seminarPhotos from "@/assets/seminar-photos.jpg";

export const PhotoMarquee = () => {
  // Sample photos array - creating desynchronized animation
  const photos = [
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
  ];

  return (
    <div className="bg-hawkeye-black py-6 md:py-8 overflow-hidden relative">
      {/* Vignette effect on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-hawkeye-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-hawkeye-black to-transparent z-10 pointer-events-none"></div>
      
      {/* Top row - moving right */}
      <div className="flex animate-marquee space-x-3 md:space-x-4 mb-3 md:mb-4">
        {photos.concat(photos).map((photo, index) => (
          <div key={`top-${index}`} className="flex-shrink-0">
            <img 
              src={photo} 
              alt={`Seminar photo ${index + 1}`}
              className="w-48 h-28 md:w-64 md:h-40 object-cover rounded-xl border border-hawkeye-gold/20 shadow-lg"
            />
          </div>
        ))}
      </div>
      
      {/* Bottom row - moving left with different speed */}
      <div className="flex animate-marquee-reverse space-x-3 md:space-x-4">
        {photos.concat(photos).map((photo, index) => (
          <div key={`bottom-${index}`} className="flex-shrink-0">
            <img 
              src={photo} 
              alt={`Seminar photo ${index + 1}`}
              className="w-48 h-28 md:w-64 md:h-40 object-cover rounded-xl border border-hawkeye-gold/20 shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};