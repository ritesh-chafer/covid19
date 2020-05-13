import React from 'react'
import {
    Card, CardImg, CardText, CardBody, Form, FormGroup, Input, Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import { FaSearch } from 'react-icons/fa'

function Project() {
    return (
        <div className="container mt-5">
            <center>
                <div className="col-lg-4">
                    <Form>
                        <FormGroup>
                            <Input type="text" name="search" id="psearch" placeholder="Search Projects" /><FaSearch />
                        </FormGroup>
                    </Form>
                </div>
            
    
                <div className="col-lg-10">
                    <Card style={{marginBottom: 10}}>
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                    <Card style={{marginBottom: 10}}>
                        <CardBody>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                    <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        4
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">
                        5
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last href="#" />
                    </PaginationItem>
                </Pagination>
                </div>
                
            </center>
        </div>
    )
}

export default Project