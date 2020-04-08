import sanity from '@sanity/client'
import { useState, useEffect } from "react";
import AwesomeJourney from "../components/awesome-journey";
import style from './awesome-things.module.css'
export default () => {
  const [awesomeData, setAwesomeData] = useState(null)
  const offsets = [30, 7];
  const positions = [
    [0, 0],
    [-12, 4],
    [-18, 9],
    [-24, 14],
    [-28, 19],
    [-29, 25],
    [-26, 30],
    [-25, 35],
    [-22, 40],
    [-22, 45],
    [-20, 49],
    [-18, 54],
    [-18, 59],
    [-18, 65],
    [-6, 70]
  ];
  useEffect(() => {
    const client = sanity({
      projectId: 'o254wohk',
      dataset: 'production'
    })
    client.fetch(`*[ _type == "kid" ] { name, position, "avatar": avatar.asset->url }`).then(data => {
      const order = ['mia', 'aria', 'fiona']
      setAwesomeData(data.sort((a, b) => order.indexOf(a.name) < order.indexOf(b.name) ? -1 : 1))
    })
    client.listen(`*[ _type == "kid" ] { name, position }`).subscribe(data => {
      // const { name, position } = data.result
      // alert(JSON.stringify({ name, position }))
      // alert(JSON.stringify(data))
      setAwesomeData(awesomeData => {
        awesomeData.filter(({ name }) => name === data.result.name)[0].position = data.result.position
        return [].concat(awesomeData)
      })
      // setPlace(place => ({ ...place, [name]: position }))
    })
    // client.listen(`*`).subscribe(data => alert(JSON.stringify(data)))
  }, [false])
  return (
    <div className={style.wrapper}>
      <AwesomeJourney />
      {awesomeData && <div>
        {awesomeData.map(({ name, position, avatar }) => (
          <div
            className={style.kid}
            key={name}
            style={{
              bottom: `${(name === 'mia' ? 10 : name === 'fiona' ? 2 : 5) + offsets[0] + positions[position][0]}%`,
              left: `${offsets[1] + positions[position][1]}%`
            }}
          >
            <img src={`${avatar}?w=200`} style={{ width: '100%' }}/>
          </div>
        ))}
      </div>}
    </div>
  );
};