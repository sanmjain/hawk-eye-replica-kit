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

  // अलग-अलग डाइमेंशन के लिए random width/height सेट करें
  const randomSizes = [
    { w: 'w-40 md:w-56', h: 'h-24 md:h-32' },
    { w: 'w-52 md:w-72', h: 'h-32 md:h-44' },
    { w: 'w-44 md:w-60', h: 'h-28 md:h-36' },
    { w: 'w-36 md:w-48', h: 'h-20 md:h-28' },
    { w: 'w-56 md:w-80', h: 'h-36 md:h-52' },
    { w: 'w-48 md:w-64', h: 'h-28 md:h-40' },
    { w: 'w-40 md:w-56', h: 'h-32 md:h-44' },
    { w: 'w-60 md:w-96', h: 'h-40 md:h-60' },
  ];

  return (
    <div className="relative bg-[#111112] py-6 md:py-8 overflow-hidden">
      {/* Dotted vertical stripes background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="flex h-full w-full justify-between">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full w-2 mx-6 border-r border-dotted border-white/10"
              style={{ borderRightWidth: '2px' }}
            ></div>
          ))}
        </div>
      </div>
      {/* Vignette effect on left and right */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#111112] to-transparent z-20 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#111112] to-transparent z-20 pointer-events-none"></div>
      
      {/* Single row - moving right */}
      <div className="relative z-10">
        <div className="flex items-center animate-marquee space-x-3 md:space-x-4 min-h-[100px] md:min-h-[160px]">
          {photos.concat(photos).map((photo, index) => {
            const size = randomSizes[index % randomSizes.length];
            return (
              <div key={`photo-${index}`} className="flex-shrink-0">
                <img 
                  src={photo} 
                  alt={`Seminar photo ${index + 1}`}
                  className={`${size.w} ${size.h} object-cover rounded-xl border border-hawkeye-gold/20 shadow-lg`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};