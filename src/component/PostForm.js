import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      assetId: "",
      iotAssetId: "",
      modelYear: "",
      machineType: "",
      yearOfPurchase: "",
      licensePlateNumber: "",
      createdAt: "",
      customerId: "",
      createdBy: "",
      updatedBy: "",
    };
  }
  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    const res = axios.get(
      "http://yl-prd-fleet.ap-south-1.elasticbeanstalk.com/api/getMaintenanceByCustomerId?customerId=62962"
    );
    console.log(res);
  };
  render() {
    return (
      <div>
        <tr>id</tr>
        <tr>assetId </tr>
        <tr>iotAssetId </tr>
        <tr>modelYear</tr>
        <tr>machineType</tr>
        <tr>yearOfPurchase</tr>
        <tr>licensePlateNumber</tr>
        <tr>createdAt</tr>
        <tr>customerId</tr>
        <tr>createdBy</tr>
        <tr>updatedBy</tr>
      </div>
    );
  }
}

export default PostForm;
