import './banner.css';

function Banner(){
return (
    <div className="content-box">
        <div className="picture-box">
            <img src="/public/profile.Jpg" alt="picture" />
        </div>
        <div className="details">
            <p>Hello, I'm</p>
            <h1>Viswabharathy V</h1>
            <h3>ReactJs Developer</h3>
            <div className="btn-grp" id='btn'></div>
        </div>
    </div>
    )
}

export default Banner;