import './Banner.css';
import FadeInSection from './FadeInSection';

function Banner() {
    return (
        <FadeInSection>
            <div className="content-box">
                <div className="picture-box">
                    <img src="/profile.jpg" alt="picture" />
                </div>
                <div className="details">
                    <p>Hello, I'm</p>
                    <h1>Viswabharathy V</h1>
                    <h3>ReactJs Developer</h3>
                    <div className="btn-grp" id='btn'></div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Banner;