import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="relative w-full bg-cover bg-fixed py-10 bg-center my-20 text-white"
      style={{ backgroundImage: `url(${featuredImg})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-white">
        <SectionTitle
          subHeading="Check it out"
          heading="Featured Item"></SectionTitle>
      </div>

      <div className="flex items-center relative z-10 py-8 px-16 md:gap-10 text-white">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ea
            magnam. Atque similique explicabo eius. Vero officia amet fugit sit
            est aut impedit quod explicabo. In ducimus vitae maxime earum
            dolore, dolorem quisquam voluptate voluptas odit perspiciatis
            dolorum facere autem provident at tempore amet itaque repellendus
            quos cumque quasi harum?
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white my-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
