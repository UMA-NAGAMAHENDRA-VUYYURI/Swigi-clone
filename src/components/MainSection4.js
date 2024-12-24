import React from 'react';
import './MainSection4.css';

// Mock data for images
const items = [
  { id: 1, src: '/images/frui2.avif', alt: 'Fresh Fruits 1' },
  { id: 2, src: '/images/fruit10.avif', alt: 'Fresh Fruits 2' },
  { id: 3, src: '/images/frui5.avif', alt: 'Fresh Fruits 3' },
  { id: 4, src: '/images/frui9.avif', alt: 'Fresh Fruits 4' },
  { id: 5, src: '/images/fruit10.avif', alt: 'Fresh Fruits 5' },
  { id: 6, src: '/images/frui5.avif', alt: 'Fresh Fruits 6' },
  { id: 7, src: '/images/frui9.avif', alt: 'Fresh Fruits 7' },
];

function MainSection4() {
  return (
    <section className="section-4">
      <div className="container">
        <div className="instamart">
          <div className="instamart-wrap">
            <h1>Shop groceries on Instamart</h1>
          </div>
          <div className="menu-instamart">
            {items.map((item) => (
              <div key={item.id} className="menu-item">
                <a href="javascript:void(0);">
                  <img src={item.src} alt={item.alt} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection4;
