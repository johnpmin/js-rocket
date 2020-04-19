var car = {
  make: "BMW",
  type: "Series 5",
  color: "Gray",
  isTurnedOn: false,
  numberOfWheels: 4,
  numberOfSeats: ["seat 1",
                  "seat 2",
                  "seat 3",
                  "seat 4" ],
  carOn: function(){
    this.isTurnedOn = true;
  },
  fly: function(){
    alert('we can fly over the world');
  }

};
