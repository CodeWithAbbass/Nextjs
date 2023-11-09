"use client";
const Button = ({ userId }) => {
  return (
    <div className="Button">
      <button onClick={() => alert(userId)}>Check ID</button>
    </div>
  );
};

export default Button;
