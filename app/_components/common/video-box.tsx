import "node_modules/react-modal-video/scss/modal-video.scss";
import { Dispatch, SetStateAction } from "react";
import ModalVideo from "react-modal-video";

interface VideoBoxProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const VideoBox = ({ isOpen, setOpen }: VideoBoxProps) => {
  return (
    <ModalVideo
      channel="youtube"
      youtube={{ mute: 0, autoplay: 1 }}
      isOpen={isOpen}
      videoId="K24hSj-SO0A"
      onClose={() => setOpen(false)}
    />
  );
};

export default VideoBox;
