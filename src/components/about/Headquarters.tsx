import { hqLocations } from "../../utils/data";

export default function Headquarters() {
  return (
    <section className="flex flex-col items-center w-full md:items-start md:px-12">
      <p className="font-heading text-h4 text-neutral-500">Our Headquarters</p>
      <div className="flex flex-col w-full md:justify-between md:flex-row">
        {hqLocations.map((location, index) => {
          return (
            <div
              key={index}
              className="text-center md:text-left flex-1 min-w-[30%]"
            >
              <img
                src={location.imgUrl}
                alt={`${location.name} country outline representation`}
                className="inline-block my-10"
              />
              <h3 className="font-heading text-h3 text-neutral-900 mb-6">
                {location.name}
              </h3>
              <div className="flex flex-col gap-1">
                {location.address.split(",").map((addressSplit, index) => {
                  return (
                    <p key={index} className="text-neutral-900">
                      {addressSplit}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
