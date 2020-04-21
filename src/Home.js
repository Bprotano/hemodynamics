import React from 'react';
import Button from 'react-bootstrap/Button';
import Media from "react-media";


class Home extends React.Component  {

  render() {
    //rao you can change the title for the mobile and big screen version here and add whatever you want
    //on lines 15 and 21
    return(
      <Media query="(min-width: 768px)">
        {matches => matches ? (
          <div className="Links">
            <span className="Title"><strong>Nitesh Chitturu</strong><br/>Resident Physician, MD</span>
            <Button href="/hemodynamics"size="lg" variant="secondary">Hemodynamics Calculator</Button>
            <Button href="/pulm" size="lg" variant="secondary">Pulmonary Calculator</Button>
          </div>
          ) : (
            <div className="Links">
              <span className="Title"><strong>Nitesh Chitturu</strong><br/>Resident Physician, MD</span>
              <Button href="/hemodynamics"size="lg" block variant="secondary">Hemodynamics Calculator</Button>
              <Button href="/pulm" size="lg" block variant="secondary">Pulmonary Calculator</Button>
            </div>
          )
        }
      </Media>
    );
  }
};
export default Home;
