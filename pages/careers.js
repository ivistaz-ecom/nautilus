import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Container, Image, Spinner, Form } from 'react-bootstrap';
import Link from 'next/link'
import Header from '../components/Header';
import Footer from '../components/Footer';
import configData from "../config.json";
import { format } from 'date-fns'
import Head from 'next/head'
import PostList from '../utils/PostListCareer';
import CareerFormNew from '../utils/CareerFormNew';
import Robots from '../utils/robots'

const NewCareer = () => {

    const bannerBackground = {
        height: '561px',
        width: '100%',
        background: `url('/images/career-banner.png')`,
        backgroundSize: 'cover',
    }

    return (
        <>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping</title>
                <meta name="description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
                <meta name="robots" content="noindex,nofollow"></meta>
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemprop="name" content="Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
                <meta itemprop="description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
                <meta itemprop="image" content=""></meta>

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="http://www.nautilusshipping.com/careers"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
                <meta property="og:description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
                <meta property="og:image" content=""></meta>
                <Robots />
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content="Current Job Openings - Ship Management Company, Vessel Management Services | Nautilus Shipping"></meta>
                <meta name="twitter:description" content="If you have the right qualifications and skills and are looking for sea jobs, we are here to help. Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates. Our crewing team is based in Mumbai and Chennai and you can drop your […]"></meta>
                <meta name="twitter:image" content=""></meta>
            </Head>
            <Header />
            <Container fluid style={bannerBackground}>
                <Row style={{height:'561px'}}>
                    <Col></Col>
                    <Col md={6} sm={12} className="d-flex flex-column justify-content-center home-banner-career">
                        <h1 className="ban-text-career">India’s fastest growing<br />Ship Management company.</h1>
                        <p>CHENNAI <span style={{color:'#008E9C'}}>&#9679;</span> MUMBAI <span style={{color:'#008E9C'}}>&#9679;</span> BANGALORE <span style={{color:'#008E9C'}}>&#9679;</span> PORT BLAIR <span style={{color:'#008E9C'}}>&#9679;</span> SINGAPORE</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{background:'#EAEBEB',paddingTop:'80px', paddingBottom:'80px'}}>
                <Container className="ban-text-career">
                    <Row>
                        <Col lg={6} sm={12}>
                            <h2 style={{color:'#555', marginBottom:'20px'}}>Why Join Nautilus Shipping?</h2>
                            <p><span style={{color:"#008E9C"}}>On-time Payments:</span> We prioritize prompt and reliable payments to our seafarers, ensuring financial stability and peace of mind.</p>
                            <p><span style={{color:"#008E9C"}}>Best in the Industry Wages:</span> Competitive wages that are among the best in the industry to ensure we recognize and reward your skills and dedication.</p>
                            <p><span style={{color:"#008E9C"}}>Safe Working Conditions:</span> Your safety is our top priority. We provide modern, well-maintained vessels and uphold stringent safety standards.</p>
                            <p><span style={{color:"#008E9C"}}>Modern and Expanding Fleet:</span> Join our modern and expanding fleet equipped with cutting-edge technology, offering exciting career opportunities.</p>
                            <p><span style={{color:"#008E9C"}}>Shore Job Opportunities:</span> Explore shore job opportunities and career advancement options within our dynamic organization. Join us for a rewarding career journey at Nautilus Shipping.</p>
                        </Col>
                        <Col lg={6} sm={12}>
                            <p>Nautilus Shipping is one of the fastest growing shipping companies in India and has multiple shipping job vacancies for the right candidates.</p>
                            <div style={{background:'#E2E3E3', padding:'14px', color:'#555'}}>
                                <small style={{color:'#555'}}>All fields are mandatory</small>
                                <CareerFormNew subject={'Career Query'} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <p className="fs-1 bogle-medium walmart-default">News &amp; Insights</p>
                </Container>
                <PostList categorySlug={68} />
            </Container>
            <Footer />
            
        </>
    );
};

export default NewCareer;