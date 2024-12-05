import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="41"
        height="16"
        viewBox="0 0 41 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928928C7.68054 0.538404 7.04738 0.538404 6.65685 0.928928L0.292893 7.29289ZM41 7L1 7L1 9L41 9L41 7Z"
          fill="white"
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next !w-14"
      type="button"
      {...restProps}
    >
      <svg
        width="76"
        height="48"
        viewBox="0 0 76 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.7071 24.7071C57.0976 24.3166 57.0976 23.6834 56.7071 23.2929L50.3431 16.9289C49.9526 16.5384 49.3195 16.5384 48.9289 16.9289C48.5384 17.3195 48.5384 17.9526 48.9289 18.3431L54.5858 24L48.9289 29.6568C48.5384 30.0474 48.5384 30.6805 48.9289 31.0711C49.3195 31.4616 49.9526 31.4616 50.3431 31.0711L56.7071 24.7071ZM8.74228e-08 25L56 25L56 23L-8.74228e-08 23L8.74228e-08 25Z"
          fill="#EA4054"
        />
        <circle
          opacity="0.1"
          cx="52"
          cy="24"
          r="23"
          stroke="#EA4054"
          strokeWidth="2"
        />
      </svg>

      {children}
    </button>
  );
};
