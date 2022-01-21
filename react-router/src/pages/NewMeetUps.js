import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUps() {
  function onAddMeetUpHandle(meetupData) {
    fetch(
      "https://meetups-app-655f2-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "Post",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <section>
      <h1>New Meetups</h1>
      <NewMeetupForm onAddMeetUp={onAddMeetUpHandle} />
    </section>
  );
}

export default NewMeetUps;
