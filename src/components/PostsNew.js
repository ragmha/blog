import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    const { touched, error } = field.meta;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>
          {field.label}
        </label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props; // passed by redux-form :D
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title For Post"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  const { title, categories, content } = values;

  // Validate inputs
  if (!title) {
    errors.title = "Enter a title";
  }

  if (!categories) {
    errors.categories = "Enter some categories";
  }

  if (!content) {
    errors.content = "Enter some content please!";
  }

  // if errors is empty, form is valid! :D
  // if errors has any props , redux assumes form is invalid :(
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm" // name of the form
})(PostsNew);
