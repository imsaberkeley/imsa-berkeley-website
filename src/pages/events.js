import React, { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import Header from '../components/header'
import Footer from '../components/Footer'
import Event from '../components/event'
import Loading from '../components/Loading'

export default function Events(props) {
  const [events, setEvents] = useState()
  useEffect(() => {
    var starCountRef = db.ref('events')
    starCountRef.on('value', snapshot => {
      const data = snapshot.val()
      console.log(data)
      setEvents(data)
    })
  }, [])

  if (!events) return <Loading/>
  return (
    <React.Fragment>
      <Header />

      <div
        style={{
          textAlign: 'center',
          margin: '100px 0 80px 0',
          fontFamily: 'Crimson Text',
          fontSize: '48px',
          lineHeight: '50px',
        }}
      >
        IMSA Events
      </div>
      <div
        style={{
          width:'80%',
          
          margin: '60px auto',
          fontFamily: 'Crimson Text',
        }}
      >
        <Event
          name={events.retreat.name}
          url={events.retreat.photo}
          description={events.retreat.description}
        />
                <Event
          name={events.Infocamp.name}
          url={events.Infocamp.photo}
          description={events.Infocamp.description}
        />
                <Event
          name={events.Yearend.name}
          url={events.Yearend.photo}
          description={events.Yearend.description}
        />
      </div>

      <Footer />
    </React.Fragment>
  )
}
