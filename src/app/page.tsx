import GoogleMaps from "./components/Map/GoogleMaps";
import TextSlider from "./components/Slider/TextSlider";
import Question from "./components/Question/Question";

export default function Home() {

  return (
    <div>
      <TextSlider />
      <div className="mb-[72px] lg:mb-36">
      <GoogleMaps />
      </div>
      <Question />
    </div>
  );
}
