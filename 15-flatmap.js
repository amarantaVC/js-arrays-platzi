//flatmap es un metodo bastante util que tiene la fucion de un flat de alinear array un map de transformar mientras lo va aplanando

const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

const rta = users.map(user => user.attributes).flat();
console.log('map y flat por separado',rta);

//Ahora hacemos esto con flatmap

const rta2 = users.flatMap(user => user.attributes);
console.log('ahora con flatmap',rta2)

//ahora con un diccioneraio que no tiene como tal arrays

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };

const rtaprueba = Object.values(calendars).flatMap(cal => {
    return cal.map(date => date.startDate);
    });
console.log(rtaprueba)