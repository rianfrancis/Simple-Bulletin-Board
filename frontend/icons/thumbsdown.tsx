import React from "react";

const Thumbsdown: React.FC<{ color?: string }> = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="#000"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path d="M76.8 247.467c9.412 0 17.067-7.654 17.067-17.067 0-9.412-7.654-17.067-17.067-17.067-9.412 0-17.067 7.654-17.067 17.067 0 9.412 7.655 17.067 17.067 17.067zM495.736 221.227C505.634 213.41 512 201.301 512 187.733c0-18.295-11.58-33.946-27.802-39.996 6.673-7.535 10.735-17.434 10.735-28.271 0-22.281-17.169-40.627-38.963-42.505 3.055-5.094 4.83-10.999 4.83-17.229 0-17.86-16.265-34.133-34.133-34.133h-128c-40.021 0-56.03 8.832-71.526 17.374-11.827 6.519-24.047 13.261-49.152 16.845-4.668.666-7.902 4.992-7.236 9.66.666 4.659 4.949 7.885 9.66 7.236 28.177-4.028 42.411-11.87 54.963-18.79 14.848-8.183 27.665-15.258 63.292-15.258h128c8.619 0 17.067 8.456 17.067 17.067 0 8.934-8.132 17.067-17.067 17.067-4.719 0-8.533 3.823-8.533 8.533s3.814 8.533 8.533 8.533h25.6c14.114 0 25.6 11.486 25.6 25.6s-11.486 25.6-25.6 25.6a8.53 8.53 0 00-8.533 8.533 8.53 8.53 0 008.533 8.533h17.067c14.114 0 25.6 11.486 25.6 25.6s-11.486 25.6-25.6 25.6c-4.531 0-8.277 3.541-8.516 8.064a8.529 8.529 0 007.586 8.951c26.53 2.91 26.53 16.418 26.53 20.847 0 13.773-11.418 30.404-25.6 30.404H349.867c-14.763 0-42.667 8.917-42.667 42.667 0 4.71 3.814 8.533 8.533 8.533s8.533-3.823 8.533-8.533c0-24.09 21.367-25.549 25.6-25.6h119.467c24.414 0 42.667-25.054 42.667-47.471 0-8.591-2.603-21.511-16.264-29.967z"></path>
      <path d="M349.867 315.733a8.53 8.53 0 00-8.533 8.533v102.4c0 29.508-13.158 42.667-42.667 42.667-5.342 0-8.533-3.192-8.533-8.533 0-68.932 0-114.466-36.634-151.1-16.87-16.87-48.947-45.167-74.3-45.167-4.719 0-8.533 3.823-8.533 8.533s3.814 8.533 8.533 8.533c13.611 0 37.461 15.394 62.234 40.166 31.633 31.633 31.633 72.055 31.633 139.034 0 14.831 10.769 25.6 25.6 25.6 39.074 0 59.733-20.651 59.733-59.733v-102.4a8.53 8.53 0 00-8.533-8.533zM145.067 25.6H8.533A8.53 8.53 0 000 34.133v256a8.53 8.53 0 008.533 8.533h136.533a8.53 8.53 0 008.533-8.533v-256a8.53 8.53 0 00-8.532-8.533zm-8.534 256H17.067V42.667h119.467V281.6z"></path>
    </svg>
  );
};

export default Thumbsdown;