import React, { useState, useRef } from "react";

const HomeServcies = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef();

  const handleVideoClick = () => {
    setIsVideoPlaying((prevIsVideoPlaying) => !prevIsVideoPlaying);
    const iframe = iframeRef.current;

    if (iframe) {
      if (!isVideoPlaying) {
        // Play the video
        iframe.src += "&autoplay=1";
      } else {
        // Pause the video
        iframe.src = iframe.src.replace("&autoplay=1", "");
      }
    }
  };

  const videoWidth = isVideoPlaying ? "500px" : "200px";

  return (
    <div className="grid grid-cols-4">
      <div
        className="block fixed bottom-[1px] left-[1px] z-[1000] md:bottom-[30px] md:left-[30px] h-fit w-[200px] rounded-lg bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "
        style={{ width: videoWidth }}
      >
        <button
          id="play"
          className="absolute start-[-15px] top-[-15px] h-[30px] w-[30px] rounded-full bg-[rgba(0,0,0,0.25)] text-white hover:rotate-180 duration-200 z-[1000]"
        >
          <i className="fa-solid fa-close"></i>
        </button>
        <div className="h-full w-full overflow-hidden">
          <div className="relative px-4 pt-2">
            <p
              className="my-3 line-clamp-2 text-[#98A2B3]"
              title="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق."
            >
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
          <div className="tw-overflow-hidden tw-rounded-lg h-full w-full">
            <div className="width: 100%; height: 200px;">
              <div className="width: 100%; height: 100%;">
                <iframe
                  id="Iframe"
                  title="فيديو دعوى"
                  src="https://www.youtube.com/embed/fkEaIIAmlDs?&mute=0&controls=1&origin=https%3A%2F%2Ftknka.com&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=5"
                  allowFullScreen="1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  style={{ width: videoWidth, height: videoWidth }}
                  ref={iframeRef}
                ></iframe>
                <button
                  className=" absolute top-0 bottom-0 right-0 left-0"
                  onClick={handleVideoClick}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServcies;
