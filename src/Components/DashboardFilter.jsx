import React, { useEffect, useState } from "react";

const DashboardFilter = () => {
  const imageFiltering = {
    Cooking:
      "https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg",
    Tech: "https://cdn.ces.tech/ces/media/articles/2022/october/innovation.jpg",
    Gaming: "https://bit.ly/3U4FUFP",
    Art: "https://d3hocxeqwpeppp.cloudfront.net/templates/yootheme/cache/41/Art-today-6-18-41b28df1.jpeg",
  };
  let imageKeys = Object.keys(imageFiltering);

  return (
    <div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={imageFiltering["Cooking"]}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              Photography
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/random/480x360/?4"
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>6 min ago</span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                Facere ipsa nulla corrupti praesentium pariatur architecto
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellat, excepturi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardFilter;
