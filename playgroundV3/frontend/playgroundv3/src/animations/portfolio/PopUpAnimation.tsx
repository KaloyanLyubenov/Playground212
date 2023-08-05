const PopUpAnimation = (
  startX: number,
  endX: number,
  duration: number,
  delay: number
) => {
  const anim = {
    start: { y: startX },
    end: {
      y: endX,
      transition: {
        duration: duration,
        delay: delay,
        type: "spring",
      },
    },
    exit: {
      y: startX,
      transition: {
        duration: duration,
        delay: delay,
        type: "spring",
      },
    },
  };

  return anim;
};

export default PopUpAnimation;
