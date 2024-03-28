type SizeButtonProps = {
  size: string;
  selected?: boolean;
  onClick?: () => void;
};

export const SizeButton: React.FC<SizeButtonProps> = ({
  size,
  selected = false,
  ...rest
}) => {
  return (
    <button
      id="color-1"
      className={`w-100 border p-1 text-black border-black bg-transparent button-size ${
        selected && "selected"
      }`}
      style={{ maxWidth: 50, minHeight: 50 }}
      {...rest}>
      {size}
    </button>
  );
};
