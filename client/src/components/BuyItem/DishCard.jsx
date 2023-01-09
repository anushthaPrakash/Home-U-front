import React from 'react'

function DishCard({ name, src, profile }) {
  return (
<div class="container max-w-4xl px-6 py-4 mx-auto bg-white ">
            {/* <h1 class="text-4xl font-semibold text-center text-gray-800 dark:text-white">Frequently asked questions</h1> */}

            <div class="mt-4 space-y-8 relative">
                <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                    <div class="flex items-center justify-between w-full p-8 h-80 bg-[url('/1.jpg')]">
                    {/* <img src={src} className='h-80 object-cover filter brightness-75 rounded-full lg:rounded-3xl'/> */}
                        <h1 class="opacity-0 lg:opacity-100  w-5/6 text-white text-sm font-bold ">{name}</h1>
                    </div>

                    <hr class="border-gray-200 dark:border-gray-700"/>

                    <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                    </p>
                </div>
            </div>
        </div>
  )
}

export default DishCard