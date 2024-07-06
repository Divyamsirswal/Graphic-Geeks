const Aboutus = () => {
  return (
    <div className="w-full h-auto p-5 sm:p-10 lg:p-20 bg-black">
      <h1 className="text-white font-pixel text-3xl sm:text-4xl md:text-5xl p-4 sm:p-10">
        About us
      </h1>
      <div className="p-4 sm:p-10 text-white font-nerd text-base sm:text-lg">
        <h1 className="text-white">
          Welcome to{" "}
          <span className="text-xl sm:text-2xl italic font-nerd text-indigo-600">
            &quot;Graphic Geeks&quot;
          </span>
          , a dynamic and innovative coding club dedicated to fostering
          creativity, technical skills, and a sense of community among coding
          enthusiasts of all levels. Whether you’re a seasoned coder or just
          beginning your programming journey, Graphic Geeks offers a supportive
          environment where you can learn, grow, and collaborate with
          like-minded individuals who share your passion for technology and
          coding.
        </h1>
        <br />
        <h1>
          Our Mission At Graphic Geeks, our mission is to create an engaging and
          inclusive community that empowers individuals to explore the exciting
          world of coding. We aim to provide a platform where members can
          enhance their skills, share knowledge, and work together to bring
          innovative ideas to life. We believe in the power of collaboration and
          the limitless potential of coding to solve problems and create new
          opportunities.
        </h1>
      </div>
    </div>
  );
};

export default Aboutus;
