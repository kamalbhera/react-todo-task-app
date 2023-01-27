import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";



export default class InputField extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
        };
    }

    onInputChange = (e) => {
        this.setState({ value: e.target.value });
    };

    onAddTodo = () => {
        if (this.state.value.trim().length) {
            this.props.addTodo({ title: this.state.value, date: this.props.date });
            this.setState({ value: "" });
        }
    };

    render() {
        return (
            <Stack direction="row" spacing={2}>
                <TextField
                    fullWidth
                    label="What needs to be done?"
                    value={this.state.value}
                    onChange={this.onInputChange}
                />
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={this.onAddTodo}
                >
                    Add
                </Button>
            </Stack>
        );
    }
}
