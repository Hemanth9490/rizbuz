import "./index.css";

const EachService = (props) => {
  const { eachService } = props;

  return (
    <div
      className="service-card text-center border-0 col-12 col-md-6
     col-lg-4 d-flex flex-column justify-content-between"
    >
      <img
        className="w-100 "
        src={eachService.serviceImage}
        alt={eachService.serviceName}
      />
      <div className="mt-3">
        <h5 className="mt-2">{eachService.serviceName}</h5>
        <p className="text-muted">{eachService.seriviceDescription}</p>
        <a href="/" className="btn btn-primary">
          More
        </a>
      </div>
    </div>
  );
};

export default EachService;
