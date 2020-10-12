import React, { Component } from "react";
//import AssessmentNew from "AssessmentNew";
//import "./appmodule.js";
//import "./App.js";
//import "react-dnd-html5-backend-backend";
/*<body>
 <div id="app-root"></div>
  <script src="/js/app.bundle.js"></script>
</body>;*/
export class AssessmentNew extends Component {
  //state = {};
  render() {
    return (
      <>
        <form action="/my-handling-form-page" method="post">
          <u1>
            <li>
              <label for="cat details">cat details:</label>
              <input type="text" id="cat details" name="cat details"></input>
            </li>
          </u1>
          <u1>
            <li>
              <label for=" instrument name"> instrument name:</label>
              <textarea
                id=" instrument name"
                name=" instrument name"
              ></textarea>
            </li>
          </u1>
          <u1>
            <li>
              <label for="score">calculated score:</label>
              <textarea
                id="calculated score"
                name="calculated score"
              ></textarea>
            </li>
          </u1>
          <u1>
            <li>
              <label for="risk level">determined risk level:</label>
              <textarea
                id="determined risk level"
                name="determined risk level"
              ></textarea>
            </li>
          </u1>
          <body>
            <div id="app-root"></div>
            <script src="/js/app.bundle.js"></script>
            <p>1. Previous contact with the Cat Judicial System:</p>
            <input type="radio" id="no" name="no" value="yes/no"></input>
            <label for="no">No (score=0)</label>
            <br></br>
            <input type="radio" id="yes" name="yes" value="yes/no"></input>
            <label for="yes">yes(score=1)</label>
            <br></br>
            <p>2. Physical altercations with other cats</p>
            <input type="radio" id="no" name="no" value="yes/no"></input>
            <label for="no">0-3 altercations (score = 0)</label>
            <br></br>
            <input type="radio" id="yes" name="yes" value="yes/no"></input>
            <label for="yes">3+ altercations (score = 1)</label>
            <br></br>

            <p>
              3.Physical altercations with owner (scratching, biting, etc...)
            </p>
            <input type="radio" id="no" name="no" value="yes/no"></input>
            <label for="no">No (score=0)</label>
            <br></br>
            <input type="radio" id="yes" name="yes" value="yes/no"></input>
            <label for="yes">yes(score=1)</label>
            <br></br>

            <p>4.Plays well with dogs</p>
            <input type="radio" id="no" name="no" value="yes/no"></input>
            <label for="no">10+ altercations (score = 1)</label>
            <br></br>
            <input type="radio" id="yes" name="yes" value="yes/no"></input>
            <label for="yes">0-10 altercations (score = 0)</label>
            <br></br>

            <p>5. Hisses at strangers</p>
            <input type="radio" id="no" name="no" value="yes/no"></input>
            <label for="no">yes (score=1)</label>
            <br></br>
            <input type="radio" id="yes" name="yes" value="yes/no"></input>
            <label for="yes">no(score=0)</label>
            <br></br>
            <button type="submit" value="Submit">
              Submit
            </button>
            <button type="reset" value="Reset">
              Reset
            </button>
          </body>
        </form>
      </>
    );
  }
}
export default AssessmentNew;
