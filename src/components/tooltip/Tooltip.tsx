import {OverlayTrigger, Tooltip as TooltipBootstrap} from "react-bootstrap";
import {ReactElement, ReactNode} from "react";
import {OverlayInjectedProps} from "react-bootstrap/Overlay";
import {OverlayTriggerRenderProps} from "react-bootstrap/OverlayTrigger";

const renderTooltip = (props: OverlayInjectedProps) => (
  <TooltipBootstrap {...props}>
    {props.text}
  </TooltipBootstrap>
);

interface ITooltipProps {
  children: ReactElement | ((props: OverlayTriggerRenderProps) => ReactNode)
  text: string
}

const Tooltip = ({children, text}: ITooltipProps) => {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={(props) => renderTooltip({...props, text})}
    >
      {children}
    </OverlayTrigger>
  );
};

export default Tooltip;