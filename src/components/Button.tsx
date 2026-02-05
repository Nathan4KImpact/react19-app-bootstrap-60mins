interface ButtonProps {
  onClickOK: () => void;
}   
const Button = ({onClickOK} : ButtonProps) => {
  return <button className="btn btn-success" onClick={onClickOK}>Count</button>;
};

export default Button;
