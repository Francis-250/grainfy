import contactImg from "../assets/images/contact.png";

const ContactUs = () => {
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <div className="inline-flex gap-2 items-center mb-3">
          <p className="text-gray-500 uppercase">
            Contact <span className="text-gray-700 font-medium">us</span>
          </p>
          <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
        </div>
      </div>
      {/* Contact */}
      <div className="flex lg:flex-row flex-col gap-10 items-center">
        <img src={contactImg} alt="" className="h-[33em]" />
        <div className="flex flex-col">
          <p className="text-gray-900 uppercase font-bold">Our Store</p>
          <p className="text-gray-500 font-semibold">
            Kg 305 <sup>st</sup>
          </p>
          <p className="text-gray-500 font-semibold">Suite 350, Washington, USA</p>
          <br />
          <div>
            <p className="text-gray-500">
              <span className="font-semibold">Tel:</span> (415) 555-0132
            </p>
            <p className="text-gray-500">
              <span className="font-semibold">Email:</span> admin@grainfy.com
            </p>
          </div>
          <br />
          <p className="text-gray-900 uppercase font-bold">
            Careers at grainfy
          </p>
          <br />
          <br />
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <br />
          <br />
          <button className="border p-3 py-4 lg:w-[10em]">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
