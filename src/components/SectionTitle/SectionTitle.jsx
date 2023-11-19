const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-max mx-auto my-8 space-y-2 z-20">
      <p className="text-yellow-600 text-center">---{subHeading}---</p>
      <h3 className="text-4xl px-6 uppercase border-y-4 py-3 text-center">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
