const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <h1>Hi! I'm irfan</h1>
        <p>Hello description</p>
      </div>
      <div className="md:w-1/2 justify-center flex">
        <p>Hello image</p>
      </div>
    </div>
  );
};

export default HeroSection;
