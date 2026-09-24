import './BackgroundVideo.css';

const BackgroundVideo = () => {
    return (
        <video
            className="video-background"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/party.webm" type="video/mp4"/>
        </video>
    );
};

export default BackgroundVideo;
