

const Contact = () => {
  return (
    <div className='flex justify-center w-full bg-quinary text-white py-8'>
      <div className="grid md:grid grid-cols-1 gap-4 md:grid-cols-3 max-w-4xl w-full mx-8">
        <div className="bg-quaternary w-full md:w-64 p-2 h-24 border-b-4 border-secondary">
          <h3>Address</h3>
          <p>1211 West 3rd Street<br />Hope, AR 71801</p>
        </div>
        <div className="bg-quaternary w-full md:w-64 p-2 h-24 border-b-4 border-primary">
          <h3>Phone</h3>
          <p>870-826-0950</p>
        </div>
        <div className="bg-quaternary w-full md:w-64 p-2 h-24 border-b-4 border-secondary">
          <h3>Hours</h3>
          <p>Mon - Fri: 8:00am- 5:00pm</p>
          <p>Sat - Sun: Closed</p>
        </div>
      </div>

    </div>
  );
};

export default Contact;