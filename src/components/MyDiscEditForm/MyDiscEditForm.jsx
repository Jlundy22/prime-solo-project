import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';


const manufacturers = [
    {
        value: 'Axiom'
    },
    {
        value: 'DGA'
    },
    {
        value: 'Discmania'
    },
    {
        value: 'Discraft'
    },
    {
        value: 'Dynamic Discs'
    },
    {
        value: 'Gateway'
    },
    {
        value: 'Innova'
    },
    {
        value: 'Infinite Discs'
    },
    {
        value: 'Kastaplast'
    },
    {
        value: 'Latitude 64'
    },
    {
        value: 'Millennium'
    },
    {
        value: 'MVP'
    },
    {
        value: 'Prodiscus'
    },
    {
        value: 'Prodigy'
    },
    {
        value: 'Streamline'
    },
    {
        value: 'Thought Space Athletics'
    },
    {
        value: 'Westside-Discs'
    },
];

const scale = [
    {
        value: '10- Never thrown, no ink, brand new condition'
    },
    {
        value: '9- Field tested or used for one or two rounds'
    },
    {
        value: '8- Lightly used with very minimal wear'
    },
    {
        value: '7- Used with some minor dings or scuffs but still in good shape'
    },
    {
        value: '6- Typical used disc with the usual dings, scratches but still worthy'
    },
    {
        value: "5- Kinda beat, significant wear, has lost a good bit of its stability"
    },
    {
        value: '4 - Beat up turnover disc with some evident war story wear'
    },
    {
        value: '3 or under- Beat to Hades dog chew toy'
    },
];

function MyDiscEditForm() {
    const history = useHistory();
    const editDisc = useSelector(store => store.editDisc);
    const params = useParams();
    const discId = params.id;
    const [manufacturer, setManufacturer] = React.useState(editDisc[0].manufacturer);
    const [sleepyScale, setSleepyScale] = React.useState(editDisc[0].sleepy_scale);
    const [mold, setMold] = React.useState(editDisc[0].mold);
    const [price, setPrice] = React.useState(editDisc[0].price);
    const [image, setImage] = React.useState(editDisc[0].img_path);

    const dispatch = useDispatch();

    const handleManufacturerChange = (event) => {
        event.preventDefault();
        setManufacturer(event.target.value);
    };
    const handleScaleChange = (event) => {
        event.preventDefault();
        setSleepyScale(event.target.value);
    };

    const handleMoldChange = (event) => {
        event.preventDefault();
        setMold(event.target.value);
    };
    const handlePriceChange = (event) => {
        event.preventDefault();
        setPrice(event.target.value);
    };
    const handleImageChange = (event) => {
        event.preventDefault();
        setImage(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        let newDiscItem = {
            manufacturer,
            sleepyScale,
            mold,
            price: Number(price),
            image,
            discId
        };

        dispatch({
            type: 'EDITED_DISC',
            payload: newDiscItem 
        });
        setTimeout(() => {
            history.push('/myDiscs');
          }, 100)
        
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Box textAlign='center'>
                    <TextField
                        required
                        id="outlined-select-manufacturer"
                        select
                        label="Manufacturer"
                        value={manufacturer}
                        onChange={handleManufacturerChange}
                    >
                        {manufacturers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box textAlign='center'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mold"
                        value={mold}
                        onChange={handleMoldChange}
                    />
                </Box>
                <Box textAlign='center'>
                    <TextField
                        required
                        id="outlined-select-scale"
                        select
                        label="Sleepy Scale"
                        value={sleepyScale}
                        onChange={handleScaleChange}
                    >
                        {scale.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box textAlign='center'>
                    <TextField
                        required
                        id="outlined-number"
                        label="Price"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={price}
                        onChange={handlePriceChange}
                    />
                </Box>
            </div>
            <Box textAlign='center'>
                <TextField
                    required
                    id="outlined-required"
                    label="Image URL"

                    value={image}
                    onChange={handleImageChange}
                />
            </Box>
            <Box textAlign='center'>
                <Button onClick={handleSubmit} variant="contained">Submit</Button>
            </Box>
        </Box>

    )
}


export default MyDiscEditForm;