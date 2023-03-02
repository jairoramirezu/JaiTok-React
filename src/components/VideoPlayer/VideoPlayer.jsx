import clsx from 'clsx';
import { useRef, useState } from 'react';
import styles from './VideoPlayer.module.css'
const SRC = 'https://images.jairoramirezu.com/vidExample.mp4'


export default function VideoPlayer () {
  const [playing, setPlaying] = useState(false);
  const video = useRef(null);

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()
      setPlaying(!playing)
  }

  const playerClassName = clsx (styles.player, {
    [styles.hidden]: playing,
  })

  return (
    <div>
      <video
        className={styles.video}
        src={SRC}
        controls={false}
        ref={video}
        onClick={handlePlay}
      />
      <i className={playerClassName} onClick={handlePlay} />
    </div>
  )
}
