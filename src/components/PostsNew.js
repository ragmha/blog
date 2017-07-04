import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>
          {field.label}
        </label>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
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
