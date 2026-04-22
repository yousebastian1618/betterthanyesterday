'use client'
import Label from "@/components/shared/Label/Label";
import type { ButtonType } from "@/types/types";
import "./style.scss";

type Props = {
  name: string;
  label: string;
  buttonType: ButtonType;
  disabled?: boolean;
  handleClick?: () => void;
};

export default function Button(
  { name, label, buttonType, disabled = false, handleClick }: Props
) {


  return (
    <button
      className={`button-component button-component--${buttonType}`}
      data-test={`button ${name}`}
      type="button"
      disabled={disabled}
      onClick={ handleClick }
    >
      <Label label={label} />
    </button>
  );
}
