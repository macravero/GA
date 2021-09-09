const playSound = (file) => {
  let audio = new Audio(file);
  audio.play();
};

export default playSound;
