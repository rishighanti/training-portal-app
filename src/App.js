import React, { Component } from 'react';
import './App.scss';

import Form from './components/Form';
import List from './components/List';
import View from './components/View';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isOpen: false,
      isViewOpen: false,
      search: '',
      schedules: []
    };
  }

  handleSearch = event => {
    const searchTerm = event.target.value;
    this.setState({
        search : searchTerm
    });    
  }

  viewSchedule = index => {
    const { schedules } = this.state;
    this.setState({
      selectedSchedule: schedules.filter((schedule, i) => { 
        return i === index;
      })
    });
    this.toggleViewModal();
  } 

  deleteSchedule = index => {
    const { schedules } = this.state;
    this.setState({
      schedules: schedules.filter((schedule, i) => { 
            return i !== index;
        })
    });
  } 

  editSchedule = index => {
    const { schedules } = this.state;
    this.setState({
      selectedSchedule: schedules.filter((schedule, i) => { 
        return i === index;
      })
    });
    this.toggleModal();
  } 

  handleCreateSchedule = schedule => {
    const { schedules } = this.state;
    let flag = 0;
    for(let i=0; i<schedules.length; i++) {
      if(schedule.id === schedules[i].id) {
        schedules[i] = schedule;
        flag = 1;
      }
    }

    if(flag === 1) {
      this.setState({schedules: schedules, selectedSchedule: ''});
    } else {
      schedule.id = Math.floor(Math.random()*90000) + 10000;
      this.setState({schedules: [...this.state.schedules, schedule]});
    }
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleViewModal = () => {
    this.setState({
      isViewOpen: !this.state.isViewOpen
    });
  }

  render() {
    const { schedules, search } = this.state;
    return (
      <div>
        <div className="container mt-5 mb-5">
          <div className="py-5 text-center">
              <h2>Training Scheduling Portal</h2>
          </div>
          <div className="row">
            <div className="col-md-9">
                <input type="text" className="form-control" id="search" placeholder="Search" onChange={this.handleSearch} value={search} />
            </div>
            <div className="col-md-3">
                <button className="btn btn-primary btn-md" onClick={this.toggleModal}>Add New</button>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row">
            <List scheduleData={schedules} viewSchedule={this.viewSchedule} editSchedule={this.editSchedule} deleteSchedule={this.deleteSchedule} searchTerm={search} />
          </div>
        </div>
        <Modal show={this.state.isOpen} onClose={this.toggleModal}>
          <Form handleSubmit={this.handleCreateSchedule} editSchedule={this.state.selectedSchedule} onClose={this.toggleModal} />
        </Modal>
        <Modal show={this.state.isViewOpen} onClose={this.toggleViewModal}>
          <View viewSchedule={this.state.selectedSchedule} selectedSchedule={this.state.selectedSchedule} onClose={this.toggleViewModal} />
        </Modal>
      </div>
    )
  }
}

export default App;
