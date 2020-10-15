import React, {Component} from "react";
import "./footer.css";
import facebook from"../../icon/face.png"
import insta from"../../icon/insta.png"
import discord from"../../icon/discord.png"
import youtube from"../../icon/you.png"


class Footer extends Component {
    render(){
        return(
            <footer className="pt-5 coresletra">
                <div className="container">
                    <div className="row">
    
                        <div className="col">
                        <p>redes sociais</p>
                        <div className="row img">
                          <a href="https://www.facebook.com"><img src={facebook}></img></a>
                          <a href="https://youtube.com"> <img src={youtube}></img></a>
                          <a href="https://www.discord.com"> <img src={discord}></img></a>
                          <a href="https://www.instagram.com"> <img src={insta}></img></a>
                        </div>
                        </div>
                        <div className="col contato">
                        <p> contato: <a href="tel:05551997670000">(51) 98354467</a> </p>
                        <p>email: <a href="mailto:contato@empresa.com.br">contato@empresa.com.br</a></p>
                        </div>   
                        <p className="endereço">
                            Endereço:<br></br>
                            avenida cla <br></br>
                            </p>              
                               <div className="col"></div>
                    </div>
                </div>
                <p className="copyright py-2 ">copyright@2020 - MXPLAYBRz</p>
            </footer>
        )
    }
}

export default Footer;