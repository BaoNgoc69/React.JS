import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import './Homepage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Doctor from './Section/Doctor';

import About from './Section/About';
import HomeFooter from './HomeFooter';
class HomePage extends Component {
    // handleAfterChange = (index, dontAnimate) => {
    //     console.log('+++++++++', index)

    // }
    render() {
        let settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // slickGoTo: this.handleAfterChange

        };
        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <Specialty settings={settings} />
                <MedicalFacility settings={settings} />
                <Doctor settings={settings} />
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
