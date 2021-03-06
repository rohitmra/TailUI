import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/documentation/getting-started";



export default function GettingStarted() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                <title>Getting Started | TailUI</title>
                <meta name="description" content="We have made TailUI because, there are very less number of web UI component available for free, either they are paid or the quality is not that good. We made TailUI so we can provide free quality components." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
                <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={1}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <Content />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                        {title:"Why TailUI", code:"Why-TailUI"},
                        {title:"How to use?", code:"How-to-use"},
                        {title:"Install and setup Tailwind css", code:"Install"},
                        {title:"Use CDN", code:"Use-CDN"},
                        {title:"Watch this video", code:"Watch-this-video"},
                        {title:"Use TailUI Components", code:"Use-TailUI-Components"},
                        {title:"For more", code:"For-more"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
