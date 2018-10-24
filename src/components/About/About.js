import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';




export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/cool.jpg" className="header-image" />

                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Lindesey Love</h3>
                        <p>Random Text</p>
                    
                    </Col>
                </Grid>
            </div>

        )
    }
}