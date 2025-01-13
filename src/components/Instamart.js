import React from "react";
import "./instamart.css"; // Add your CSS file
import "@fortawesome/fontawesome-free/css/all.min.css";

const categories = [
  { img: "../../image/frui2.avif", title: "Fresh Fruit" },
  { img: "../../image/veg.avif", title: "Fresh Vegetables" },
  { img: "../../image/fruit4.avif", title: "Atta, Rice, and Dals" },
  { img: "../../image/fruit5.avif", title: "Masalas and Dry Fruits" },
  { img: "../../image/fruit3.avif", title: "Dairy, Bread, and Eggs" },
  { img: "../../image/frui5.avif", title: "Oils and Ghee" },
  { img: "../../image/frui9.avif", title: "Meat and Seafood" },
  { img: "../../image/fruit6.avif", title: "Munchies" },
  { img: "../../image/fruit8.avif", title: "Cold Drinks and Juices" },
  { img: "../../image/fruit7.avif", title: "Sweet Tooth" },
  { img: "../../image/baby.avif", title: "Baby Care" },
  { img: "../../image/bath.avif", title: "Bath, Body, and Hair" },
  { img: "../../image/beauty.avif", title: "Beauty and Grooming" },
  { img: "../../image/cereal.avif", title: "Cereal and Breakfast" },
  { img: "../../image/cleaning.avif", title: "Cleaning Essential" },
  { img: "../../image/home.avif", title: "Home and Kitchen" },
  { img: "../../image/hygiene.avif", title: "Hygiene and Wellness" },
  { img: "../../image/instantfood.avif", title: "Instant and Frozen Food" },
  { img: "../../image/office.avif", title: "Office and Electricals" },
  { img: "../../image/paan.avif", title: "Paan Corner" },
  { img: "../../image/sauces.avif", title: "Sauces and Spread" },
  { img: "../../image/tea.avif", title: "Tea, Coffee, and More" },
  { img: "../../image/pet.avif", title: "Pet Supplies" },
  { img: "../../image/biscuits.avif", title: "Biscuits and Cakes" },
];

const Instamart = () => {
  return (
    <div>
      {/* Top Menu */}
      <div className="top_menu">
        <div className="login_circle">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="search" placeholder="Search for 'diapers'" />
      </div>

      {/* Shop by Category */}
      <div className="shop">
        <h3>SHOP BY CATEGORY</h3>
      </div>
      <div className="line"></div>
      <br />

      {/* Categories */}
      <div className="items">
        {categories.map((category, index) => (
          <div className="box" key={index}>
            <img src={category.img} alt={category.title} />
            <h2>{category.title}</h2>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="footer">
        <img src="../../image/App_download_banner.avif" alt="Download App" />
        <img
          className="footer_logo"
          src="../../image/swiggy_name.avif"
          alt="Swiggy"
          style={{ width: "30vh" }}
        />
        <br />
        <div className="container">
          <div className="footer_list1">
            <h3>Categories</h3>
            <ul>
              <li>Office</li>
              <li>Office in Delhi</li>
              <li>Office in Mumbai</li>
              <li>Office in Kolkata</li>
              <li>Dairy, Bread, and Eggs</li>
              <li>Office and Electricals</li>
              <li>Beauty and Grooming</li>
            </ul>
          </div>
          <div className="footer_list2">
            <h3>We deliver to</h3>
            <ul>
              <li>Bangalore</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Kolkata</li>
              <li>Jaipur</li>
              <li>Pune</li>
              <li>Kochi</li>
            </ul>
          </div>
          <div className="footer_list3">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy Genie</li>
              <li>Swiggy One</li>
            </ul>
          </div>
        </div>
        <div className="icons">
          <i className="fa fa-person"></i>
          <i className="fa fa-shopping-cart"></i>
          <i className="fa fa-tags"></i>
          <i className="fa fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Instamart;
