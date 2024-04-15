import React from 'react';
import SpecialCard from './SpecialCard';
import salad from "../assets/images/greeksalad.jpg";
import bruchetta from "../assets/icons/bruchetta.svg";
import dessert from "../assets/images/lemondessert.jpg";

const Specials = () => {
  return (
    <>
    <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>
          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <SpecialCard
          image={salad}
          title="Greek Salad"
          description="The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <SpecialCard
          image={bruchetta}
          title="Bruschetta"
          description="Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."
        />
        <SpecialCard
          image={dessert}
          title="Lemon Cake"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </>
  )
}

export default Specials;
