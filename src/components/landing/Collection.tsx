import { collectionList } from "../../utils/data";

export default function Collection() {
  return (
    <section className="grid place-items-center text-center">
      <h1 className="font-heading text-h2 bg-linear-to-b from-neutral-900 via-neutral-500 to-neutral-200 bg-clip-text text-transparent md:text-title leading-none">
        our collection
      </h1>
      <div className="md:flex md:px-36">
        {collectionList.map((collection, index) => {
          return (
            <div className="flex flex-col gap-4 mt-12 md:-mt-12" key={index}>
              <img
                src={collection.imgUrl}
                alt="Coffeeroasters collection image"
                className="h-32 self-center"
              />
              <h2 className="text-h4 font-heading text-neutral-900">
                {collection.name}
              </h2>
              <p className="text-neutral-900 text-balance">
                {collection.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
