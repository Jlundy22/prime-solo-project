import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


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



function DiscForm() {
    const history = useHistory();

    const [manufacturer, setManufacturer] = React.useState('');
    const [sleepyScale, setSleepyScale] = React.useState('');
    const [mold, setMold] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [image, setImage] = React.useState('');
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
        };
        if (!manufacturer || !sleepyScale || !mold || !price || !image) {
            alert("Fill in all inputs please!");
            return;
        } else {
            dispatch({
                type: 'CREATE_DISC_ITEM',
                payload: newDiscItem 
              }); 
        }
        // dispatch({
        //   type: 'CREATE_DISC_ITEM',
        //   payload: newDiscItem 
        // });
        //delaying reroute to my discs to 
        //allow time for redux to be set
        setTimeout(() => {
            history.push('/myDiscs');
          }, 100)
        



        setManufacturer('');
        setSleepyScale('');
        setMold('');
        setPrice('');
        setImage('');
      };
    


    return (
        
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className='pageHeader'
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
                        value={mold}
                        onChange={handleMoldChange}
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
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Image URL"

                    value={image}
                    onChange={handleImageChange}
                />
            </div>
            <Button onClick={handleSubmit}  variant="contained">Submit</Button>
        </Box>
        
    )
}


export default DiscForm;