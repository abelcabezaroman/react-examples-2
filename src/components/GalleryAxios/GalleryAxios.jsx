import axios from "axios";
import { useEffect } from "react";

export default function GalleryAxios() {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      console.log(data);

      // const res = await fetch("https://rickandmortyapi.com/api/character");
      // const resData = await res.json();
      // console.log(resData);
    };

    getData();
  }, []);

  return <div>asdasd</div>;
}
