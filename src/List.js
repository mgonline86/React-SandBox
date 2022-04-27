export default function List(props) {
  console.log(props.names);
  return (
    <main class="leaderboard__profiles">
      {props.names.map((x, i) => (
        <article class="leaderboard__profile">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Mark Zuckerberg"
            class="leaderboard__picture"
          />
          <span class="leaderboard__name">{x}</span>
          <span class="leaderboard__value">
            35.7<span>B</span>
          </span>
        </article>
      ))}
    </main>
  );
}
