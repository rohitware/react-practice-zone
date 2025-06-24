import ProfileImage from "./assets/rohit.JPG";

const ProfileCard = () => {
  const name = "Rohit Ware";
  const job = "Frontend Develper";

  return (
    <div className="p-4 border rounded shadow w-60 text-center">
      <img
        src={ProfileImage}
        alt="Profile"
        style={{ width: "150px", height: "150px" }}
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600">{job}</p>
    </div>
  );
};

export default ProfileCard;
