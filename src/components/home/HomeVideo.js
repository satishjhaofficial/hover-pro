import React,{useState} from 'react';
import ModalVideo from 'react-modal-video';

export default function HomeVideo() {
    const [isOpen, setOpen] = useState(false);

    return (
        <section className='home-video-sec'>
            <div className='home-video-box'>
                <img src="/img/video-image.png" />
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
			    <div className='home-video-btn'>
                    <button className="btn-primary" onClick={()=> setOpen(true)}><img src='/img/play-button.png' alt='Play Button' /></button>
                </div>
            </div>
        </section>
    );
}