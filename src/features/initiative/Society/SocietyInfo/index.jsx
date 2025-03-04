import "./SocietyInfo.scss";
import Title from "@/components/title/Title";

const SocietyInfo = ({ name, description }) => {

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="contentWrapper">
          <div className="title">
            <Title mainTitle="What is" subTitle={name + "?"} />
          </div>
          <p className="description">{description}</p>
          
        </div>
      </div>
    </section>
  );
};

export default SocietyInfo;
