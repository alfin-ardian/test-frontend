import Image from "../src/assets/image.jpg";

function App() {
  return (
    <div className="max-w-xs bg-white rounded-lg relative mt-4">
      <div className="mr-10 left-0">
        <div className="flex p-4 -pb-4">
          <img className="w-16 h-16 rounded-2xl" src={Image} alt="Profile" />
          <div className="ml-4">
            <p className="text-sm" style={{ color: "#454F63" }}>
              16 Nov
            </p>
            <div className="font-bold text-lg" style={{ color: "#454F63" }}>
              Bernard Nolan
            </div>
          </div>
        </div>
        <div className="px-6" style={{ marginRight: "60px" }}>
          <p
            className="text-sm text-start max-w-xs"
            style={{ color: "#78849E" }}
          >
            You can’t fall if you don’t climb. But there’s no joy in living your
            whole life on the ground.
          </p>
        </div>
      </div>

      <div
        className="absolute top-0 w-32 h-32 mt-5"
        style={{ width: "120px", height: "120px", marginLeft: "230px" }}
      >
        <img className="w-32 h-32 rounded-lg" src={Image} alt="Profile" />
      </div>
    </div>
  );
}

export default App;
