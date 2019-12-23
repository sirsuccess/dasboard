import React, { Component } from "react";
import ChartData from "../../../../commons/chartData";

// Import fusioncharts.js files from fusioncharts module
import FusionCharts from "fusioncharts";
// Import the timeseries file from fusioncharts module
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
// Import ReactFusioncharts from react-fusioncharts module
// import ReactFC from 'react-fusioncharts';
import ReactFC from "react-fusioncharts";

// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);


// This is the remote url to fetch the data.
const dataFetch = ChartData;
 
 let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        console.log(mm);
        
        const yyyy = today.getFullYear();
        if (dd < 10) {
          dd = "0" + dd;
        }
        if (mm < 10) {
          mm = "0" + mm;
        }
        today = dd + "-" + mm + "-" + yyyy;
 
// This is the remote url to fetch the schema.
const schemaFetch = [
  {
    name: "Time",
    type: "date",
    format: "%d-%b-%y"
  },
  {
    name: "Payments",
    type: "number"
  }
];


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "100%",
        height: "350",
        backgroundColor: "red",
        dataSource: {
          //   caption: { text: 'Online Sales of a SuperStore in the US' },
          // Initially data is set as null
          data: null
        }
      }
    };

    // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema. Check the method definition to get more info.
    this.createDataTable = this.createDataTable.bind(this);
  }

  createDataTable() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // After that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  // We are creating the DataTable immidietly after the component is mounted
  componentDidMount() {
    this.createDataTable();
  }

  render() {
    return (
      <div className="App">
        Today: {today}
        <ReactFC {...this.state.timeseriesDs} />
      </div>
    );
  }
}

export default Chart;
