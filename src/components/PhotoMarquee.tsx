import seminarPhotos from "@/assets/seminar-photos.jpg";

export const PhotoMarquee = () => {
  // Sample photos array - in real implementation these would be individual photos
  const photos = [
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
    seminarPhotos,
  ];

  return (
    <div className="bg-hawkeye-black py-8 overflow-hidden">
      <div className="flex animate-marquee space-x-4">
        {photos.concat(photos).map((photo, index) => (
          <div key={index} className="flex-shrink-0">
            <img 
              src={photo} 
              alt={`Seminar photo ${index + 1}`}
              className="w-64 h-40 object-cover rounded-lg border border-hawkeye-gold/20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};