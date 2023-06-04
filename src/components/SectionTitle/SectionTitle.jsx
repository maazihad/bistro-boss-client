

const SectionTitle = ({ subHeading, heading }) => {
   return (
      <div className="text-center w-2/6 mx-auto mb-5">
         <p className="text-amber-500 text-lg ">--- {subHeading} ---</p>
         <h2 className="text-3xl uppercase border-y-2 py-2 text-gray-700">{heading}</h2>
      </div>
   );
};

export default SectionTitle;