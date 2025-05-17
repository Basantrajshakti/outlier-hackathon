import "./styles.css";

const Spinner = () => {
  return (
    <div class="pyramid">
      <div class="glow"></div>
      <div>
        <span style="--i: 0"></span>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
      </div>
    </div>
  );
};

export default Spinner;
