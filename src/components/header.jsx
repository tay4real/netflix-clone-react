import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Bootstrap from "react-bootstrap"
import "../netflix.css"
import Logo from "../assets/netflix-logo-png-2562.png"

class Header extends React.Component {
    hideTrailer = () => {

    }
    render() {
        return (

            <div className="d-flex" style={{ position: "absolute", top: 0 + "vh", width: 100 + "vw", height: 95 + "vh", overflow: "hidden" }}>
                <video id="trailer" width="100%" height="auto" style={{ objectFit: "cover", zIndex: 0 }} autoplay muted onEnded={this.hideTrailer()} className="d-flex">

                </video>
            </div>
        )
    }

} export default Header