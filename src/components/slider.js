import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import "./slider.css";
import { useDispatch } from "react-redux";
import { changeNumberValue } from "../action";

const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeNumberValue(100));
  }, []);
  const [value, setValue] = useState(100);
  const valueChange = (value) => {
    setValue(value);
    dispatch(changeNumberValue(value));
  };
  return (
    <>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        value={value}
        onChange={(value) => valueChange(value)}
      />
      value: {value / 100}
    </>
  );
};

export default Slider;
