import React from 'react'
import ReactDOM from 'react-dom'
import { map } from 'ramda'
import { registerObserver } from 'react-perf-devtool'
import './styles/index.css'
import App from './App'

/* React Perf Devtool Observer */
registerObserver({}, (measure) => {
  // console.log(measure)

  // to display result only I want to see
  console.table(map(({
    componentName, percentTimeSpent, totalTimeSpent, numberOfInstances, update, mount,
    shouldComponentUpdate,
  }) => ({
    componentName,
    percentTimeSpent,
    totalTimeSpent,
    "mount times": mount.numberOfTimes,
    "update times": update.numberOfTimes,
    "SCU times": shouldComponentUpdate.numberOfTimes,
  }))(measure))
})

ReactDOM.render(<App />, document.getElementById('root'))
