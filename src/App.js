import React, { useState } from 'react';
import "./App.css";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import CourseGoalsList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course", id: "g2" }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [];
      updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{textalign: 'center'}}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalsList items={courseGoals} onDeleteItem = {deleteItemHandler} />
    );
  };


  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalsList items={courseGoals}
          onDeleteItem={deleteItemHandler}
          />
        )
      // <p style={{ textAlign: 'center}}>No goals found. Maybe add one? </p>
    } */}
      </section>
    </div>
  );
};

export default App;
