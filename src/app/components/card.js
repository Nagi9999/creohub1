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
      id: "3",
      src: "https://api.time.com/wp-content/uploads/2014/10/457287220.jpg",
      name: "LeBron James",
      number: "Jersey number 23",
    },
  ];

  return (
    <div className="  flex justify-center pt-20">
      <div className="flex justify-between space-x-4">
        {Data.map((item) => {
          return (
            <div key={item.id} className="px-8 py-8 bg-orange-500 rounded-md text-center shadow-gray-800 shadow-lg">
              <img className="max-w-xs max-h-xs rounded-md" src={item.src} alt="This is a card" />
              <h3>{item.name}</h3>
              <p>{item.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
