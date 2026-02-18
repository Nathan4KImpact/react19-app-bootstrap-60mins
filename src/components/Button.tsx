interface ButtonProps {
  onClickOK: () => void;
}   
const Button = ({onClickOK} : ButtonProps) => {
  return <button className="btn btn-secondary align-items-center d-flex justify-content-center" onClick={onClickOK}>Count</button>;
};

export default Button;
