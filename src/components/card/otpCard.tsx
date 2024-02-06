import { useState, useEffect } from "react";

function OtpCard(props: any) {
  const [code, setCode] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleConfirm = () => {
    if (verificationCode === code) {
      props.setAlert(true);
      setTimeout(() => {
        props.setAlert(false)
      }, 2000);
    } else {
      alert("驗證失敗");
    }
  };

  const handleDialogOpen = async () => {
    if (document) {
      (document.getElementById("otp") as HTMLFormElement).showModal();
    }
    let randomCode = "";
    randomCode = "zkj" + Math.floor(Math.random() * 10000).toString();
    setCode(randomCode);
    console.log(randomCode);
  };

  const handleDialogClose = () => {
    setVerificationCode("");
  }

  return (
    <>
      <button className="btn btn-success text-black" onClick={handleDialogOpen}>
        驗證手機號碼
      </button>
      <dialog id="otp" className="modal">
        <div className="modal-box bg-white text-black">
          <h3 className="font-bold text-lg text-center">
            檢查您的簡訊並輸入驗證碼
          </h3>
          <div className="flex items-center mt-4 mx-auto w-full">
            <input
              type="text"
              placeholder="驗證碼"
              className="input input-bordered w-full bg-white text-black"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button className="btn btn-active btn-ghost ml-2">重新發送</button>
          </div>
          <form method="dialog">
            <button
              className="btn btn-success w-full mt-6"
              onClick={handleConfirm}
            >
              確認並驗證
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleDialogClose}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default OtpCard;
