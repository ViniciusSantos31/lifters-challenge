import { useQuery } from "@tanstack/react-query";
import { getSizes } from "../../services/product";
import { Product } from "../../types/product";
import { SizeButton } from "../SizeButton";

interface FilterSizeProps {
  product?: Product;
  sizeSelected?: string;
  setSize?: (size: string) => void;
}

export const FilterSize: React.FC<FilterSizeProps> = ({ product, setSize, sizeSelected }) => {
  const { data: sizes } = useQuery<string[]>({
    queryKey: ["sizes"],
    queryFn: () => getSizes(product ?? null),
  });

  return (
    <div className="w-75 d-flex gap-1 flex-wrap">
      {sizes?.map((size) => (
        <SizeButton size={size}
          onClick={() => setSize?.(size)} selected={size === sizeSelected} />
      ))}
    </div>
  );
};
