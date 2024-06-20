import React from 'react';
import Hero from '../components/Hero';
import HeroCard from '../components/HeroCard';
import Button from "../components/Button";
import JobListing from "../components/JobListing";

const Homepage = () => {
  return (
    <>
    <Hero/>
    <HeroCard/>
    <JobListing isHome={true}/>
    <Button/>
    </>
  )
}

export default Homepage
