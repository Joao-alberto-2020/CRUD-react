import React, {Component} from "react"
import "./home.css"
import Ra from"../../icon/R.png";
import Tri from"../../icon/tri.png";
import Ham from"../../icon/ham.png";
import Apl from"../../icon/apl.png";

class Home extends Component {
    render(){
        return(
            <div className="home container">
               <p className="titulo">Home</p>
              
               <div className="row">
                   <div className="col-3"><img id="fota" className="foto" src={Ra}></img></div>
                   <div className="col-3"><img className="foto" src={Tri}></img></div>
                   <div className="col-3"><img className="foto" src={Ham}></img></div>
                   <div className="col-3"><img className="foto" src={Apl}></img></div>
                   </div>

                   <div className="row mt-5">
                       <div className="col-6 mr-3 text-center borda">
                           info 1
                           <p>texto 1</p>
                           <p>texto 2</p>
                           <p>texto 3</p>
                           <p>texto 4</p>
                           <p>texto 5</p>
                       </div>
                       <div className="col-5 text-center borda">
                            info 2
                       </div>
                   </div>
               </div>

            
           
        )
    }
}

export default Home;











