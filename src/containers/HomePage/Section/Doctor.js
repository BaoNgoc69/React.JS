import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { withRouter } from 'react-router';

class Doctor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrDoctors: []
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctorsRedux !== this.props.topDoctorsRedux) {
            this.setState({
                arrDoctors: this.props.topDoctorsRedux
            })
        }

    }

    componentDidMount() {
        this.props.loadTopDoctors();


    }

    handleViewDetialDoctor = (doctor) => {
        console.log('Check view infor: ', doctor)
        if (this.props.history) {
            this.props.history.push(`/detail-doctor/${doctor.id}`)

        }
    }

    render() {
        let arrDoctors = this.state.arrDoctors;
        let { language } = this.props;
        // arrDoctors = arrDoctors.concat(arrDoctors)
        console.log('===============', arrDoctors)
        return (
            <div className='section-share section-doctor'>
                <div className='section-content'>
                    <div className='section-header'>
                        <span className='title-section'>
                            <FormattedMessage id="homepage.outstading-doctor" />
                        </span>
                        <button className='btn-section btn btn-outline-light'>
                            <FormattedMessage id="homepage.more-infor" />
                        </button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>


                            {arrDoctors && arrDoctors.length > 0
                                && arrDoctors.map((item, index) => {
                                    let imageBase64 = '';
                                    if (item.image) {
                                        imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                    }
                                    let nameVi = `${item.positionData.valueVi}, ${item.firstName}  ${item.lastName}`
                                    let nameEn = `${item.positionData.valueEn}, ${item.firstName}  ${item.lastName}`

                                    return (
                                        <div className='section-customize' key={index}
                                            onClick={() => this.handleViewDetialDoctor(item)}
                                        >
                                            <div className='customize-border'>
                                                <div className='outer-bg img-thumbnail img-fluid rounded border-success'>
                                                    <div className='bg-image section-doctor img-thumbnail img-fluid'
                                                        style={{ backgroundImage: `url(${imageBase64})` }}
                                                    />
                                                    <div className='position text-center'>
                                                        <div>{language === LANGUAGES.VI ? nameVi : nameEn}</div>
                                                        <div>Xương Khớp</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            }
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        topDoctorsRedux: state.admin.topDoctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctors: () => dispatch(actions.fetchTopDoctor())

    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));
