import loadImg from "../assets/loading.png";
import "./LoadingScreen.scss";

export default function LoadingScreen() {
  return (
    <div className="container-loading">
      <img className="pokeball-loading" src={loadImg} alt="Loading Screen" />
    </div>
  );
}
