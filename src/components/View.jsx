import React, {Component} from 'react';

class View extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.selectedSchedule !== undefined) {
            return { selectedSchedule: nextProps.selectedSchedule }
        }
        return null;
    }

    constructor(props) {
        super(props);
        
        this.initialState = {
            trainingName: '',
            description: '',
            department: '',
            duration: '',
            dateTime: '',
            meetingRoom: ''
        };

        this.state = this.initialState;
        if(props.selectedSchedule !== undefined) {
            this.state = { ...props.selectedSchedule[0] }
        }
    }

    render() {
        const { trainingName, description, department, duration, dateTime, meetingRoom } = this.state; 
        return (
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-3">Training Schedule Details</h4>
                    <hr className="mb-4" />
                        <div className="row text-center">
                            <div className="col-md-6 mb-3 font-weight-bold">
                                <label htmlFor="trainingName">Training Name: </label>
                            </div>
                            <div className="col-md-6 mb-3 text-left">
                                <label htmlFor="trainingName">{trainingName}</label>
                            </div>
                            <div className="col-md-6 mb-3 font-weight-bold">
                                <label htmlFor="description">Description: </label>
                            </div>
                            <div className="col-md-6 mb-3 text-left">
                                <label htmlFor="description">{description}</label>
                            </div>
                            <div className="col-md-6 mb-3 font-weight-bold">
                                <label htmlFor="department">Department: </label>
                            </div>
                            <div className="col-md-6 mb-3 text-left">
                                <label htmlFor="department">{department}</label>
                            </div>
                            <div className="col-md-6 mb-3 font-weight-bold">
                                <label htmlFor="duration">Duration: </label>
                            </div>
                            <div className="col-md-6 mb-3 text-left">
                                <label htmlFor="duration">{duration}</label>
                            </div>
                            <div className="col-md-6 mb-3 font-weight-bold">
                                <label htmlFor="dateTime">Date/Time: </label>
                            </div>
                            <div className="col-md-6 mb-3 text-left">
                                <label htmlFor="dateTime">{dateTime}</label>
                            </div>
                            <div className="col-md-6 mb-3 font-weight-bold">
                                <label htmlFor="meetingRoom">Meeting Room: </label>
                            </div>
                            <div className="col-md-6 mb-3 text-left">
                                <label htmlFor="meetingRoom">{meetingRoom}</label>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="row d-flex justify-content-center">
                            <button className="col-md-2 btn btn-success btn-lg" onClick={() => this.props.onClose(this.toggleModal)}>Close</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default View;
