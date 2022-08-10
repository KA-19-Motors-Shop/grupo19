import styled from "styled-components";

export const InputContainer = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
  label {
    display: block;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: var(--grey1);
    margin: 19px 0 8px;
  }
  textarea {
    width: 100%;
    resize: none;
    max-width: 100%;
    min-width: 100%;
    min-height: 80px;
    max-height: 140px;
    border-radius: 4px;
    color: var(--grey1);
    height: 80px;
    font-size: 16px;
    font-weight: 400;
    border: 1.5px solid var(--grey7);
    background-color: transparent;
    padding: 12px 16px 24px;
  }
  .error-msg {
    position: absolute;
    padding: 4px 6px 4px 4px;
    border-radius: 8px;
    border: 1px solid var(--alert1);
    top: 16px;
    right: 0;
    color: var(--whiteFixed);
    font-size: 0.45rem;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 3px;
    background: var(--alert1);
    animation: fadeUp 500ms;
    svg {
      font-size: 12px;
    }
    ::after {
      background: var(--alert1);
      border-right: 1px solid var(--alert1);
      border-bottom: 1px solid var(--alert1);
      position: absolute;
      content: "";
      top: 17.5px;
      right: 12px;
      transform: rotate(45deg);
      width: 6px;
      height: 6px;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .uppercase{
    text-transform: uppercase;
  }
  .uppercase::placeholder{
    text-transform: initial;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input, select {
    width: 100%;
    border-radius: 4px;
    color: var(--grey1);
    padding: 0 16px;
    font-size:16px;
    color: var(--grey2);
    height: 48px;
    line-height: 28px;
    font-weight: 400;
    border: 1.5px solid var(--grey7);
    background-color: transparent;
  }
  input:hover,
  textarea:hover, select:hover {
    background-color: var(--grey8);
  }
  input::placeholder,
  textarea::placeholder,select::placeholder, .defaultOption {
    color: var(--grey3);
  }
  input:focus,
  textarea:focus, select:focus {
    background-color: var(--grey9);
    outline: 1.5px solid var(--brand2);
    border: 1.5px solid var(--brand2);
  }

  select {
  -webkit-appearance: none !important;
  }
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
