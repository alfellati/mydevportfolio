import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '@/components/Layout';
import Link from 'next/link';
import {LinkArrow} from '../components/Icons';
import profilePic from "../../public/images/profile/khalifa-art-3-transparent.png";
import AnimatedText from '../components/AnimatedText';
import HireMe from '../components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full main-h-screen'>
        <Layout className='pt-0 flex-box'>
          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Khalifa MBA" className='w-full h-auto hover:' />
            </div>
            <div className='w-1/2 flex-col items-center self-center'>
              <AnimatedText text="If You Can Imagine It, I can Build It." className=''/>
              <p className='my-4 text-base font-medium'>
                As a skilled STAR (SDE, TPM, Architect, and Researcher), I am dedicated to building innovative applications from raw ideas. 
                Explore my latest projects, articles and blogs, showcasing my expertise in a plethora of skills ranging from Software Architecture,
                AI/ML development, R&D, Web3 development to Developer toolings, API & SDK development, etc..
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/dummy.pdf" target={"_blank"}
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                "
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>

                </Link>
                <Link href="mailto:jbashir52@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline"
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="Khalifa MBA" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
