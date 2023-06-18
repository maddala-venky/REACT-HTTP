import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://yl-prd-fleet.ap-south-1.elasticbeanstalk.com/api/getMaintenanceByCustomerId?customerId=62962"
      )
      .then((response) => {
        console.log(response.data.data);
        this.setState({ posts: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        <h1> Maintaince By CustomerId </h1>
        <table>
          <tr>
            <th>Asset Id</th>
            <th>Created At</th>
            <th>Criticality</th>
            <th>Customer id</th>
            <th>Is fleetmgmt</th>
            <th>is iotenable</th>
            <th>Machine type</th>
            <th>Make</th>
            <th>Meter reading</th>
            <th>Model</th>
            <th>Model year</th>
            <th>Status</th>
            <th>Updated At</th>
            <th>Project Name</th>
          </tr>

          {/* <td>isFleetMgmt</td>
            <td>isIotEnable</td>
            <td>machineType</td> */}

          {posts &&
            posts.map((item) => (
              <tr>
                <td>{item.general.assetId}</td>
                <td>{item.general.createdAt}</td>
                <td>{item.general.criticality}</td>
                <td>{item.general.customerId}</td>
                <td>{item.general.iotAssetId}</td>
                <td>{item.general.isFleetMgmt}</td>
                <td>{item.general.machineType}</td>
                <td>{item.general.make}</td>
                <td>{item.general.meterReading}</td>
                <td>{item.general.model}</td>
                <td>{item.general.modelYear}</td>
                <td>{item.general.status}</td>
                <td>{item.general.updatedAt}</td>
                <td>{item.projectDetails?.project}</td>
              </tr>
            ))}
        </table>
      </div>
    );
  }
}

export default PostList;
