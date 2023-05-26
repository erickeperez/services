import clientPromise from "../lib/mongodb";

export default function Users({ users }) {
  return (
    <div>
      <h1>Testigo</h1>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <h2>First Name: {user.first_name}</h2>
            <h2>Last Name: {user.last_name}</h2>
            <h2>Group: {user.group_number}</h2>
          </li>
        ))}
      </ul>

      <form action="/send-data-here" method="post">
        <label for="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <label for="group">Numero de Groupo:</label>
        <input type="text" id="group" name="groupo" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("JWDB");
    const witness = await db
      .collection("users")
      .find({})
      .sort({})
      .limit(10)
      .toArray();

    return {
      props: { users: JSON.parse(JSON.stringify(witness)) },
    };
  } catch (e) {
    console.error(e);
  }
}
