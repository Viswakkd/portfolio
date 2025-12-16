import './skills.css';
import FadeInSection from './FadeInSection';

function Skills() {
    return (
        <FadeInSection>
            <div id="skills">
                <h1>Skills</h1>
                <div className="skill-content">
                    <div className="skill-box"><img src="./html.svg" /><span>HTML</span></div>
                    <div className="skill-box"><img src="./css3.svg" /><span>CSS</span></div>
                    <div className="skill-box"><img src="./js.svg" /><span>JS</span></div>
                    <div className="skill-box"><img src="./react.svg" /><span>React</span></div>
                    <div className="skill-box"><img src="./sql.svg" /><span>SQL</span></div>
                    <div className="skill-box"><img src="./vb.svg" /><span>VB.NET</span></div>
                </div>
                <h4>Tools</h4>
                <div className="tools">
                    <div className="skill-box"><img src="./git.svg" /><span>Git</span></div>
                    <div className="skill-box"><img src="./github.svg" /><span>GitHub</span></div>
                    <div className="skill-box"><img src='./vscode.svg' /><span>VS Code</span></div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Skills;