import {Typography, Box, Button, CircularProgress } from "@mui/material";
import SelectField from "../Components/SelectField" 
import TextFieldComp from "../Components/TextFieldComp"; 
import useAxios from "../Hooks/useAxios";
import {Link} from "react-router-dom";



function Settings() {
    // Getting api category
    const {response, error, loading} = useAxios({ url:"/api_category.php" })
    console.log(response)

  


    if (loading) {
        return(
            <Box mt={30}>
                <CircularProgress />
                <Typography variant="h4" color="blue">Loading...</Typography>
            </Box>

        );

    }

    if (error) {
        return(
            <Typography mt={30} color="red" variant="h4" >Something went wrong!</Typography>
        );
    };
     
    // function for getting started button
    const handleSubmit = (e) =>{
        e.preventDefault();
        
    };

    const difficultyOptions = [
        {id: "easy", name:"Easy"},
        {id: "medium", name:"Medium"},
        {id: "hard", name:"Hard"},
    ]

    const typeOptions = [
        {id: "multiple", name:"Multiple Choice"},
        {id: "boolean", name:"True/False"},
    ]


     
    return(
        <div>
            <Typography variant="h6" fontWeight="bold">Settings</Typography>
            <SelectField options={response.trivia_categories} label="Category"/>
            <SelectField options={difficultyOptions} label="Difficulty"/>
            <SelectField options={typeOptions} label="Type"/>
            <TextFieldComp/>
            <Link to="/questions">
                <Box mt={3}>
                    <Button fullWidth variant="contained" type="submit" onSubmit={handleSubmit}> Get Started</Button>
                    
                </Box>
            </Link>
            



            

        </div>
    );
}
export default Settings