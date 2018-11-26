import firebase from "firebase/app";
import "firebase/database";
import { useState, useEffect } from "react";

import AwesomeJourney from "../components/awesome-journey";
import style from './awesome-things.css'

if (process.browser) {
  window.firebase = firebase
}

export default () => {
  const [place, setPlace] = useState({
    mia: 0,
    aria: 0,
    fiona: 0
  });

  const kids = [
    {
      id: "mia",
      name: "Mia Moon",
      alias: "Little Miss Chatterbox",
      place: place.mia
    },
    {
      id: "aria",
      name: "Aria Moon",
      alias: "Little Miss Silly",
      place: place.aria
    },
    {
      id: "fiona",
      name: "Fiona Moon",
      alias: "Little Miss Wriggle",
      place: place.fiona
    }
  ];

  const offsets = [30, 11];

  const positions = [
    [0, 0],
    [-12, 7],
    [-18, 14],
    [-24, 21],
    [-28, 28],
    [-29, 35],
    [-28, 42],
    [-23, 49],
    [-16, 56],
    [-8, 63],
    [-6, 70]
  ];

  useEffect(() => {
    const config = {
      apiKey: "AIzaSyBWGE1ngJi8_n-L40UrZKb5oiQT6m2QhwQ",
      authDomain: "awesome-castle.firebaseapp.com",
      databaseURL: "https://awesome-castle.firebaseio.com",
      projectId: "awesome-castle",
      storageBucket: "awesome-castle.appspot.com",
      messagingSenderId: "1074451816869"
    }

    if (!firebase.default.apps.length) {
      firebase.initializeApp(config)
    } else {
      console.log(firebase.default.apps)
    }

    const database = firebase.database()

    database.ref().on('value', function(snapshot) {
      console.log(snapshot.val())
    })
  }, [false])

  return (
    <div className={style.wrapper}>
      <AwesomeJourney />
      <div>
        {kids.map(kid => (
          <div
            className={style.kid}
            key={kid.name}
            onClick={() => setPlace({ ...place, [kid.id]: place[kid.id] + 1 })}
            style={{
              bottom: `${10 + offsets[0] + positions[place[kid.id]][0]}%`,
              left: `${offsets[1] + positions[place[kid.id]][1]}%`
            }}
          >
            {kid.name}
          </div>
        ))}
      </div>
    </div>
  );
};
