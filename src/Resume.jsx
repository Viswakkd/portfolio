import './Resume.css';
import { HiDownload } from "react-icons/hi";
import { BiSolidDownload } from "react-icons/bi";
import { ImNewTab } from "react-icons/im";
import FadeInSection from './FadeInSection';

function Resume() {
    const goToExternal = () => {
        window.open("https://drive.google.com/file/d/1jZ5UIVNEzoEmICRnm-b7VDL0-o9QGjkO", "_blank")
    };

    return (
        <FadeInSection>
            <div className="resume-box" id="resume">
                <h1>Resume</h1>
                <div className="experience">
                    <h3>OBJECTIVE</h3>
                    <div className="objective">                        
                        <p>Frontend Developer with 6 months React.js experience migrating legacy VB.NET systems. Over 2 years working with VB.NET, ADO.NET, and SQL Server on purchase management and subsidy tracking. Skilled in building reusable React components and backend integration.</p>
                    </div>                    
                    <h3>EXPERIENCE</h3>
                    <div className="prj-1">
                        <h4>Inventory management | ReactJS | Frontend Developer</h4>
                        <p>Contributing to the migration of a legacy VB.NET inventory system
                            to ReactJS. Developed reusable components, enhanced UI
                            responsiveness, and aligned frontend with existing business logic.
                            Actively part of the development team for the past six months.</p>
                    </div>
                    <div className="prj-2">
                        <h4>AgriPay | VB.NET | Software Developer</h4>
                        <p>Built a VB.NET system for a farming and irrigation firm to manage
                            sales, subsidies, invoicing, and farmer payments. Automated
                            commissions, TDS, and service payouts while ensuring financial
                            accuracy and compliance.</p>
                    </div>
                    <div className="prj-3">
                        <h4>Inventory management | VB.NET | Junior Developer</h4>
                        <p>Built and maintained Purchase Module logic using VB.NET with
                            ADO.NET and SQL Server. Focused on purchase orders, vendor and
                            inventory management, and system integration. Collaborated with
                            analysts to streamline workflows and improve system efficiency.</p>
                    </div>
                </div>
                <div className="btn-grp">
                    <div className="download">
                        <a href="https://drive.google.com/uc?export=download&id=1jZ5UIVNEzoEmICRnm-b7VDL0-o9QGjkO"
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
        </FadeInSection>
    )
}

export default Resume;