export default function Card() {
  const Data = [
    {
      id: "1",
      src: "https://media.gettyimages.com/id/81018506/photo/utah-jazz-v-los-angeles-lakers-game-1.jpg?s=2048x2048&w=gi&k=20&c=OceDdmhioUWmOdykaKt-SzC-augc9p7A0oZdAlboxQI=",
      name: "Kobe Bryant",
      number: "Jersey number 24",
    },
    {
      id: "2",
      src: "https://media.gettyimages.com/id/176460478/photo/chicago-bulls-v-portland-trail-blazers.jpg?s=2048x2048&w=gi&k=20&c=vytMExU4trJziqiR3trcGnxf3VcMzTDe9N6DXedL6cU=",
      name: "Micheal Jordan",
      number: "Jersey number 23",
    },
    {
      id: "1",
      src: "https://api.time.com/wp-content/uploads/2014/10/457287220.jpg",
      name: "Lebron James",
      number: "Jersey number 23",
    },
  ];
  return (
    <div class="container">
      <div class="card-container">
        {Data.map((item) => {
          return (
            <div class="card">
              <img src={item.src} alt="This is a card" />
              <h3>{item.name}</h3>
              <p>{item.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
