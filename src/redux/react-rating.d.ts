declare module 'react-rating' {
    import * as React from 'react';
  
    interface RatingProps {
      readonly?: boolean;
      initialRating?: number;
      emptySymbol?: React.ReactNode | React.ReactNode[];
      fullSymbol?: React.ReactNode | React.ReactNode[];
      placeholderSymbol?: React.ReactNode | React.ReactNode[];
      onChange?(rate: number): void;
      onClick?(rate: number): void;
      stop?: number;
      step?: number;
      fractions?: number;
      start?: number;
      quiet?: boolean;
      placeholderRating?: number;
      className?: string;
      style?: React.CSSProperties;
    }
  
    class Rating extends React.Component<RatingProps, unknown> {}
  
    export default Rating;
  }
  