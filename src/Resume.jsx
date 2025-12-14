import './resume.css';
import { HiDownload } from "react-icons/hi";
import { BiSolidDownload } from "react-icons/bi";
import { ImNewTab } from "react-icons/im";

function Resume(){
    const goToExternal = () => {
        window.open("https://drive.google.com/file/d/1k-NgLtMdHDt-SHIH5ZstVbfkcL4YTICM/view?usp=drivesdk","_blank")
    };

    return (
        <div className="resumeBox" id="resume">
            <h1>Resume</h1>
            <div className="objective">
                <h3>Objective</h3>
                <p>Frontend Developer with 6 months React.js experience migrating legacy VB.NET systems. Over 2 years working with VB.NET, ADO.NET, and SQL Server on purchase management and subsidy tracking. Skilled in building reusable React components and backend integration.</p>                
            </div>            
            <div className="btnGrp">
                <div className="download">
                    <a href="https://drive.google.com/uc?export=download&id=1k-NgLtMdHDt-SHIH5ZstVbfkcL4YTICM"
                        target="_blank"
                        rel="noopener noreferrer">                                        
                        <button id="download-btn" ><BiSolidDownload />Download</button>
                    </a>
                </div>
                <div className="preview">
                    <button id="preview-btn" onClick={goToExternal} ><ImNewTab />Preview</button>
                </div>
            </div>
        </div>
    )
}

export default Resume;