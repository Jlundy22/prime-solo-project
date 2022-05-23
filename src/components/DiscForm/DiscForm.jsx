import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const manufacturers = [
    {
        value: 'Innova'
    },
    {
        value: 'Discraft'
    },
    {
        value: 'Discmania'
    },
    {
        value: 'Infinite Discs'
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
        value: "5- Kinda beat, significant wear, has lost a good bit of it's stability"
    },
    {
        value: '4 - Beat up turnover disc with some evident war story wear'
    },
    {
        value: '3 or under- Beat to Hades dog chew toy'
    },
];

function DiscForm() {
    const [manufacturer, setManufacturer] = React.useState('');
    const [sleepyScale, setSleepyScale] = React.useState('');
    const handleManufacturerChange = (event) => {
        setManufacturer(event.target.value);
    };
    const handleScaleChange = (event) => {
        setSleepyScale(event.target.value);
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
                <div>
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
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Mold"
                     defaultValue=" "
                    />
                </div>
                <div>
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
                </div>

                <TextField
                    required
                    id="outlined-number"
                    label="Price"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Image URL"
                     defaultValue=" "
                    />
                </div>
        </Box>
    )
}


export default DiscForm;