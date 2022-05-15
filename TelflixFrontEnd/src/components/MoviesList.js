import { Container, Row, Col, Button} from "react-bootstrap"

function MoviesList (props) {
    return (
        <section id='moviesList' style={{ top:'15%', left:'50%'}}>
            <Container>
                <Row>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.movies.map((movie, index) => (
                                    <div key={index} className='row'>
                                        <Row>
                                        <Col><h2>{movie.Title}</h2></Col>
                                            <Col><h4>{movie.Overview.slice(0,100)+"..."}</h4></Col>
                                            <Col><img src={movie.Poster_Url} alt={""} width={"100%"} heigth={"100%"}></img></Col>
                                            <Col><Button variant="danger" size="sm" style={{top:'50%'}} onClick={() => props.popUp(movie)}>ver mas</Button></Col>
                                            
                                        </Row>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default MoviesList