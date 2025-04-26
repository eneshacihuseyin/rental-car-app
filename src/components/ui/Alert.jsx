import PropTypes from 'prop-types';
import { cn } from '@/lib/utils.js';
import { MdCheckCircle, MdInfo, MdWarning } from 'react-icons/md';
import { IoMdAlert } from 'react-icons/io';
function Alert({ type, message, className, ...props }) {
  const variant = {
    error: 'text-[#9b121e] bg-[#EFDADD] border-b-2 border-b-[#9b121e]',
    success: 'text-[#15572a] bg-[#D0E9D0] border-b-2 border-b-[#15572a]',
    alert: 'text-[#856404] bg-[#f8fec0] border-b-2 border-b-[#856404]',
    info: 'text-[#004595] bg-[#CCE5FF] border-b-2 border-b-[#004595]',
  };
  const icon = {
    error: <MdWarning className="text-2xl" />,
    success: <MdCheckCircle className="text-2xl" />,
    alert: <IoMdAlert className="text-2xl" />,
    info: <MdInfo className="text-2xl" />,
  };

  return (
    <div
      style={{
        position: 'relative',
        margin: '0',
        boxShadow: '0 0 1vh 1vh rgba(0,0,0,0.25)',
      }}
      className={cn(
        `flex gap-2 select-none items-center justify-start text-lg font-[500] py-[1.5vh] px-[2vw] w-[38vw] ${variant[type]} `,
        className
      )}
      {...props}
    >
      <div>{icon[type]}</div>
      <div>{message}</div>
    </div>
  );
}

export default Alert;

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  message: PropTypes.any.isRequired,
  className: PropTypes.string,
};

Alert.defaultProps = {
  type: 'error',
};
