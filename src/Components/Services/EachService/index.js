import "./index.css";

const EachService = (props) => {
  const { eachService } = props;

  return (
    <div
      className="col-12 col-md-6
     col-lg-4  pl-5 pr-5 justify-content-center"
    >
      <div className="p-3 text-center ">
        <img
          className="w-50"
          src={eachService.serviceImage}
          alt={eachService.serviceName}
        />
        <div className="mt-3">
          <h5 className="mt-2">{eachService.serviceName}</h5>
          <p className="service-description text-muted">
            {eachService.seriviceDescription}
          </p>
          <a href="/" className="btn btn-primary">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default EachService;
