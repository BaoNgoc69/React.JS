import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    <FormattedMessage id={"homepage.think"} />
                    <div className='section-about-content'>
                        <div className='content-left'>
                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/cdFbmh1ZXDg" title="BỆNH VIỆN CHỢ RẪY VỮNG TIN ĐI TRỌN MỘT HÀNH TRÌNH!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className='content-right'>

                            <p><FormattedMessage id={"homepage.about"} /></p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
