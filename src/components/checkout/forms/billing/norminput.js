import { Component } from "react";

export default class NormInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label for={this.props.name}>{this.props.name}</label>
        <input
          onChange={this.props.onChange}
          name={this.props.name}
          class="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"
          type="text"
          placeholder={this.props.name}
        />
      </div>
    );
  }
}
