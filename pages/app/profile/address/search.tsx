import DetailLayout from "@/components/Layout/DetailLayout";
import { useMapSelectedStore } from "@/store/map-selected-store";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import toast from "react-simple-toasts";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const Search = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    callbackName: "initMap",
    debounce: 1500,
  });

  const setLocation = useMapSelectedStore((state) => state.setLocation);
  const router = useRouter();
  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const result = await getGeocode({ address });
      const { lat, lng } = await getLatLng(result[0]);
      setLocation({
        lat,
        long: lng,
        address,
        shortAddress: address.split(",")[1],
      });

      router.back();
    } catch (error) {
      toast("Opps ada kesalahan, coba lagi ya");
    }
  };

  return (
    <div>
      <div className="m-5 mb-2 flex items-center space-x-5 input input-bordered">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          type="search"
          placeholder="Masukan alamat kamu"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full outline-none "
        />
      </div>
      <ul className="px-5">
        {data?.map((sugest, i) => (
          <li
            key={i}
            onClick={() => handleSelect(sugest.description)}
            className="hover:bg-gray-100 cursor-pointer py-4 border-b"
          >
            {sugest.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

Search.getLayout = (page: ReactElement) => {
  return <DetailLayout title="Alamat">{page}</DetailLayout>;
};

export default Search;
