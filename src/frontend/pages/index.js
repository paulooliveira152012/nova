import { useNavigate } from "react-router-dom";
import Project from "../component/projects";

const Landing = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <div className="hero">
                <video
                    className="backgroundVideo"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -1,
                    }}
                >
                    <source
                        src="https://novapg.s3.us-east-2.amazonaws.com/hero.mov"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="phraseContainer" style={{ position: "relative" }}>
                    <h1>Nova <br /></h1>
                    <h2>Your vision, our innovation</h2>
                </div>
            </div>
            
            {/* projects */}
            <Project />
        </div>
    );
};

export default Landing;
