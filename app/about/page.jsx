import React from "react";

const page = () => {
  return (
    <>
      <h1 className="mx-auto text-center text-4xl font-bold m-3">About Us</h1>

      <div>
        <img
          src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/01/collage-of-characters-from-leave-no-trace-the-last-of-us-and-the-rover.jpg"
          className="mx-auto [clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]"
          
          alt=""
          width={700}
          height={500}
        />
        <p className="text-justify w-[700px] mx-auto">
          Welcome to MovieFlix, your ultimate destination for
          everything movies! We are passionate movie lovers committed to
          bringing you the latest and greatest from the world of cinema. Whether
          you're into Hollywood blockbusters, indie gems, or international
          masterpieces, we've got something for everyone. From trailers,
          reviews, and ratings to news, interviews, and curated watchlists — we
          aim to be your one-stop hub for all things film.
        </p>
      </div>
    </>
  );
};

export default page;
