import React from 'react';

function Footer()
{
    return(
<>

    <footer className="bg-secondary text-white display-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center font-monospace fst-italic">
            &copy; {new Date().getFullYear()} Paisa.Net 
          </div>
        </div>
      </div>
    </footer>


</>
    );
}
export default Footer;