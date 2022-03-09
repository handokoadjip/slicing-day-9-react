import { Img1, Img2, Img3, Img4, Img5, Img6 } from "assets/source/image";
import React from "react";

const index = () => {
  const lists = [
    {
      image: Img1,
    },
    {
      image: Img2,
    },
    {
      image: Img3,
    },
    {
      image: Img4,
    },
    {
      image: Img5,
    },
    {
      image: Img6,
    },
  ];

  function romanize(num) {
    var roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    var str = "";

    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }

    return str;
  }

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          {lists ? (
            lists.map((list, index) => {
              return (
                <div className="col-6 px-0 py-3" key={`content-${index}`}>
                  <figure>
                    <img
                      className="img-fluid w-100 h-image mb-5"
                      src={list.image}
                      alt={`image-${index}`}
                    />
                    <figcaption>
                      <h2 className="text-center">{romanize(index + 1)}</h2>
                    </figcaption>
                  </figure>
                </div>
              );
            })
          ) : (
            <h2 className="text-center">No List in this section</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default index;
