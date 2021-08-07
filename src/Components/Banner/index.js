const BannerImagePath = "./images/banner_image.svg";

const Banner = () => (
  <div className="container">
    <div className="row align-items-center mt-5 ">
      <div className="col-12 col-md-6">
        <h1>Professional Debt Collection Services | RizBuz Credit</h1>
        <p>
          Good Collection, Better Savings, Best Results !! Leave Your Cash
          Collection Worries To Us, We Are Here To Collect Serve You Better !!
          No Collection, No Fees !! “Happy Collecting”
        </p>
      </div>
      <div className="col-12 col-md-6">
        <img className="banner-image w-100" src={BannerImagePath} alt="p" />
      </div>
    </div>
  </div>
);

export default Banner;
