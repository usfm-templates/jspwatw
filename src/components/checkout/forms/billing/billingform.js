import { Component } from "react";
import NormInput from "./norminput";

export default class BillingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      streetaddress: "",
      city: "",
      zipcode: "",
      country: "",
      state: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    await this.setState({
      [event.target.name]: event.target.value,
    });
    await console.log(this.state);
  }

  render() {
    return (
      <div className="p-2 w-64 text-">
        <form class="space-y-4 text-gray-700">
          <NormInput name={"firstname"} onChange={this.handleChange} />
          <NormInput name={"lastname"} onChange={this.handleChange} />
          <NormInput name={"streetaddress"} onChange={this.handleChange} />
          <NormInput name={"city"} onChange={this.handleChange} />
          <NormInput name={"zipcode"} onChange={this.handleChange} />
          <NormInput name={"country"} onChange={this.handleChange} />
          <NormInput name={"state"} onChange={this.handleChange} />

        </form>
      </div>
    );
  }
}
