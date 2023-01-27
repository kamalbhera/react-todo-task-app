import React from "react";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./ItemTodo.css";




export default class ItemTodo extends React.Component {
    render() {
        const { title, id, isCompleted, toggleStatus, deleteTodo } = this.props;

        return (
            <>
                <ListItem
                    className={`item-todo ${isCompleted ? "item-todo-success" : ""}`}
                    secondaryAction={
                        <IconButton
                            className="delete-btn"
                            edge="end"
                            aria-label="delete"
                            color="error"
                            onClick={() => deleteTodo({ id })}
                        >
                            <DeleteForeverIcon />
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton onClick={() => toggleStatus({ id })} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                className={`checkbox${isCompleted ? "-success" : ""}`}
                                checked={isCompleted}
                                tabIndex={-1}
                                color="success"
                                inputProps={{ "aria-labelledby": id }}
                            />
                        </ListItemIcon>
                        <ListItemText id={id} primary={title} />
                    </ListItemButton>
                </ListItem>
            </>
        );
    }
}
