import './Skils.css';
import FadeInSection from './FadeInSection';

function Skils() {
    return (
        <FadeInSection>
            <div id="skils">
                <h1>Skils</h1>
                <div className="skil-content">
                    <div className="skil-box"><img src="./html.svg" />HTML</div>
                    <div className="skil-box"><img src="./css3.svg" />CSS</div>
                    <div className="skil-box"><img src="./js.svg" />Js</div>
                    <div className="skil-box"><img src="./react.svg" />ReactJs</div>
                    <div className="skil-box"><img src="./sql.svg" />SQL</div>
                    <div className="skil-box"><img src="./vb.svg" />VB.NET</div>
                </div>
                <h4>Tools</h4>
                <div className="tools">
                    <div className="skil-box"><img src="./git.svg" />Git</div>
                    <div className="skil-box"><img src="./github.svg" />GitHub</div>
                    <div className="skil-box"><img src='./vscode.svg' />VS Code</div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Skils;