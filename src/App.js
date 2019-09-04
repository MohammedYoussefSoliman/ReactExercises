import React, { Component, Fragment } from 'react'
import './App.css'
import { muscles, exercises } from './store'

// Components
import { Header, Footer } from './Components/Layouts';
import Exercises from './Components/Exercises';


export default class extends Component {

  state = {
    exercises,

  }

  getExercisesByMuscle()  {
    return Object.entries( /* Object entries it decomposes an object into arrays */
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]

      return exercises},{})
    )
  }

  handleCategorySelected = catagory => {
    this.setState({
      catagory /* whatever passed by this function will be assigned to the catagory state */
    })
  }

  

  render() {
    const exercises = this.getExercisesByMuscle(),
    { catagory } = this.state /* this means creating a state of catagory with value undefined */

    return(
    <Fragment>

      <Header/>

      <Exercises exercises={exercises} />

      <Footer
      onSelect={this.handleCategorySelected}
      catagory={catagory}
      muscles={muscles}/>
    
    </Fragment>

    );
  }
}
