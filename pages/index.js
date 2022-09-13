import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AwwardSite</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='relative'>
        <nav className='h-16 fixed z-10 top-0 right-0 left-0  '>
          <ul className='flex flex-row h-16 bg-slate-200 divide-x divide-gray-400 shadow-xl'>
            <li className='flex basis-5% grow-0 w-24  justify-center '><Image 
            src = "/menu.svg"
            height = {24}
            width = {24}
            alt = 'menu logo'
            />
            <span className='my-auto font-mono px-2'>MENU</span>
            </li>
            <li className='flex basis-85%  justify-between w-9/12 '>
              <section className='justify-self-start my-auto px-4'>
                <Image
                src = "/search.svg"
                height = {18}
                width = {18}
                alt = 'search logo'
                />
              </section>
              <section className='my-auto pl-80 '>
                <span className='text-4xl font-serif text-center'> AWWARDSITE.</span>
              </section>
              <section className='my-auto px-4'>
                <p>are you a member?<a className='font-serif text-lg'>Register/Login</a></p>
              </section>
            </li>
            <li className='text-white bg-gray-900 basis-10% grow w-2/12 flex '><p className='m-auto font-mono'>SUBMIT YOUR SITE!</p></li>
          </ul>
        </nav>
      </section>
      
      <section className='flex relative '>
        <Image
        className='flex absolute'
        src= "/drone2.jpg"
        height = {720}
        width = {2160}
        alt = "homepage image"
          />
        <section className='flex flex-col absolute text-white justify-around  w-full h-full '>
          <div className='flex  flex-row mt-10 mx-20 justify-between'>
            <div>Site of the Day    September 13,2022</div>
            <div className='fill-white '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>

            </div>
          </div>
          <div className='mx-auto'>
            <section className='text-center text-4xl text-bold font-bold'>Henry Northington</section>
            <section className='text-sm'>BY <span className='text-blue-200 font-semibold'>MASON PAJUNAS</span> FROM UNITED STATES WITH 7.35</section>
            <section className='flex flex-row mt-5'>
              <div className='flex flex-col relative'>
                <span className='rounded-r-full rounded-b-full rounded-t-full border-4 border-red-400 border-l-red-400/0 w-20 h-20 text-center py-5 text-xl'>7.44</span>
                <span className='text-xs text-center'>DESIGN</span>
              </div>
              <div className='flex flex-col relative'>
                <span className='rounded-r-full rounded-b-full rounded-l-full border-4 border-yellow-400 border-t-red-400/0 w-20 h-20 text-center py-5 text-xl'>7.75</span>
                <span className='text-xs text-center'>USABILITY</span>
              </div>
              <div className='flex flex-col relative'>
                <span className='rounded-r-full rounded-b-full rounded-t-full border-4 border-green-400 border-l-red-400/0 w-20 h-20 text-center py-5 text-xl'>6.95</span>
                <span className='text-xs text-center'>CREATIVITY</span>
              </div>
              <div className='flex flex-col relative'>
                <span className='rounded-r-full rounded-b-full rounded-t-full border-4 border-purple-400 border-l-red-400/0 w-20 h-20 text-center py-5 text-xl'>7.44</span>
                <span className='text-xs text-center'>CONTENT</span>
              </div>
            </section>
          </div>
          <div className='flex flex-row justify-between mx-20'>
            <div className='flex flex-row'>
              <div className='rounded-full bg-blue-300 text-sm px-2   border border-white/0'>Visit Site</div>
              <div className='rounded-full text-sm px-3 ml-5 border-white border  '>Collect</div>
            </div>
            <div>
              <div className='rounded-full text-sm border border-white px-2'>Jury Votes</div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <section className='mx-20 my-10'>
          <div className='my-10 flex flex-row '>
            <div className='text-lg font-semibold'>Sites of the day</div>
            <div className='my-auto mx-2'>Previous Winners</div>
          </div>

          <section className='flex flex-row justify-between'>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
          </section>
        </section>
        <section className='mx-20 my-10'>
          <div className='my-10 flex flex-row '>
            <div className='text-lg font-semibold'>Nominees</div>
            <div className='my-auto mx-2'>We Need Your Vote</div>
          </div>

          <section className='flex flex-row justify-between'>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
            <div className ='flex flex-col divide-y divide-gray-200 w-72 shadow-xl '>
              <div className = 'flex item-center justify-center relative overflow-hidden '>
                <Image
                 className='scale-100 absolute w-full h-full transition-all duration-500 ease-in-out hover:scale-125'
                 src = "/mrBeast.png"
                 height = {220}
                 width = {290}
                 alt = 'search logo'               
                />
              </div>
              <div className = 'flex flex-col mx-5'>
                <span className='font-serif my-2'>Karina Sirqueira Gallery</span>
                <div className='flex flex-row justify-between'>
                  <span className=' text-xs mb-5'>From United States</span>
                  <span className=' text-xs'>September 11, 2022</span>
                </div>

              </div>
              <div className = 'flex mx-5 ' >
                <Image
                 className='rounded-full overflow-hidden' 
                 src = "/avatar.jpeg"
                 height = {18}
                 width = {32}
                 alt = 'search logo'                 
                />
                <p className='font-serif text-xs my-2 mx-2'>BY KARINA SIRQUEIRA</p>
              </div>
            </div>
          </section>
        </section>
      </section>

      <footer className='flex flex-col divide-y divide-gray-200 bg-gray-900 text-white mt-40 font-mono '>
        <section className='mx-20 my-5'>
          <div className='my-5 flex flex-row justify-between'>
            <div className=''>The awards for design, creativity and innovation on the Internet.</div>
            <div className=''>Next Conferences  Amsterdam and Tokyo</div>
          </div>
          <div className='my-5'>
            <ul className='flex flex-row text-sm '>
              <li className='mr-3'>Web Design Courses</li>
              <li className='mr-3'>Directory</li>
              <li className='mr-3'>Jobs</li>
              <li className='mr-3'>About Us</li>
              <li className='mr-3'>Winners</li>
              <li className='mr-3'>Nominees</li>
              <li className='mr-3'>Blog</li>
            </ul>
          </div>
          <div>
            <ul className='flex flex-row'>
              <li className='mr-3 font-sans mb-20'>Follow Us</li>
              <li className='mr-3'>Twitter</li>
              <li className='mr-3'>Facebook</li>
              <li className='mr-3'>Youtube</li>
              <li className='mr-3'>Instagram</li>
              <li className='mr-3'>LinkedIn</li>
              <li className='mr-3'>Pinterest</li>
              <li className='mr-3'>Reddit</li>
              <li className='mr-3'>WhatsApp</li>
            </ul>
          </div>
        </section>
        <section className='mx-20 text-sm'>
          <ul className='my-5 flex flex-row'>
            <li className='mr-3'>Contact Us</li>
            <li className='mr-3'>F.A.Q</li>
            <li className='mr-3'>Cookies Policy</li>
            <li className='mr-3'>Legal Terms</li>
            <li className='mr-3'>Privacy Policy</li>
            <li className='mr-3'>English</li>
            <li className='mr-3'>Private Cloud Stackscale</li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

