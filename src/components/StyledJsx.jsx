export const StyledJsx = () => {
  return (
    <>
      <div>
        <p>- StyledJsx -</p>
        <button>FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20ppx;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center
      `}</style>
    </>
  );
};
