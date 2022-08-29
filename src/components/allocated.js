import React from 'react';
import NavBar from './NavBar';
import styled from "styled-components";

const AllocatedTable = () => {
  return (

    <>
 <NavBar/>
 <Title>
 Allocated Assets
</Title>

 <Divider />
   
<div class="flex flex-col bg-white m-7 rounded-2xl drop-shadow-md p-3">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
      <div class="flex justify-start">
  <div class="mb-3 xl:w-96">
    <input
      type="search"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-2xl
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="search"
      placeholder="Search allocated asset..."
    />
  </div>
</div>
        <table class="min-w-full">
          <thead class="border-b bg-gray-50">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Asset id
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Category
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Description
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Quantity
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</div> 
</>
)
}

const Divider = styled.hr`
  border: none;
  border-bottom: 2px solid green;
  margin: 20px 0;
`;

const Title = styled.h3`
background: whitesmoke;
font-size: 20px
  `;

export default AllocatedTable