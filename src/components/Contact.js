// rafce  -- Give the react functional component skeleton (Boilerplate)


const Contact = () => {
  return (
    <div className="container">
        <div className="card" style = {{width:"75rem"}}>
            <div className="card-body">
                <h1 className="card-tile">Contact us for your query....</h1>
                <p className="card text text-warning">Ph: 044-12345678</p>
                <p className="card text text-success">Email: customercare@annapoorna.com</p>
            </div>
        </div>
    </div>
  );
};

export default Contact;