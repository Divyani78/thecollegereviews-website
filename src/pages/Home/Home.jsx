import { useLocation } from "react-router";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header/>
      <div className="home">
      <Posts/>
      </div>
    </>
  );
}