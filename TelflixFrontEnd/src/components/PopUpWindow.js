import { Container,Row,Button} from "react-bootstrap";


function PopUpWindow (props) {
    return(
        <section className="popUp"style={{ top:'15%', left:'50%'}}>
            <Container>
                <Row><h2>{props.movie.Title}</h2></Row>
                <Row><img src={props.movie.Poster_Url} alt={""} width={"30%"} heigth={"30%"}></img></Row>
                <Button variant="danger" size="sm" style={{top:'50%'}} onClick={() => props.onAdd(props.movie)}>Favoritos</Button>
                <Row><h4>{props.movie.Overview}</h4></Row>
                <Row><h4>{"Generos: "+props.movie.Genre}</h4></Row>
                <Row><h4>{"Año de estreno: "+props.movie.Release_Date}</h4></Row>
                <Row><h4>{"Idioma Original: "+props.movie.Original_Language}</h4></Row>
                <Row><h4>{"Reparto: NO DISPONIBLE"}</h4></Row>
                
                <Row><Button variant="danger" size="sm" style={{top:'50%'}} onClick={() => props.closePopUp()}>Cerrar</Button></Row>
            </Container>
        </section>
    )
}

export default PopUpWindow