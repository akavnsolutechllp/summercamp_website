import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    const dataURL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    console.log(dataURL);
    // You can upload this dataURL to a server or save in your database
  };

  return (
    <div className="p-4">
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{
          width: 300,
          height: 100,
          className: "border rounded shadow",
        }}
      />

      <div className="mt-2 space-x-2">
        <button
          onClick={clear}
          className="bg-[#3D0301] text-white px-4 py-1 rounded"
        >
          Clear
        </button>
        <button
          onClick={save}
          className="bg-[#FF2E4C] text-white px-4 py-1 rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
