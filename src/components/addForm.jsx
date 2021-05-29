import React, { PureComponent } from "react";

class AddForm extends PureComponent {
  inputRef = React.createRef();
  formRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    // this.inputRef.current.value = '';
    this.formRef.current.reset();
  };

  render() {
    console.log("addform");
    return (
      <form className='add-form' onSubmit={this.onSubmit} ref={this.formRef}>
        <input
          ref={this.inputRef}
          type='text'
          className='add-input'
          placeholder='habit'
        />
        <button className='add-button'> Add </button>
      </form>
    );
  }
}

export default AddForm;
