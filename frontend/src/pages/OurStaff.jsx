import React from "react";

const OurStaff = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center py-4 px-4">
      <h2 className="text-6xl md:text-[8vw] xl:text-[6vw] font-switzal bg-[#F5F5DC] text-[#5D4037] border-4 border-[#5D4037] p-3">
        Our Staff
      </h2>
      <div className="w-full flex flex-col xl:flex-row 2xl:flex-row justify-center items-center gap-8 mt-4 2xl:mt-12">
        <div className="min-h-[70vh] md:min-h-[60vh] 2xl:min-h-[60vh] w-full md:w-[70%] xl:w-[36%] 2xl:w-[26%] shadow-2xl shadow-gray-500/30 border border-[#5D4037]/20 rounded-2xl gap-2 bg-[#F5F5DC] flex flex-col justify-start items-start p-4">
          <h1 className="font-switzal text-6xl text-[#5D4037]">Person 1</h1>
          <div className="h-[40vh] w-full bg-[#5D4037]/5 border border-[#5D4037]/20 rounded-lg"></div>
          <p className="text-xs md:text-base font-montserrat text-justify mt-2 text-black/70 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit,
            illum ratione rerum doloribus dolorum ut modi soluta dolorem dolores
            perferendis adipisci, perspiciatis dolor quisquam doloremque hic
            quis nam. Quasi id cumque tempore ipsa dolores fuga beatae
            cupiditate eveniet iusto veritatis.
          </p>
        </div>
        <div className="min-h-[70vh] md:min-h-[60vh] 2xl:min-h-[60vh] w-full md:w-[70%] xl:w-[36%] 2xl:w-[26%] shadow-2xl shadow-gray-500/30 border border-[#5D4037]/20 rounded-2xl gap-2 bg-[#F5F5DC] flex flex-col justify-start items-start p-4">
          <h1 className="font-switzal text-6xl text-[#5D4037]">Person 2</h1>
          <div className="h-[40vh] w-full bg-[#5D4037]/5 border border-[#5D4037]/20 rounded-lg"></div>
          <p className="text-xs md:text-base font-montserrat text-justify mt-2 text-black/70 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            exercitationem accusantium autem asperiores, temporibus quas quia,
            explicabo vero ea corporis molestiae ex cupiditate, qui accusamus
            dolorum magnam. Inventore nam vel cum veniam temporibus autem
            voluptatem laborum, sed, incidunt beatae ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStaff;
