import React, { Component } from 'react';
import PortfolioCard from '../PortfolioCard';
import ReposList from '../../containers/ReposList';

import Overdrive from 'react-overdrive';

import myScript from '../../assets/js/myscript';

import '../../assets/css/Portfolio.css';


class Portfolio extends Component {

  componentDidMount() {
    myScript();

  }

  render() {
    return (
      <React.Fragment>
        <div className="portfolio heading-padding">
          <div className="container">
            <div className="intro">
              <Overdrive id="main-focus" duration="500" animationDelay="1" >
              <h1 className="text-center">Websites</h1>
              </Overdrive>
              <h2 className="text-center">Before learning to code, I used to create website using Wordpress. See some below.</h2>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/djnewyork.jpg')}
                  link="https://dj-newyork.com"
                  title="DJ-NewYork Agency"
                  desc="Made in 2017, this website allows the user to browse the talents of this agency and ask for their availability."
                 />
              </div>

              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/raquelleroux.jpg')}
                  link="http://raquelleroux.com"
                  title="Raquel Le Roux Yoga"
                  desc="I made this website in 2015. It includes some e-commerce solutions."
                 />
              </div>


              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/djyanic.jpg')}
                  link="https://dj-yanic.com"
                  title="DJ Yanic"
                  desc="I created this website in 2014 to promote my DJ activity. Wordpress."
                 />
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio">
          <div className="container">
            <div className="intro">
              <h1 className="text-center">Web Apps</h1>
              <h2 className="text-center">Developed with Javascript and/or Python</h2>
            </div>
            <div className="row articles">
              <div className="col-sm-6 col-md-4 item">

                <PortfolioCard
                  source={require('../../assets/img/youtube-clone.png')}
                  link="https://objective-hamilton-338db1.netlify.com/"
                  title="Video Live Search"
                  desc="ReactJS Video Search App using Youtube API"
                />
              </div>
              <div className="col-sm-6 col-md-4 item">

                <PortfolioCard
                  source={require('../../assets/img/twitterpie.jpg')}
                  link="https://twitterpie.herokuapp.com/"
                  title="Twitter Pie"
                  desc="Flask app that takes a Twitter handle and returns a charts for the 10 most used words in the user feed."
                 />
              </div>
              <div className="col-sm-6 col-md-4 item">
                <PortfolioCard
                  source={require('../../assets/img/receiptsorganizer.jpg')}
                  link="http://receipts-organizer.herokuapp.com/"
                  title="Receipts Organizer"
                  desc="Create a user account and upload your receipts scans to keep them organized by date and category. Work in progress"
                 />
              </div>
            </div>
          </div>


          <div className="portfolio">
            <div className="container">

              <ReposList />

            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }

}



export { Portfolio };