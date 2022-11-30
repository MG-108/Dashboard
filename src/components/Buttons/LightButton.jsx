import React from "react";

const LightButton = () => {
  return (
    <button
      className="ml-2"
      type="button"
      id="headlessui-listbox-button-4"
      aria-haspopup="true"
      aria-expanded="false"
      data-headlessui-state=""
      aria-labelledby="headlessui-listbox-label-3 headlessui-listbox-button-4"
    >
      <span class="dark:hidden">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-6 h-6"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            class="fill-amber-500 stroke-yellow-400"
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            class="stroke-yellow-400"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default LightButton;
