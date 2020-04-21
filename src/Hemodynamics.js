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

class Hemodynamics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: 1,
      age: '',
      sex: '',
      height: '',
      weight: '',
      hgb: '',
      sao2:'',
      svo2: '',
      hr: '',
      map: '',
      cvp: '',
      pasp: '',
      padp: '',
      mpap: '',
      pcwp: '',
      sbp: '',
      dbp: '',
      lvef: ''
    };

  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
  }

  clearForm() {
    //make a button and have it call this onclick with apropriate vars if screen clear needed
    // this.state.fname = '';
    // this.state.lname = '';
    // this.state.email = '';
    // this.state.major = '';
    // this.state.gradYear = '';
  }

  render() {

    const { age, sex, height, weight, hgb, sao2, svo2, hr, map, cvp, pasp, padp, mpap, pcwp, sbp, dbp, lvef } = this.state;

    const needInfo = "Please enter input values";

    var coCalc = needInfo;
    var ciCalc = needInfo;
    var cpCalc = needInfo;
    var svrCalc = needInfo;
    var pvrCalc = needInfo;
    var tpgCalc = needInfo;
    var dpgCalc = needInfo;
    var papiCalc = needInfo;
    var rvswiCalc = needInfo;
    var lvswiCalc = needInfo;
    var lvedvCalc = needInfo;
    var lvesvCalc = needInfo;
    var vo2Calc = needInfo;
    var bsaCalc = needInfo;
    var svCalc = needInfo;
    var sviCalc = needInfo;
    var ppCalc = needInfo;
    var siCalc = needInfo;

    if (height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "") {
      coCalc = (125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100;
      ciCalc = (125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100/Math.pow((height*weight*100)/(3600), 0.5);
    } else {
      coCalc = needInfo;
      ciCalc = needInfo;
    }
    if (height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && map !== "") {
      cpCalc = map*(125*Math.pow((height*weight*100)/(3600), 0.5)/(13.6*hgb*(sao2-svo2))*100)/451;
    } else {
      cpCalc = needInfo;
    }
    if (height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && map !== "" && cvp !== "") {
      svrCalc = ((map-cvp)/((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100))*80;
    } else {
      svrCalc = needInfo;
    }
    if (height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && mpap !== "" && pcwp !== "") {
      pvrCalc = ((mpap-pcwp)/((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100))*80;
    } else {
      pvrCalc = needInfo;
    }
    if (mpap !== "" && pcwp !== "") {
      tpgCalc = mpap-pcwp;
    } else {
      tpgCalc = needInfo;
    }
    if (padp !== "" && pcwp !== "") {
      dpgCalc = padp-pcwp;
    } else {
      dpgCalc = needInfo;
    }
    if (padp !== "" && pasp !== "" && cvp !== "") {
      papiCalc = (pasp-padp)/(cvp);
    } else {
      papiCalc = needInfo;
    }
    if (map !== "" && height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && hr !== "") {
      rvswiCalc = (0.0136*(map-weight)* (((((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000) / (Math.pow((height*weight*100)/(3600), 0.5))) );
    } else {
      rvswiCalc = needInfo;
    }
    if (age !== "" && cvp !== "" && height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && hr !== "") {
      lvswiCalc = (0.0136*(age-cvp)* (((((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000) / (Math.pow((height*weight*100)/(3600), 0.5))) );
    } else {
      lvswiCalc = needInfo;
    }
    if (lvef !== "" && height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && hr !== "") {
      lvedvCalc = (((((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000) /lvef);
    } else {
      lvedvCalc = needInfo;
    }
    if (lvef !== "" && height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && hr !== "") {
      lvesvCalc = ( ((((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000) - (((((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000) /lvef));
    } else {
      lvesvCalc = needInfo;
    }
    if (height !== "" && weight !== "") {
      vo2Calc = 125*Math.pow((height*weight*100)/(3600), 0.5);
    } else {
      vo2Calc = needInfo;
    }
    if (height !== "" && weight !== "") {
      bsaCalc = Math.pow((height*weight*100)/(3600), 0.5);
    } else {
      bsaCalc = needInfo;
    }
    if (height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && hr !== "") {
      svCalc = (((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000;
    } else {
      svCalc = needInfo;
    }
    if (height !== "" && weight !== "" && hgb !== "" && sao2 !== "" && svo2 !== "" && hr !== "") {
      sviCalc = (((((125*Math.pow((height*weight*100)/(3600), 0.5))/(13.6*hgb*(sao2-svo2))*100)/hr)*1000) / (Math.pow((height*weight*100)/(3600), 0.5)));
    } else {
      sviCalc = needInfo;
    }
    if (sbp !== "" && dbp !== "") {
      ppCalc = (sbp-dbp)/(sbp);
    } else {
      ppCalc = needInfo;
    }
    if (sbp !== "" && hr !== "") {
      siCalc = (hr/sbp);
    } else {
      siCalc = needInfo;
    }


    return (
      <Media query="(min-width: 768px)">
        {matches => matches ? (
          <div>
            <h2 className="App-name">Hemodynamics Calculator</h2>
            <div className="App-header">
              <TableContainer component={Paper}>
                <Table className="makeStyles-table-1" size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Hemodynamic Values</strong></TableCell>
                      <TableCell align="right"><strong>Input Data</strong></TableCell>
                      <TableCell align="left"><strong>Hemodynamic Functions</strong></TableCell>
                      <TableCell align="right"><strong>Calculations</strong></TableCell>
                      <TableCell align="left"><strong>Reference Ranges</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">Age</TableCell>
                        <TableCell align="right"><input value={this.state.age} onChange={this.changeHandler} name='age' align="right" type="text" /></TableCell>
                        <TableCell align="left">CO</TableCell>
                        <TableCell align="right">{coCalc}</TableCell>
                        <TableCell align="left">(Vo2)/(13.6 x HgB x (SaO2-SvO2))</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Sex</TableCell>
                        <TableCell align="right"><input value={this.state.sex} onChange={this.changeHandler} type="text" name='sex' maxlength="20" /></TableCell>
                        <TableCell align="left">CI</TableCell>
                        <TableCell align="right">{ciCalc}</TableCell>
                        <TableCell align="left">CO/BSA)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Height(m)</TableCell>
                        <TableCell align="right"><input value={this.state.height} onChange={this.changeHandler} name='height'   type="text" /></TableCell>
                        <TableCell align="left">CP</TableCell>
                        <TableCell align="right">{cpCalc}</TableCell>
                        <TableCell align="left">((MAPx CO))/451)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">Weight(kg)</TableCell>
                        <TableCell align="right"><input value={this.state.weight} onChange={this.changeHandler} name='weight'   type="text" /></TableCell>
                        <TableCell align="left">SVR</TableCell>
                        <TableCell align="right">{svrCalc}</TableCell>
                        <TableCell align="left">((MAP-CVP) x 80)/CO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">HgB</TableCell>
                        <TableCell align="right"><input value={this.state.hgb} onChange={this.changeHandler} name='hgb'   type="text" /></TableCell>
                        <TableCell align="left">PVR</TableCell>
                        <TableCell align="right">{pvrCalc}</TableCell>
                        <TableCell align="left">((Mean PAP-PCWP)x 80)/CO</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">SaO2</TableCell>
                        <TableCell align="right"><input value={this.state.sao2} onChange={this.changeHandler} name='sao2'   type="text" /></TableCell>
                        <TableCell align="left">TPG</TableCell>
                        <TableCell align="right">{tpgCalc}</TableCell>
                        <TableCell align="left">mPAP-PCWP</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">SvO2</TableCell>
                        <TableCell align="right"><input value={this.state.svo2} onChange={this.changeHandler} name='svo2'   type="text" /></TableCell>
                        <TableCell align="left">DPG</TableCell>
                        <TableCell align="right">{dpgCalc}</TableCell>
                        <TableCell align="left">PADP-PCWP</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">HR</TableCell>
                        <TableCell align="right"><input value={this.state.hr} onChange={this.changeHandler} name='hr'   type="text" /></TableCell>
                        <TableCell align="left">PAPI</TableCell>
                        <TableCell align="right">{papiCalc}</TableCell>
                        <TableCell align="left">((PASP-PADP))/CVP </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">MAP</TableCell>
                        <TableCell align="right"><input value={this.state.map} onChange={this.changeHandler} name='map'   type="text" /></TableCell>
                        <TableCell align="left">RVSWI</TableCell>
                        <TableCell align="right">{rvswiCalc}</TableCell>
                        <TableCell align="left">0.0136 x SVI x (mPAP-CVP)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">CVP</TableCell>
                        <TableCell align="right"><input value={this.state.cvp} onChange={this.changeHandler} name='cvp'   type="text" /></TableCell>
                        <TableCell align="left">LVSWI</TableCell>
                        <TableCell align="right">{lvswiCalc}</TableCell>
                        <TableCell align="left">0.0136 x SVI x (MAP-PCWP)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">PASP</TableCell>
                        <TableCell align="right"><input value={this.state.pasp} onChange={this.changeHandler} name='pasp'   type="text" /></TableCell>
                        <TableCell align="left">LVEDV</TableCell>
                        <TableCell align="right">{lvedvCalc}</TableCell>
                        <TableCell align="left">SV/LVEF</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">PADP</TableCell>
                        <TableCell align="right"><input value={this.state.padp} onChange={this.changeHandler} name='padp'   type="text" /></TableCell>
                        <TableCell align="left">LVESV</TableCell>
                        <TableCell align="right">{lvesvCalc}</TableCell>
                        <TableCell align="left">LVEDV-SV</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">mPAP</TableCell>
                        <TableCell align="right"><input value={this.state.mpap} onChange={this.changeHandler} name='mpap'   type="text" /></TableCell>
                        <TableCell align="left">VO2</TableCell>
                        <TableCell align="right">{vo2Calc}</TableCell>
                        <TableCell align="left">125 x BSA</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">PCWP</TableCell>
                        <TableCell align="right"><input value={this.state.pcwp} onChange={this.changeHandler} name='pcwp'   type="text" /></TableCell>
                        <TableCell align="left">BSA</TableCell>
                        <TableCell align="right">{bsaCalc}</TableCell>
                        <TableCell align="left">√((height (cm)x weight (kg))/3600)</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">SBP</TableCell>
                        <TableCell align="right"><input value={this.state.sbp} onChange={this.changeHandler} name='sbp'   type="text" /></TableCell>
                        <TableCell align="left">SV</TableCell>
                        <TableCell align="right">{svCalc}</TableCell>
                        <TableCell align="left">CO/HR x 100</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">DBP</TableCell>
                        <TableCell align="right"><input value={this.state.dbp} onChange={this.changeHandler} name='dbp'   type="text" /></TableCell>
                        <TableCell align="left">SVI</TableCell>
                        <TableCell align="right">{sviCalc}</TableCell>
                        <TableCell align="left">SV/BSA</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row">LVEF</TableCell>
                        <TableCell align="right"><input value={this.state.lvef} onChange={this.changeHandler} name='lvef'   type="text" /></TableCell>
                        <TableCell align="left">pulse pressure</TableCell>
                        <TableCell align="right">{ppCalc}</TableCell>
                        <TableCell align="left">(SBP-DBP)/SBP</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="left">shock index </TableCell>
                        <TableCell align="right">{siCalc}</TableCell>
                        <TableCell align="left">Shock Index = HR/SBP</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>{/* mobile screens */}
            </div>
            <div className="credits">Nitesh Chitturu<br/>Resident Physician, MD<br/></div>
          </div>
          ) : (
            <div>
              <h1 className="App-name">Hemodynamics Calculator</h1>
              <div className="App-header">
                <Paper className="Mobile">
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="Age" value={this.state.age} onChange={this.changeHandler} name='age' /><br/>
                <TextField id="standard-basic" label="Sex" value={this.state.sex} onChange={this.changeHandler} name='sex' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="Height (m)" value={this.state.height} onChange={this.changeHandler} name='height' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="Weight (kg)" value={this.state.weight} onChange={this.changeHandler} name='weight' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="HgB" value={this.state.hgb} onChange={this.changeHandler} name='hgb'  /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="SaO2" value={this.state.sao2} onChange={this.changeHandler} name='sao2' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="SvO2" value={this.state.svo2} onChange={this.changeHandler} name='svo2' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="HR" value={this.state.hr} onChange={this.changeHandler} name='hr' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="MAP" value={this.state.map} onChange={this.changeHandler} name='map' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="CVP" value={this.state.cvp} onChange={this.changeHandler} name='cvp' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="PASP" value={this.state.pasp} onChange={this.changeHandler} name='pasp' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="PADP" value={this.state.padp} onChange={this.changeHandler} name='padp' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="mPAP" value={this.state.mpap} onChange={this.changeHandler} name='mpap' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="PCWP" value={this.state.pcwp} onChange={this.changeHandler} name='pcwp' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="SBP" value={this.state.sbp} onChange={this.changeHandler} name='sbp' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="DBP" value={this.state.dbp} onChange={this.changeHandler} name='dbp' /><br/>
                <TextField id="standard-number" type="number" pattern="[0-9]*" label="LVEF" value={this.state.lvef} onChange={this.changeHandler} name='lvef' /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="(Vo2)/(13.6 x HgB x (SaO2-SvO2))" label="CO" value={coCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="CO/BSA" label="CI" value={ciCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="((MAPx CO))/451)" label="CP" value={cpCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="((MAP-CVP) x 80)/CO" label="SVR" value={svrCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="((Mean PAP-PCWP)x 80)/CO" label="PVR" value={pvrCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="mPAP-PCWP" label="TPG" value={tpgCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="PADP-PCWP" label="DPG" value={dpgCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="((PASP-PADP))/CVP" label="PAPI" value={papiCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="0.0136 x SVI x (mPAP-CVP)" label="RVSWI" value={rvswiCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="0.0136 x SVI x (MAP-PCWP)" label="LVSWI" value={lvswiCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="SV/LVEF" label="LVEDV" value={lvedvCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="LVEDV-SV" label="LVESV" value={lvesvCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="125 x BSA" label="VO2" value={vo2Calc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="√((height (cm)x weight (kg))/3600)" label="BSA" value={bsaCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="CO/HR x 100" label="SV" value={svCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="SV/BSA" label="SVI" value={sviCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="(SBP-DBP)/SBP" label="Pulse Pressure" value={ppCalc} /><br/>
                <TextField id="outlined-read-only-input" variant="outlined" helperText="HR/SBP" label="Shock Index" value={siCalc} /><br/>
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

export default Hemodynamics
