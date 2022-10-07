import {useEffect, useState} from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import useAxios from "../Hooks/useAxios";

function getRandomInt(max) {
    return Math.floor(Math.floor(Math.random() * Math.floor(max)))

}
function Questions() {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
    } = useSelector(store => store)
   
    let  apiUrl = `/api.php?amount=${amount_of_question}`;
    if ( question_category) {
        apiUrl= apiUrl.concat(`&category=${question_category}`)
    }
    if ( question_difficulty) {
        apiUrl= apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if (question_type) {
        apiUrl= apiUrl.concat(`&type=${question_type}`)
    }
    if ( question_difficulty) {
        apiUrl= apiUrl.concat(`&difficulty=${question_difficulty}`)
    }


    const {response, loading} = useAxios({ url: apiUrl })
    console.log(response)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [options, setOptions] = useState([])
    console.log(options)

    useEffect(()=>{
        if(response?.results.length){
            const question = response.results[questionIndex]
            console.log(question)
            let answers = [...question.incorrect_answers]
            answers.splice(
                getRandomInt(question.incorrect_answers.length),
                0,
                question.incorrect_answer
            );
            setOptions(answers);
        }
    },[response, questionIndex])
    

    if (loading) {
        return(
            <Box mt={30}>
                <CircularProgress />
                <Typography variant="h4" color="blue">Loading...</Typography>
            </Box>

        );

    }
    
  
    return(
        <Box mt={12}>
            <Typography  fontWeight="bold" variant="h4">{questionIndex + 1}</Typography>
            <Typography mt={3} variant="h5"> {response.results[questionIndex].question} </Typography>
            <Box mt={2}>
                <Button variant="contained"> Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained"> Answer 2</Button>
            </Box>
            <Box mt={5}>Score: 2 / 6</Box>

        </Box>
    );
}
export default Questions