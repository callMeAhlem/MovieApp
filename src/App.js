import "./App.css";
import { useState } from "react";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail";
function App() {
  const [movieLib, setmovieLib] = useState([
    {
      name: "Unlocked",
      about:
        "A woman’s life is turned upside-down when a dangerous man gets a hold of her lost cell phone and uses it to track her every move.",
      url: "http://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZOXQRj7-HXNC_crZVnqcE9nlh1FoI9JjbbhUYigReht8PeQScIssYzoWvLFRhckRUKobT5MWJRUkzh340cIkrcIgFGVvClyjWYd0mBCIJQnNHovpF3C34Z665hZFRNhd0i0.jpg?r=1ea",
      rating: 3.5,
      trailer:"https://youtu.be/w5aU3p_QsRQ"
    },
    {
      name: "You",
      about:
        "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
      url: "http://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVefe_Jx4nOjj5Ftdq2HJaWDCKgss0BYf2zv9aPFBTfAvIzc4tkX3eSY0OGfdwFiEtX-dUD8UQ4q6xhfdn7ZTKPaX1_KbepyBU66089pf7pWrryWFWHsUJckO1BfORVTmrF47wL0uzWllok72HzCAL7OnRg1wQ0tqaNz-e23Yyp_LXJ75pmU2LvBVqKC_QMUdyJwuZmm1cKUtnUvfdRcQrWoyCckUSkgy1sba4xt-juqRSO6LnIrpP-b2szm7F0W-NRXokjwK9bx7m6329hz3kDAmNTd4JN1KaNr5bE6U6aP2pkV4XA.jpg?r=3bf",
      rating: 5,
      trailer:"https://youtu.be/EvwvHrtL1xY"
    },
    {
      name: "Harry Potter 5",
      about:
        "Learning that his warning about the return of Voldemort has been ignored, Harry trains a group of students to defend themselves against the dark arts.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeQAkmSTGsnY388Lyf_93f28zb_ilhYWKAEET64pVdEroufAOWWjhSjKfJwD9SxG5bBX44KUAnZ4GbXEbaBU0VLu-UKVkO30bEg.webp?r=470",
      rating: 2,
      trailer:"https://youtu.be/y6ZW7KXaXYk"
    },
    {
      name: "Breaking Bad",
      about:
        "As Walt cleans up the mess that was left after his first drug deal, Skyler gets too close to the truth about his double life.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZi_RqpT84KU9PuLqluo8QNslnXT8Hu2_bME3ez2GFxUqc-CdICtULofUMFIpTV_EO1tghUWNSLzXeqhWzYDdSL2ifiUB0eKrn8.webp?r=01d",
      rating: 5,
      trailer:"https://youtu.be/ceqOTZnhgY8"
    },
    {
      name: "The Big Bang Theory",
      about:
        "Meemaw comes to visit, but things don't go well when she meets Amy. Raj meets a girl he likes, prompting him to ponder his relationship with Emily.",
      url: "http://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRGN8R2FsKJz2aqynwDcO61S5K3i4QZO7Sfrt5dIWlPSKBpjE7ecN9u03BwkSFOPKq25JmHeQk4PwsfnTSUGOd2HZa9dUCJ6w-g.webp?r=248",
      rating: 3,
      trailer:"https://youtu.be/mQLV9qjnK60"
    },
    {
      name: "The Exchange",
      about:
        "On their first days at work and school, Farida seeks an alliance and Jude keeps a low profile. Feeling unheard, Munira takes matters into her own hands.",
      url: "http://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXt60KSlB7avW098WzrWXr7YlGsL4R975gkGHqUr0V29XcSlPOossIUVSWTVnS_KRW8cSjjUZuoUf3b4Yq8AmA65uYtorBJCdffBlHzcYJuuryDUIeawGqbQT7SiavVJ-4AS.jpg?r=5ac",
      rating: 5,
      trailer:"https://youtu.be/-9W1W3qXnUk"
    },
    {
      name: "The Red Rose",
      about:
        "A ragtag crew of teens must survive a summer of terror after downloading an app that makes dangerous demands with deadly consequences.",
      url: "http://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABez3VpYYan6JKu3tAky_HyBdFBRYpDC6fKNhREwhunQopARFcVRSwYyIgsb68l5pYAFpzw6CjpJV9FM44PBoAr-F_hdTcguCRp0XS68gRftZEbgj2imb2Ot0IuQ7R2GcWrM8.jpg?r=aad",
      rating: 3,
      trailer:"https://youtu.be/_OA8EVad0IM"
    },
    {
      name: "Friends",
      about:
        "Ross whitens his teeth to impress a girl, but he goes way overboard. Phoebe tells Rachel that she hooked up with Ralph Lauren.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZZew9F6d47H08_t4TPoaWn-sfcSi3xT_rWDjdbaZKQPEn5luEOS2oTHByB8uHA0thgVKvgIdAanUL3KR9qN3wFRsTuyqsIP2NQ.webp?r=2ef",
      rating: 1,
      trailer:"https://youtu.be/LTpmw0Ac6Zs"
    },
    {
      name: "The Glory",
      about:
        "Tormented by her high school classmates and with nowhere to turn for help, Moon Dong-eun sinks into despair before deciding on a new mission in life.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR3uMq5XrjrReTF3LxfG7d9yhQ_XN0AkMPb7xTfCXZw13w0PQ8r0kUyBJqTO94zS-eDUe4ge6Ph7iuTLHgvhIXZu3Y632gfPfxymY6jzTcog6kK9dzMT2uRWiU9-XGN-h75H.jpg?r=883",
      rating: 5,
      trailer:"https://youtu.be/tqVVrTvrI8U"
    },
    {
      name: "Remember",
      about:
        "Six high schoolers stuck in a murderous time loop must find the scattered remains of an unknown victim to break the curse and finally see another day.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZCxApn664DZTN3c4qwBfsAoGl-Bzh7Jf8mjyQRYDqM81FhYSqecNHBRzcq1OZihRfx7tnRUOYRrmDOKHP2K11MOp7_ZPAWSWfQOS4wDLK4NFxR5pB-jYroRYUOcwRdBxwUg.jpg?r=8b5",
      rating: 3,
      trailer:"https://youtu.be/Y8yvXoyLPvM"
    },
    {
      name: "Little Women",
      about:
        "Determined to make her own way in the 1860s, a writer looks back at the tough yet tender times spent with her three spirited sisters and a close friend.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX-u5cCS0GormwxVXuwOqnSXPUn2nDfHPOZ6H3gX4PulqhjjBzgF4ixHm2q7gCpIvc8xuFw__McZG_Judm7USZYD7T4NJOkij1A.webp?r=775",
      rating: 4,
      trailer:"https://youtu.be/uoq3Ro4iGls"
    },
    {
      name: "Shrek",
      about:
        "On a mission to retrieve a princess from a fire-breathing dragon, gruff ogre Shrek teams up with an unlikely compatriot — a wisecracking donkey.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfdDWikRUebcDD7xFdaeMl2PZTM0b3GwV3BQu4Xhds-Wo-KuaTl0V9MAB8VqEjMvMRgurmiu8eUgKvU80u9NPpCJpIoBGYEwp5s.webp?r=718",
      rating: 3,
      trailer:"https://youtu.be/_MoIr7811Bs"
    },
    {
      name: "The Queen's Gambit",
      about:
        "After training with Benny in New York, Beth heads to Paris for her rematch with Borgov. But a wild night sends her into a self-destructive spiral.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVFdTZeNINo1sgWyki2-8siEk_-OdO5XRrxTB-em-YQ56L7_Twdi_eQU_OnAgY8FDSxC9y8k0frGKy770-wIAR8owAhw8f_KC1FO-vvPvGg_gR6frkvLYoRKfwXFp45M1Rlw.jpg?r=93f",
      rating: 3,
      trailer:"https://youtu.be/oZn3qSgmLqI"
    },
    {
      name: "Anne With An E",
      about:
        "A bungled message brings spirited orphan Anne Shirley to Green Gables, where unmarried siblings Matthew and Marilla Cuthbert are waiting for a boy.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRczkVr7U1J9IffqPQlb8deefcTLwpDN_nfgmLoyUknRXqMtjrGvM04gJrmLKt6k1nHnS-_bm-nue1bH_FYjftkouX_lYxdhdtkd0phejzwSIds3gM9gAGrb4WxBVXkFkTip.jpg?r=6cf",
      rating: 2,
      trailer:"https://youtu.be/S5qJXYNNINo"
    },
    {
      name: "Pride and Prejudice",
      about:
        "In Jane Austen's tale of 19th-century England, Mrs. Bennet hopes to marry her daughters to prosperous gentlemen, including new arrival Mr. Darcy.",
      url: "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX7tGrC2lnmTfi9CrUgJJje_06BVR1daGsyLyHhHFHmeSNRrPBu51Q8h8lHq8m-w3rjmJqpb_JoAEdQvGTxvraO8JNwnqAz-z_E.webp?r=96c",
      rating: 5,
      trailer:"https://youtu.be/1dYv5u6v55Y"
    },
  ]);

  const [Search, setSearch] = useState("");

  const addMovie = (newmovie) => {
    setmovieLib([newmovie, ...movieLib]);
  };
  return (
    <div className="App">
      <NavBar add={addMovie} setSearch={setSearch} />
      {/* <Home movieLib={movieLib} Search={Search} /> */}
      <Routes>
        <Route index element={<Home movieLib={movieLib} Search={Search} />} />
        <Route
          path="/tvShows"
          element={<Home movieLib={movieLib} Search={Search} />}
        />
        <Route
          path="/movies"
          element={<Home movieLib={movieLib} Search={Search} />}
        />
        <Route
          path="/myList"
          element={<Home movieLib={movieLib} Search={Search} />}
        />
        <Route path="/movie/detail" element={<MovieDetail/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
