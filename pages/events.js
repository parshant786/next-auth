import { useState } from "react";
import { useRouter } from "next/router";

const Event = ({ eventsList }) => {
  const [events, setEvents] = useState(eventsList);
  const route= useRouter()

  const handleClick = async () => {
    const response = await fetch(`http://localhost:4000/events?catagory=sports`);
    const data = await response.json();
    setEvents(data);
    route.push("/events?catagory=sports", undefined, { shallow: true });
  };
  return (
    <>
      <h2>
        <button onClick={handleClick}>sport </button>
        {events.map((event) => {
          return (
            <div key={event.id}>
              {event.title}|{event.catagory}
            </div>
          );
        })}
      </h2>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { catagory } = query;
  const isString = catagory ? "?catagory=sports" : "";

  const response = await fetch(`http://localhost:4000/events${isString}`);
  const data = await response.json();
  return {
    props: {
      eventsList: data,
    },
  };
};
export default Event;
