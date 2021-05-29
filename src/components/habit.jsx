import React, { PureComponent } from "react";

class Habit extends PureComponent {
  Increase = () => {
    this.props.onIncrement(this.props.habit);
  };
  Decrease = () => {
    this.props.onDecrement(this.props.habit);
  };

  Delete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit-name'> {name} </span>
        <span className='habit-count'> {count} </span>
        <button className='habit-button habit-increase' onClick={this.Increase}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit-button habit-decrease' onClick={this.Decrease}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit-button habit-delete' onClick={this.Delete}>
          <i class='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}

export default Habit;
