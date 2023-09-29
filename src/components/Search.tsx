import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Search( props ) {
    
    const [ search, setSearch ] = useState('');

    return (
        <Container>
            <Form className='mt-2'>
                <Row className='justify-center'>
                    <Col sm={10} className='my-1'>
                        <Form.Control 
                            onChange={ (e) => setSearch(e.target.value)}
                            placeholder='Search for Pokemon'/>
                    </Col>
                    <Col sm={12} className='my-1 text-center'>
                        <Button onClick={ (e) => props.getPokemon(search)} className='text-white bg-red-500'>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}