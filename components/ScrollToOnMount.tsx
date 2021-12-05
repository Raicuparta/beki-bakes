import React, { useEffect, useRef } from "react";

type Props<TComponent extends React.ElementType> = {
  component: TComponent;
  children: React.ReactNode;
} & React.ComponentPropsWithRef<TComponent>;

export const ScrollToOnMount = <TComponent extends React.ElementType>({
  component: WrapperComponent,
  ...props
}: Props<TComponent>) => {
  const wrapperRef = useRef<Element>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  return <WrapperComponent {...props} ref={wrapperRef} />;
};
