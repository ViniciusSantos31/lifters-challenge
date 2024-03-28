import { useQuery } from "@tanstack/react-query";
import { getSizes } from "../../services/product";
import { SizeButton } from "../SizeButton";
import { Product } from "../../types/product";

export const FilterSize: React.FC<{ product?: Product }> = ({ product }) => {
  const { data: sizes } = useQuery<string[]>({
    queryKey: ["sizes"],
    queryFn: () => getSizes(product ?? null),
  });

  return (
    <div className="w-75 d-flex gap-1 flex-wrap">
      {sizes?.map((size) => (
        <SizeButton size={size} />
      ))}
    </div>
  );
};
