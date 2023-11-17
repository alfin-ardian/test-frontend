import { ArrowLeftOutlined } from "@ant-design/icons";
import Image from "../src/assets/image.jpg";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";

function App() {
  return (
    <div className="bg-gray-800 text-white h-screen min-w-screen overflow-auto flex items-center justify-center">
      <div className="container p-4 absolute top-0 left-1/2 transform -translate-x-1/2">
        <ArrowLeftOutlined />
        <h1 className="text-3xl font-bold mb-4">City News</h1>

        <div className="max-w-xs bg-white rounded-lg relative mt-4">
          <img className="w-full rounded-lg" src={Image} alt="example" />
        </div>

        <LeftCard />
        <RightCard />
      </div>
    </div>
  );
}

export default App;
