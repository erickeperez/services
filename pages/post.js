import { useState } from "react";

const Post = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [group_number, setGroupNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        first_name: first_name,
        last_name: last_name,
        group_number: group_number,
      };

      const response = await fetch("/api/post", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then((data) => {
      alert(data.message);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="First Name">First Name</label>
        <input
          id="first_name"
          type="text"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Last Name">Last Name</label>
        <input
          id="last_name"
          type="text"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Group Number">Group Number</label>
        <input
          id="group_number"
          type="text"
          value={group_number}
          onChange={(e) => setGroupNumber(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Post;