import React from "react";

export default function End() {
  return (
    <div className="g text-sm mt-3 mb-2">
      <div>
        Copyright ©{" "}
        <script type="text/javascript">
          document.write(new Date().getFullYear());
        </script>
        2022, Rani Giterman. All rights reserved.
        <div className="flex justify-center mt-2">
          <div className="ml-2 mt-6">✡</div>
          <div className="ml-2 mt-6">✡</div>
          <div className="ml-2 mr-2 mt-6">✡</div>
          <img src="Israel.png" alt="Israel Flag" className="gray w-24"></img>
          <div className="ml-2 mt-6">✡</div>
          <div className="ml-2 mt-6">✡</div>
          <div className="ml-2 mt-6">✡</div>
        </div>
      </div>
    </div>
  );
}
