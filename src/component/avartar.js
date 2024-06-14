import React from "react";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Avartar() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avartar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      ></img>
    </div>
  );
}

export default Avartar;