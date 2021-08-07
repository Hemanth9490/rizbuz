const BannerImagePath = "./images/banner_image.svg";

const Banner = () => (
  <div className="container pt-5">
    <div className="row align-items-center mt-5 ">
      <div className="col-12 text-center col-lg-6">
        <h1 className="">
          Professional Debt Collection Services | RizBuz Credit
        </h1>
        <h5 className="mt-3 text-white text-muted">
          Good Collection, Better Savings, Best Results !! Leave Your Cash
          Collection Worries To Us, We Are Here To Collect Serve You Better !!
          No Collection, No Fees !! “Happy Collecting”
        </h5>
      </div>
      <div className="col-12 col-lg-6">
        <img className="banner-image w-100" src={BannerImagePath} alt="p" />
      </div>
    </div>
  </div>
);

export default Banner;
