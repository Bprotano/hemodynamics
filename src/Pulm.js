import React from 'react';
import Media from "react-media";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

class Pulm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: 1,
      pao2: '',
      paco2: '',
      fio2: '',
      rr: '',
      vt: '',
      pip:'',
      pplat: '',
      peep: '',
      dpaco2: ''
    };

  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }


  render() {

    const { pao2, paco2, fio2, rr, vt, pip, pplat, peep, dpaco2 } = this.state;

    const needInfo = "Please enter input values";

    //Rao, you just need to fill the calc vars with their equations and
    //maybe something like lines 83-169 in hemodynamics.js if you want a message
    //instead of NaN before they enter input for each field
    var aaGradCalc = needInfo;
    var pfrCalc = needInfo;
    var ibwCalc = needInfo;
    var vtaardsCalc = needInfo;
    var slcCalc = needInfo;
    var dcCalc = needInfo;
    var arCalc = needInfo;
    var veCalc = needInfo;
    var rsbiCalc = needInfo;
    var dpCalc = needInfo;
    var opeepCalc = needInfo;
    var paco2Calc = needInfo;
    var irrCalc = needInfo;


    return (
      <Media query="(min-width: 768px)">
        {matches => matches ? (
          <div>
            <h2 className="App-name">Pulmonary Calculator</h2>
            <div className="App-header">
              <TableContainer component={Paper}>
                <Table className="makeStyles-table-1" size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Pulmonary Values</strong></TableCell>
                      <TableCell align="right"><strong>Input Data</strong></TableCell>
                      <TableCell align="left"><strong>Functions</strong></TableCell>
                      <TableCell align="right"><strong>Calculations</strong></TableCell>
                      <TableCell align="left"><strong>Normal Range</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">PaO2</TableCell>
                        <TableCell align="right"><input value={pao2} onChange={this.changeHandler} name='pao2' align="right" type="text" /></TableCell>
                        <TableCell align="left">A-a gradient</TableCell>
                        <TableCell align="right">{aaGradCalc}</TableCell>
                        <TableCell align="left">2.5</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">PaCO2</TableCell>
                        <TableCell align="right"><input value={paco2} onChange={this.changeHandler} type="text" name='paco2'/></TableCell>
                        <TableCell align="left">P/F ratio</TableCell>
                        <TableCell align="right">{pfrCalc}</TableCell>
                        <TableCell align="left">greater than 200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">FiO2</TableCell>
                        <TableCell align="right"><input value={fio2} onChange={this.changeHandler} name='fio2'   type="text" /></TableCell>
                        <TableCell align="left">IBW</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">RR</TableCell>
                        <TableCell align="right"><input value={rr} onChange={this.changeHandler} name='rr'   type="text" /></TableCell>
                        <TableCell align="left">Vt ARDS</TableCell>
                        <TableCell align="right">{vtaardsCalc}</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Vt</TableCell>
                        <TableCell align="right"><input value={vt} onChange={this.changeHandler} name='vt'   type="text" /></TableCell>
                        <TableCell align="left">Static Lung Compliance</TableCell>
                        <TableCell align="right">{slcCalc}</TableCell>
                        <TableCell align="left">greater than 60mL/cmH20</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">PIP</TableCell>
                        <TableCell align="right"><input value={pip} onChange={this.changeHandler} name='pip'   type="text" /></TableCell>
                        <TableCell align="left">Dynamic Compliance</TableCell>
                        <TableCell align="right">{dcCalc}</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Pplat</TableCell>
                        <TableCell align="right"><input value={pplat} onChange={this.changeHandler} name='pplat'   type="text" /></TableCell>
                        <TableCell align="left">Airway Resistance</TableCell>
                        <TableCell align="right">{arCalc}</TableCell>
                        <TableCell align="left">nl less than 10</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">PEEP</TableCell>
                        <TableCell align="right"><input value={peep} onChange={this.changeHandler} name='peep'   type="text" /></TableCell>
                        <TableCell align="left">Ve (minute ventilation)</TableCell>
                        <TableCell align="right">{veCalc}</TableCell>
                        <TableCell align="left">less than 12L/min</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Desired PaCO2</TableCell>
                        <TableCell align="right"><input value={dpaco2} onChange={this.changeHandler} name='dpaco2'   type="text" /></TableCell>
                        <TableCell align="left">RSBI (f/Vt)</TableCell>
                        <TableCell align="right">{rsbiCalc}</TableCell>
                        <TableCell align="left">>105 associated with ↑NPPV for extubation failure</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">Driving Pressure</TableCell>
                        <TableCell align="right">{dpCalc}</TableCell>
                        <TableCell align="left">less than 15</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">Optimal PEEP</TableCell>
                        <TableCell align="right">{opeepCalc}</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">PAO2</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">PaCO2</TableCell>
                        <TableCell align="right">{paco2Calc}</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">ideal RR</TableCell>
                        <TableCell align="right">{irrCalc}</TableCell>
                        <TableCell align="left"></TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>{/* mobile screens */}
            </div>
            <div className="credits">Nitesh Chitturu<br/>Resident Physician, MD<br/></div>
          </div>
          ) : (
            <div>
              <h1 className="App-name">Pulmonary Calculator</h1>
              <div className="App-header">
                <Paper className="Mobile">
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="PaO2" value={pao2} onChange={this.changeHandler} name='pao2' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="PaCO2" value={paco2} onChange={this.changeHandler} name='paco2' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="FiO2" value={fio2} onChange={this.changeHandler} name='fio2' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="RR" value={rr} onChange={this.changeHandler} name='rr'  /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="Vt" value={vt} onChange={this.changeHandler} name='vt' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="PIP" value={pip} onChange={this.changeHandler} name='pip' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="Pplat" value={pplat} onChange={this.changeHandler} name='pplat' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="PEEP" value={peep} onChange={this.changeHandler} name='peep' /><br/>
                  <TextField id="standard-number" type="number" pattern="[0-9]*" label="Desired PaCO2" value={dpaco2} onChange={this.changeHandler} name='dpaco2' /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="2.5" label="A-a gradient" value={aaGradCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="greater than 200" label="P/F ratio" value={pfrCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="IBW" value={ibwCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="Vt ARDS" value={vtaardsCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="greater than 60mL/cmH20" label="Static Lung Compliance" value={slcCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="Dynamic Compliance" value={dcCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="nl less than 10" label="Airway Resistance" value={arCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="less than 12L/min" label="Ve (minute ventilation)" value={veCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="105 associated with ↑NPPV for extubation failure" label="RSBI (f/Vt)" value={rsbiCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="less than 15" label="Driving Pressure" value={dpCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="Optimal PEEP" value={opeepCalc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="PAO2" /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="PaCO2" value={paco2Calc} /><br/>
                  <TextField id="outlined-read-only-input" variant="outlined" helperText="" label="ideal RR" value={irrCalc} /><br/>
                </Paper>
              </div>
              <div className="credits">Nitesh Chitturu<br/>Resident Physician, MD<br/></div>
            </div>
          )
        }
      </Media>
    );
  }
}

export default Pulm
