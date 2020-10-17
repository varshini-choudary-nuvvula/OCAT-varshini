import axios from "axios";

/*export class AssessmentService {
    render{
        return(
             default axios.create({
            baseURL: `http://jsonplaceholder.typicode.com/`
          });
    }
}*/
export const postassessment=(assessment)=>{
  axios.post(`https://localhost:8000/api/assessment`, assessment)
  .then(res => {
    console.log(res);
    console.log(res.data);
  })
}