import React, { Component } from "react";
import "./app.css";
import AddForm from "./components/addForm";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };
  Increase = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits: habits });
    console.log(habit);
  };

  Decrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };
  Delete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  Add = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: habits });
  };

  Reset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  render() {
    console.log("app");
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <AddForm onAdd={this.Add} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.Increase}
          onDecrement={this.Decrease}
          onDelete={this.Delete}
        />
        <button onClick={this.Reset}> Reset </button>
      </>
    );
  }
}
export default App;
