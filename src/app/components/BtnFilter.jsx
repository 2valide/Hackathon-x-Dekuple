import { useState } from "react";

function BtnFilter() {
  const [showId, setShowId] = useState(false);

  const predefinedId = "123456";

  const handleShowId = () => {
    setShowId(true);
  };

  return (
    <div>
      <button onClick={handleShowId}>quoicoubeh</button>
    </div>
  );
}

export default BtnFilter;
