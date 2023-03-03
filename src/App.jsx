import './App.css'

function App() {

  return (
    <div className="app__container">
        <div className='app__container_left'>    
          <div className='app__container_left_title'>
            <h2>Your Result</h2>
          </div>
          <div className='app__container_left_score'>
            <div className='app__container_left_score_user'>76</div>
            <div className='app__container_left_score_total'>of 100</div>
          </div>
          <div className='app__container_left_bottom'>
            <div className='app__container_left_bottom_result'>Great</div>
            <div className='app__container_left_bottom_compare'>
              You scored higher than 65% of the people who have taken these tests.
            </div>
          </div>
        </div>

        <div className='app__container_right'>
          <div className='app__container_right_title'>
            <h2>Summary</h2>
          </div>
          <div className='app__container_right_summary'>
            <div className='app__container_right_summary_item'>
              <h3>Field</h3>
              <p>Value</p>
            </div>
            <div className='app__container_right_summary_item'>
              <h3>Field</h3>
              <p>Value</p>
            </div>
            <div className='app__container_right_summary_item'>
              <h3>Field</h3>
              <p>Value</p>
            </div>
            <div className='app__container_right_summary_item'>
              <h3>Field</h3>
              <p>Value</p>
            </div>
            <button className='app__container_right_button'>Continue</button>
          </div>
        </div>
      </div>
  )
}

export default App
