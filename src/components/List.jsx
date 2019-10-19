import React, { Component } from 'react';
import '../App.scss';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>#</th>
                <th scope="col">Training Name</th>
                <th scope="col">Date/Time</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const searchTerm = props.searchTerm;
    const rows = props.scheduleData.map((row, index) => {
        const highlight = (searchTerm === row.trainingName ? 'highlight' : '')
        return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td><span className={`${highlight}`}>{row.trainingName}</span></td>
                <td>{row.dateTime}</td>
                <td>
                    <button type="button" className="btn btn-warning ml-1 mr-1" onClick={() => props.viewSchedule(index)}>View</button>
                    <button type="button" className="btn btn-info ml-1 mr-1" onClick={() => props.editSchedule(index)}>Edit</button>
                    <button type="button" className="btn btn-danger ml-1 mr-1" onClick={() => props.deleteSchedule(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class List extends Component {
    render() {
        const { scheduleData, viewSchedule, editSchedule, deleteSchedule, searchTerm } = this.props;

        return (
            <div className="table-responsive text-center">
                <table className="table table-striped">
                    <TableHeader />
                    <TableBody scheduleData={scheduleData} viewSchedule={viewSchedule} editSchedule={editSchedule} deleteSchedule={deleteSchedule} searchTerm={searchTerm} />
                </table>
            </div>
        );
    }
}

export default List;