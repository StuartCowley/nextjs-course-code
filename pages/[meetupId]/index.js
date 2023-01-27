import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      image="https://cdn.britannica.com/35/155335-050-D0C61BB7/Notre-Dame-de-Paris-France.jpg"
      title="A first meetup"
      address="An address, toBeFilledOutLater drive"
      description="The description"
    />
  );
};

export function getStaticPaths() {
  // Needed for a page that uses getStaticProps AND has dynamic props
  // Define all valid paths for the server to generate content for

  // fallback: paths [] contains ALL or SOME routes available
  // false ===  ALL valid routes. 404 shown for others
  // true  === Will attempt page when request comes in

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1"
        }
      },
      {
        params: {
          meetupId: "m2"
        }
      },
    ]
  }
}

export function getStaticProps(context) {

  const meetupId = context.params.meetupId;
  console.log(meetupId);

  // fetch data for a single meetup
  return {
    props: {
      meetupData: {
        image: "https://cdn.britannica.com/35/155335-050-D0C61BB7/Notre-Dame-de-Paris-France.jpg",
        id: "m1",
        title: "A first meetup",
        address: "An address, toBeFilledOutLater drive",
        description: "The description"
      }
    }
  }
}

export default MeetupDetailsPage;
