// rafce  -- Give the react functional component skeleton (Boilerplate)


const Contact = () => {
  return (
    <div className="container">
        <div className="card" style = {{width:"75rem"}}>
            <div className="card-body">
                <h1 className="font-bold">Contact us for your query....</h1>
                <p className="card text text-warning">Ph: 044-12345678</p>
                <p className="card text text-success">Email: customercare@annapoorna.com</p>
                <input type = "text" className="border border-black p-2 m-2" placeholder="enter name"/>
                <input type = "text" className="border border-black p-2 m-2" placeholder="enter comments"/>
                <button className="p-2 m-2 border border-black">Submit</button>
            </div>
        </div>
    </div>
  );
};

export default Contact;