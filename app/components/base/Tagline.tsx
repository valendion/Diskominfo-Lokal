import "~/style/text-gradien.css";

const Tagline = () => {
  return (
    <div className=" my-10 flex flex-col">
      <p className="text-6xl italic font-semibold ">
        Halo,{" "}
        <span className="gradient">
          <br />
          Sahabat It
        </span>{" "}
      </p>
      <p className="text-2xl font-light mt-2">
        Diskominfo hadir untuk memberikan layanan informasi publik yang cepat,
        akurat, dan mudah diakses.
      </p>
    </div>
  );
};

export default Tagline;
