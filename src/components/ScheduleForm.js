import React, { Component } from "react";
import { connect } from "react-redux";
import Datetime from "react-datetime"
import { scheduleEvent, loadClasses } from "../actions/"
import moment from "moment"

const mapStateToProps = state => {
    return { classes: state.classes };
}

function mapDispatchToProps(dispatch) {
    return {
        scheduleEvent: cls => dispatch(scheduleEvent(cls)),
        loadClasses: () => dispatch(loadClasses())
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class_id: "",
            event_date: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDatetimeChange = this.handleDatetimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadClasses()
        this.setState({
            class_id: '',
            duration: '',
            event_date: ''
        })
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleDatetimeChange(moment) {
        this.setState({ event_date: moment.toDate() })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { class_id, duration, event_date } = this.state
        const datetime = moment(event_date).format("YYYY-MM-DD HH:mm")
        this.props.scheduleEvent({ class_id, duration, datetime })
        this.setState({ class_id: "", duration: "", event_date: "" })
    }
    render() {
        return (
            <div className="admin-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="class_id">Class</label>
                        <select
                            id="class_id"
                            value={this.state.class_id}
                            onChange={this.handleChange}
                        >
                            <option>Select a class</option>
                            {this.props.classes.map(cls => (
                                <option value={cls.class_id}>{cls.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="event_date">Date and time</label>
                        <Datetime
                            id="event_date"
                            value={this.state.event_date}
                            onChange={this.handleDatetimeChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="class_id">Duration</label>
                        <select
                            id="duration"
                            value={this.state.duration}
                            onChange={this.handleChange}
                        >
                            <option>---</option>
                            <option value="60">60 minutes</option>
                            <option value="90">90 minutes</option>
                            <option value="120">120 minutes</option>
                        </select>
                    </div>
                    <button type="submit">SAVE</button>
                </form>
            </div>
        );
    }
}
const Form = connect(
    mapStateToProps,
    mapDispatchToProps
)(ConnectedForm);
export default Form