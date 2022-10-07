import {Box, FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from "../Redux/action";
// import Settings from "../pages/Settings";

function SelectField (props){
    
    const {label, options} = props;
    const [value, setValue] = useState("")
     // to  link your SelectField to your reducer
     const dispatch = useDispatch();
    
    const handleChange = (e) =>{
        setValue(e.target.value);

        // to  link your SelectField to your reducer

        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value))
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value))
                break;
            case "Category":
                dispatch(handleTypeChange(e.target.value))
                break;
           default:
           return;          
        } 
    };

    return(
        <div>
            <Box width="fullWidth" mt={3}>
                <FormControl size="small" fullWidth>
                    <InputLabel>{label}</InputLabel>
                    <Select value={value} label={label} onChange={handleChange}>
                        {options.map(({id, name}) => (
                            <MenuItem value={id} key={id}>
                                {name}
                            </MenuItem>

                        ))}
                        
                        
                    </Select>
                </FormControl>

            </Box>
        </div>
    );
}
export default SelectField;
