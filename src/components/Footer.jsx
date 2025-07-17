import React from 'react'

function Footer() {
  return (
    <section className="bg-[#4B0082] mt-10 h-[10rem] w-full text-xs text-white flex flex-col justify-center  font  -light gap-2">
          <p className="text-center">DevCollab | Community-Driven Dev Growth</p>
          <ul className="flex gap-2 text-white font-light justify-center">
            <li>Github</li>
            <li>|       Discord</li>
            <li>|       Privacy</li>
            <li>|       Terms</li>
          </ul>
          <p className="text-center">@ 2025 DevCollab. Built by devs, for devs.</p>
        </section>
  )
}

export default Footer