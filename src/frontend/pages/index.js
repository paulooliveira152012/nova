import { useNavigate } from "react-router-dom";
import Project from "../component/projects";

const Landing = () => {
    const Navigate = useNavigate();

    return (
        <div>
            <div className="hero">
                <iframe
                    src="https://www.youtube.com/embed/iZueupRLZ5A?autoplay=1&mute=1&loop=1&playlist=iZueupRLZ5A"
                    title="Background Video"
                    frameBorder="0"
                    allow="autoplay"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                        zIndex: -1,
                    }}
                ></iframe>
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
