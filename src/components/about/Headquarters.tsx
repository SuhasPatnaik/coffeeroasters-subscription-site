import { hqLocations } from "../../utils/constants";

export default function Headquarters() {
  return (
    <div className="grid place-content-center place-items-center">
      <p className="font-heading text-h4 text-neutral-500">Our Headquarters</p>
      {hqLocations.map((location, index) => {
        return (
          <div key={index} className="text-center pb-8">
            <img
              src={location.imgUrl}
              alt={`${location.name} country outline respresentation`}
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
  );
}
