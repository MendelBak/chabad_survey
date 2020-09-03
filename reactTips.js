// In order to initialize MaterializeCSS components follow this guide (http://fullstackhybrid.com/using-materializecss-with-reactjs/) or use this code.
import M from 'materialize-css';

componentDidMount() {
    // Auto initialize MaterializeCSS components with default options.
    M.AutoInit();
  }

  // or 
componentDidMount() {

    let sidenav = document.querySelectorAll('.sidenav');
    
    let options = {
        inDuration: 300,
        outDuration: 300,
        hover: true, // Activate on hover
        coverTrigger: false, // Displays dropdown below the button
    };
    
    M.FormSelect.init(sidenav, options);
}
