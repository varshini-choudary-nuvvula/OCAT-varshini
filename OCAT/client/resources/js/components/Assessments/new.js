import React, { Component } from "react";
import { useForm } from "react-hook-form";

/*<body>
 <div id="app-root"></div>
  <script src="/js/app.bundle.js"></script>
</body>;*/
export class AssessmentNew extends Component {
  //state = {};
 render() {
    
    /*function App() {
      const { register, setValue, handleSubmit, errors } = useForm();
      const onSubmit = handleSubmit(({ catdetails, Insrtumentname, calculatedscore, determinedrisklevel }) => {
        console.log(catdetails, Insrtumentname, calculatedscore, determinedrisklevel);
      }); */
 function  AssessmentNew()
{
  const  { register, setValue, handleSubmit, errors } = useForm();
  
  const onSubmit =({ catdetails, Insrtumentname, calculatedscore, determinedrisklevel }) =>
  {
      console.log(catdetails, Insrtumentname, calculatedscore, determinedrisklevel);
   }
    return (
          <body>
 <div id="app-root"></div>
  <script src="/js/app.bundle.js"></script>
<div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>cat details</label>
          <input name="catdetails" ref={register} />
          <label>catdetails</label>
          <input name="Insrtumentname" ref={register} />
          <label>Insrtumentname</label>
          <input name="calculatedscore" ref={register} />
          <label>calculatedscore</label>
          <input name=" determinedrisklevel" ref={register} />
          <label>determinedrisklevel</label>
          
      
          

          <Input label="1. Previous contact with the Cat Judicial System:" register={register} required />
          <Select label="yes/no" ref={register} />
          <input type="radio" id="no" name="no" value="yes/no"></input>
                <label for="no">No (score=0)</label>
    <br></br>
          <input type="radio" id="yes" name="yes" value="yes/no"></input>
                <label for="yes">yes(score=1)</label>
    <br></br>
          <Input label="2. Physical altercations with other cats" register={register} required />
          <Select label="yes/no" ref={register} />
          <input type="radio" id="no" name="no" value="yes/no"></input>
                <label for="no">0-3 altercations (score = 0)</label>
                <br></br>
                <input type="radio" id="yes" name="yes" value="yes/no"></input>
                <label for="yes">3+ altercations (score = 1)</label>
                <br></br>
   < Input label="3.Physical altercations with owner (scratching, biting, etc...)" register={register} required />
          <Select label="yes/no" ref={register} />
          <input type="radio" id="no" name="no" value="yes/no"></input>
                <label for="no">No (score=0)</label>
                <br></br>
                <input type="radio" id="yes" name="yes" value="yes/no"></input>
                <label for="yes">yes(score=1)</label>
                <br></br>
    <Input label="4.Plays well with dogs" register={register} required />
          <Select label="yes/no" ref={register} />
          <input type="radio" id="no" name="no" value="yes/no"></input>
                <label for="no">10+ altercations (score = 1)</label>
                <br></br>
                <input type="radio" id="yes" name="yes" value="yes/no"></input>
                <label for="yes">0-10 altercations (score = 0)</label>
                <br></br>
    <Input label="5. Hisses at strangers" register={register} required />
          <Select label="yes/no" ref={register} />
          <input type="radio" id="no" name="no" value="yes/no"></input>
                <label for="no">yes (score=1)</label>
                <br></br>
                <input type="radio" id="yes" name="yes" value="yes/no"></input>
                <label for="yes">no(score=0)</label>
                <br></br>
            <input type="submit" />
<button type="submit">submit</button>
        </form>
        </div>
       </body>
      );
        }
}
}
  
export default  AssessmentNew;
