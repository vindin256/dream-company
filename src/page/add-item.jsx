import React, { forwardRef, useImperativeHandle, useState } from "react";
import { saveItem } from "./service/service-middleware";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import { ADD_ICE_CREAM } from "./reducer/action-creator-ice/ice-cream-action-type";

const AddItem = forwardRef((props, ref) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
    };
    const handleSave = async () => {
        //  await saveItem(state);
        setOpen(false);
        //  dispatch({ type: ADD_ICE_CREAM, payload: state })

    }
    useImperativeHandle(ref, () => ({
        addItem() {
            addItems();
        }
    }))
    async function addItems() {
        setOpen(true);
    }

    return (<>
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={'paper'}>
            <DialogTitle id="scroll-dialog-title">Add Item</DialogTitle>
            <DialogContent dividers={'paper'}>
                <DialogContentText
                    id="scroll-dialog-description" >
                    <Grid container spacing={1}>
                        <TextField label="Category" defaultValue="" />
                        {props.level === "item" ? (<>
                        <TextField label="Item" defaultValue="" />
                        <TextField label="item Category" defaultValue="" /></>) : null}
                        <TextField label="Status" defaultValue="" />
                        <TextField label="Order" defaultValue="" />
                    </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog></>)
});
export default AddItem;