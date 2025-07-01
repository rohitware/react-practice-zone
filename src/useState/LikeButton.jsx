import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);
  return (
    <>
      <h3>You have: {like} Likes</h3>

      <button onClick={() => setLike(like + 1)}>Like 👍</button>
    </>
  );
}
export default LikeButton;
