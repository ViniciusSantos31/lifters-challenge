import { withMask } from "use-mask-input";
import { useShoppingCartStore } from "../store";
import { Input } from "./Input";
import { Select } from "./Select";

export const CheckoutForm: React.FC = () => {

  const months =
    Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));

  const years = Array.from({ length: 11 }, (_, i) => (new Date().getFullYear() + i).toString());

  const { items } = useShoppingCartStore();

  const getTotalPrice = () => {
    return items.reduce(
      (acc, item) => acc + Number(item.valor.replace(/[^0-9]/, '') ?? 0), 0);
  }

  return (
    <div className="w-100 bg-black p-4 d-flex flex-column justify-content-between">
      <div>
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4>Total:</h4>
          <h4>{`$ ${getTotalPrice()}`}</h4>
        </div>
        <div className="w-100 bg-secondary my-3" style={{ height: 1 }} />

        <div className="d-flex flex-column gap-4">
          <Input
            label="Card number"
            ref={withMask('9999 9999 9999 9999', {
              clearMaskOnLostFocus: false,
              placeholder: "",
            })}
          />
          <Input label="Cardholder name" placeholder="-" />
          <div className="d-flex gap-2">
            <Select label="Expiry month" options={months} />
            <Select label="Expiry year" options={years} />
          </div>
          <Input
            label="CVV"
            ref={withMask(['999[9]'], {
              clearMaskOnLostFocus: false,
              placeholder: "",
            })}
          />
          <div className="form-check pe d-flex align-items-center justify-content-start gap-2">
            <input
              className="form-check-input "
              style={{ width: 20, height: 20 }}
              type="checkbox"
              id={`categroy-${1}`}
              value=""
            />
            <label className="form-check-label text-white m-0" htmlFor={`categroy-${1}`}>
              Aceitar todos os termos
            </label>
          </div>
        </div>
      </div>
      <button className="w-100 d-flex gap-2 align-items-center justify-content-center border-0 fw-medium py-3 text-black bg-white mt-3">
        Checkout
      </button>
    </div>
  )
}