import React from "react";

export function CarouselItem({
  children,
  width,
}: {
  children: HTMLImageElement;
  width: string;
}) {
  return (
    <>
      <div
        className={`w-[${width}]  inline-flex items-center justify-center h-48 bg-red-500`}
      >
        {children}
      </div>
    </>
  );
}

export function Carousel({ children }: { children: React.JSX.Element }) {
  return (
    <div className="overflow-hidden">
      <div className="-translate-x-0 whitespace-nowrap duration-75">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
}
