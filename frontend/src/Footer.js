// Import React.
import React from 'react';

// Functional Component - Footer.
function Footer() {
  return (
    <div>
      {/* JSX for the footer */}
      <footer className="bg-secondary text-white display-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center font-monospace fst-italic">
              &copy; {new Date().getFullYear()} The Money Manager
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Export the Footer Component.
export default Footer;