import React from "react";
import { connect } from "react-redux";
import { Button, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { setDate } from "../../features/date/dateSlice";
import { getWeek, getPrevWeek, getNextWeek, convertIntoString, DAYS } from "../../utils/calendar/calendar.js";
import generateRandomNumber from "../../utils/helpers/generateRandomNumber";
import "./Calendar.css";


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            week: getWeek(this.props.date),
        };
    }

    onMoveLeft = () => {
        this.setState({ week: getPrevWeek(this.state.week[0].time) });
    };

    onMoveRight = () => {
        this.setState({ week: getNextWeek(this.state.week[0].time) });
    };

    onPickDate = (date) => {
        this.props.setDate({ date });
    };

    render() {
        const { week } = this.state;

        return (
            <div className="calendar">
                <h2 className="calendar-title">{convertIntoString(week[0].year, week[0].month)}</h2>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            {DAYS.map((day) => (
                                <th key={generateRandomNumber()}>{day}</th>
                            ))}
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <IconButton size="small" onClick={this.onMoveLeft}>
                                    <NavigateBeforeIcon />
                                </IconButton>
                            </td>
                            {week.map((day) => (
                                <td key={generateRandomNumber()}>
                                    <Button
                                        size="small"
                                        color={day.time === this.props.date ? "secondary" : "primary"}
                                        variant="contained"
                                        onClick={() => this.onPickDate(day.time)}
                                    >
                                        {day.date}
                                    </Button>
                                </td>
                            ))}
                            <td>
                                <IconButton size="small" onClick={this.onMoveRight}>
                                    <NavigateNextIcon />
                                </IconButton>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    date: state.date.value,
});

const mapDispatchToProps = { setDate };

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
