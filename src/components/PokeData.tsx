import { Container, Row, Col, Card } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';

export default function PokemonData( props ) {
    
    return (
        <Container className='mt-2'>
            <Row>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>{props.name}</h5>
                            <img src={props.sprite} alt={props.name} />
                        </Card.Header>
                        <Card.Body>
                            <h5 className='font-bold'>Abilities</h5>
                            {props.abilities.map( (ability, key) => (
                                <div key={key}>
                                    <span>{ability.ability.name}</span>
                                </div>
                            ))}
                            <h5 className='font-bold'>Types</h5>
                            {props.types.map( (type, key) => (
                                <div key={key}>
                                    <span>{type.type.name}</span>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} >
                    <Card>
                        <Card.Body>
                            <h1 className='text-2xl font-extrabold'>Base Stats</h1>
                            {props.stats.map( (stat, key) => (
                                <div key={key}>
                                    <span>{stat.stat.name}</span>
                                    <ProgressBar now={stat.base_stat} max={225} label={stat.base_stat} />
                                </div>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}