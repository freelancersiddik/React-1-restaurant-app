import React from "react";

const Navbar = ({ filterItem, menuItem }) => {
  return (
    <nav class="navbar navbar-expand-lg mb-4 ">
      <div class="container">
        <a class="navbar-brand" href="/">
          Us|Rest
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            {menuItem.map((curElem) => {
              return (
                <button
                  class="nav-link active"
                  onClick={() => filterItem(curElem)}
                >
                  {curElem}
                </button>
              );
            })}
          </div>
          <button class="nav-link active order_btn mt-sm-2">Order</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
