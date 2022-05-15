import {Button} from "react-bootstrap"

function Fav (props) {
    return(
        <div className="fav" style={{ top:'15%', left:'50%'}}>
            <h1><Button variant={props.color} size="m" onClick={() => props.setF()}>Lista de pelis favoritas</Button></h1> 
        </div>
    )
}
export default Fav