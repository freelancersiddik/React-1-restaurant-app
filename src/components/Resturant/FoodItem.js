const FoodItem = ({ items }) => {
  return (
    <>
      {items.map((curElem) => {
        const { id, name, cetagory, price, image } = curElem;
        return (
          <div
            className="card col-md-3 col-xxl-3 p-0 col-6 "
            key={id}
            data-aos="zoom-in"
            
          >
            <img src={image} className="card-img-top" alt="Not Found " />
            <div className="card-body">
              <h5 className="card-title text-success text-capitalize">
                {cetagory}
              </h5>
              <h5 className="card-title">{name}</h5>
              <p className="card-text fw-bold">{price}$</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-success btn-sm">Read More</button>
                <button className="btn btn-warning btn-sm">Order Now</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FoodItem;
