import React from 'react'
import ReactDOM from 'react-dom'

import css from './index.css'

const inlinestyle = {
  fontSize: '48px'
};

const App = () => <>
  <div className='testglobal' style={inlinestyle}>this should be styled from global scope</div>
  <div className={css.testlocal} style={inlinestyle}>this should be styled from local scope</div>
</>

ReactDOM.render(<App />, document.getElementById('app'))
