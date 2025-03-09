const SkillCard = ({ title, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="react js" />
      </div>
      <div className="card-title">
        <span> {title} </span>
      </div>
    </div>
  );
};

export default SkillCard;
