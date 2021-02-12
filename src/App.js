import React from 'react';

function Food({name, picture}) {
    return( <div>
        <h2>I like {name}</h2>
          <img width = "300" src = {picture} />
        </div>
    );
}

const foodILike = [
  {
    name :"kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
  },
  {
    name :"galbi",
    image: "https://www.seriouseats.com/2019/07/20190619-korean-bbq-kalbi-beef-short-ribs-vicky-wasik-21-1500x1125.jpg"
  },
  {
    name :"samgyeopsal",
    image:"https://i1.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?fit=900%2C600&ssl=1"
  },
  {
    name :"sushi",
    image:"https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg"
  }


]


function App() {
    return (<div> {/*dish is just object*/}
        {foodILike.map(dish => <Food name = {dish.name} picture = {dish.image}/>)}

    </div>);
}

export default App;
