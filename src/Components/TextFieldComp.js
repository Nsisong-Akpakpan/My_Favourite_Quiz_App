import {Box, FormControl, TextField} from "@mui/material"; 
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../Redux/action";


function TextFieldComp(){
       // to  link your TextField to your reducer
       const dispatch = useDispatch()
       const handleChange = (e) =>{
           dispatch(handleAmountChange(e.target.value));
       };
    return(
        <Box mt={3} width="fullWidth">
            <FormControl fullWidth>
                <TextField
                onChange={handleChange}
                size="small"
                label="Amount of Question"
                type="number"
                variant="outlined"
                />
            </FormControl>
        </Box>


    );
} 
export default TextFieldComp;