import React, {Component} from 'react';
import '../App.scss';

class Form extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.editSchedule !== undefined) {
            return { editSchedule: nextProps.editSchedule }
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
        if(props.editSchedule !== undefined) {
           this.state = { ...props.editSchedule[0] }
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.validate()) {
            this.props.handleSubmit(this.state);
            this.props.onClose(this.toggleModal);
            this.setState(this.initialState);
        }
    }

    validate = () => {
        let trainingNameError = "";
        let departmentError = "";
        let durationError = "";
        let dateTimeError = "";
        let meetingRoomError = "";


        if(!this.state.trainingName) {
            trainingNameError = "Training name is required.";
        } 
        
        if(!this.state.department) {
            departmentError = "Department is required.";
        } 
        
        if(!this.state.duration) {
            durationError = "Meeting Room is required.";
        } 
        
        if(!this.state.dateTime) {
            dateTimeError = "Date and Time is required.";
        } 
        
        if(!this.state.meetingRoom) {
            meetingRoomError = "Duration is required.";
        }

        if (trainingNameError || departmentError || durationError || dateTimeError || meetingRoomError) {
            this.setState({ trainingNameError, departmentError,durationError, dateTimeError, meetingRoomError });
            return false;
        }
      
        return true;
    }

    render() {
        const { trainingName, description, department, duration, dateTime, meetingRoom } = this.state; 
        const btnName = this.props.editSchedule === undefined ? 'New' : 'Edit';
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="needs-validation" noValidate="" onSubmit={this.onFormSubmit}>
                    <h4 className="mb-3">Create New Schedule</h4>
                    <hr className="mb-4" />
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label htmlFor="trainingName">Training Name</label>
                                <input type="text" className="form-control" id="trainingName" name="trainingName" placeholder="" required="" onChange={this.handleChange} value={trainingName} />
                                <div className="invalid-feedback">{this.state.trainingNameError}</div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control" id="description" name="description" rows="4" onChange={this.handleChange} value={description}></textarea>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="department">Department</label>
                                <select className="custom-select d-block w-100" id="department" name="department" required="" onChange={this.handleChange} value={department}>
                                    <option value="">Choose...</option>
                                    <option>Sales</option>
                                    <option>Marketing</option>
                                    <option>Account Management</option>
                                    <option>Client Support</option>
                                    <option>Engineering</option>
                                </select>
                                <div className="invalid-feedback">{this.state.departmentError}</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="meetingRoom">Meeting Room</label>
                                <select className="custom-select d-block w-100" id="meetingRoom" name="meetingRoom" required="" onChange={this.handleChange} value={meetingRoom}>
                                    <option value="">Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                <div className="invalid-feedback">{this.state.meetingRoomError}</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="dateTime">Date and Time</label>
                                <input type="datetime-local" className="form-control" id="dateTime" name="dateTime" placeholder="" required="" onChange={this.handleChange} value={dateTime} />
                                <div className="invalid-feedback">{this.state.dateTimeError}</div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="duration">Duration</label>
                                <select className="custom-select d-block w-100" id="duration" name="duration" required="" onChange={this.handleChange} value={duration}>
                                    <option value="">Choose...</option>
                                    <option>30 Minutes</option>
                                    <option>1 Hour</option>
                                    <option>1 Hour 30 Minutes</option>
                                    <option>2 Hours</option>
                                    <option>2 Hour 30 Minutes</option>
                                    <option>3 Hours</option>
                                    <option>3 Hour 30 Minutes</option>
                                    <option>4 Hours</option>
                                    <option>4 Hour 30 Minutes</option>
                                    <option>5 Hours</option>
                                </select>
                                <div className="invalid-feedback">{this.state.durationError}</div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="row d-flex justify-content-center">
                            <button className="col-md-2 btn btn-success btn-lg" type="submit">{btnName}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;
