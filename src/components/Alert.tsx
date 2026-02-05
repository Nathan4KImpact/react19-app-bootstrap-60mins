interface AlertProps {
  message: string;
  alertLevel?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
    onClickClose: () => void;
}

const Alert = (props: AlertProps) => {
  return (
    <div
      className={`alert alert-${props.alertLevel} alert-dismissible fade show`}
      role="alert"
    >
      {props.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClickClose}
      ></button>
    </div>
  );
};

export default Alert;
