import React, { useState } from 'react'
import SVG from "../../../svg"

export default function Inputs() {
    const [code1, setcode1] = useState(false)
    const [code2, setcode2] = useState(false)
    const [code3, setcode3] = useState(false)
    const [code4, setcode4] = useState(false)
    const [code5, setcode5] = useState(false)
    const [code6, setcode6] = useState(false)
    const [code7, setcode7] = useState(false)
    const [code8, setcode8] = useState(false)
    function codeshow1() {
        if (code1) {
            setcode1(false)
        } else {
            setcode1(true)

        }
    }
    function codeshow2() {
        if (code2) {
            setcode2(false)
        } else {
            setcode2(true)

        }
    }
    function codeshow3() {
        if (code3) {
            setcode3(false)
        } else {
            setcode3(true)

        }
    }
    function codeshow4() {
        if (code4) {
            setcode4(false)
        } else {
            setcode4(true)

        }
    }
    function codeshow5() {
        if (code5) {
            setcode5(false)
        } else {
            setcode5(true)

        }
    }
    function codeshow6() {
        if (code6) {
            setcode6(false)
        } else {
            setcode6(true)

        }
    }
    function codeshow7() {
        if (code7) {
            setcode7(false)
        } else {
            setcode7(true)

        }
    }
    function codeshow8() {
        if (code8) {
            setcode8(false)
        } else {
            setcode8(true)

        }
    }
    
    return (
        <div className="p-4 sm:p-10">
            <h1 className='text-4xl font-bold text-skin-dark' id="simple-inout-field">Input fields</h1>
            <p className='my-4 text-skin-light'>Input fields allows user to enter data in the form of text.</p>

            {/* ---Default Input--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Simple input field</h2>
            <p className='my-4 text-skin-light'>The field have little rounded corners.</p>

            <input
                type="text" name="username" id="usernamer" placeholder="Username"
                className="appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
            />

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;<br />
                        class=&quot;appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent &quot;
                        /&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Input--- */}

            {/* ---Default Input--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5' id="rounded-input-field">Rounded Input fields</h2>
            <p className='my-4 text-skin-light'>The input field have rounded corners.</p>

            <input
                type="text" name="username" id="usernamer" placeholder="Username"
                className="appearance-none border-2 border-gray-300 rounded-full py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
            />

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow2}>
                        {code2 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code2 ? '400px' : '0', display: code2 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;<br />
                        class=&quot;appearance-none border-2 border-gray-300 rounded-full py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                        /&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Input--- */}

            {/* ---Default Input--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5' id="Un-rounded-input-field">Un-Rounded Input fields</h2>
            <p className='my-4 text-skin-light'>The input field does not have rounded corners.</p>

            <input
                type="text" name="username" id="usernamer" placeholder="Username"
                className="appearance-none border-2 border-gray-300 py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-green focus:border-transparent "
            />

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow3}>
                        {code3 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code3 ? '400px' : '0', display: code3 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;<br />
                        class=&quot;appearance-none border-2 border-gray-300 py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-green focus:border-transparent &quot;
                        /&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Input--- */}

            <h1 className="my-5 mt-10 text-skin-dark text-3xl">For darker fields</h1>
            {/* ---Default Input--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5' id="no-border-field">Simple input field</h2>
            <p className='my-4 text-skin-light'>The input field have little rounded corners.</p>

            <input
                type="text" name="username" id="usernamer" placeholder="Username"
                className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
            />

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow4}>
                        {code4 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code4 ? '400px' : '0', display: code4 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;<br />
                        class=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent &quot;
                        /&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>

            {/* ---Default Input--- */}

            {/* ---Default Input--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5' id="no-border-rounded">Rounded Input fields</h2>
            <p className='my-4 text-skin-light'>The input field have rounded corners.</p>

            <input
                type="text" name="username" id="usernamer" placeholder="Username"
                className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
            />

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow5}>
                        {code5 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code5 ? '400px' : '0', display: code5 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;<br />
                        class=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-full py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent &quot;
                        /&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Default Input--- */}

            {/* ---Default Input--- */}
            <h2 className='text-2xl font-medium text-skin-dark my-5' id="no-border-unrounded">Un-Rounded Input fields</h2>
            <p className='my-4 text-skin-light'>The input field does not have rounded corners.</p>

            <input
                type="text" name="username" id="usernamer" placeholder="Username"
                className="bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-green focus:border-transparent "
            />

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow6}>
                        {code6 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code6 ? '400px' : '0', display: code6 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;input
                        type=&quot;text&quot; name=&quot;username&quot; id=&quot;usernamer&quot; placeholder=&quot;Username&quot;<br />
                        class=&quot;bg-cl-secondary placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 py-1 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-green focus:border-transparent &quot;
                        /&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>


            {/* ---Default Input--- */}

            {/* ---Input Cards--- */}
            <h1 className="my-5 mt-10 text-skin-dark text-3xl">Input Cards</h1>

            <h2 className='text-2xl font-medium text-skin-dark my-5' id="username-card">Username simple card</h2>
            <p className='my-4 text-skin-light'>The card has simple input field.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="grid w-96 shadow-lg py-10 px-4 border-[1px] text-skin-dark border-gray-300 rounded-md">
                <span>Username</span>
                <input
                    type="text" name="username" id="username" placeholder="enter your username"
                    className="appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
                />
            </div>
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow7}>
                        {code7 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code7 ? '400px' : '0', display: code7 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot;grid w-96 shadow-lg py-10 px-4 border-[1px] border-gray-300 rounded-md&quot;&gt;<br />
                            &lt;span&gt;<br />Username&lt;/span&gt;<br />
                            &lt;input<br />
                                type=&quot;text&quot; name=&quot;username&quot; id=&quot;username&quot; placeholder=&quot;enter your username&quot;<br />
                                class=&quot;appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent &quot;
                            /&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>



            {/* ---Input Cards--- */}

            {/* ---Input Cards--- */}

            <h2 className='text-2xl font-medium text-skin-dark my-5' id="password-card">Password input card</h2>
            <p className='my-4 text-skin-light'>The card has simple input field.</p>

            <div className='overflow-auto pb-10 sm:pb-0'>
            <div className="grid w-96 shadow-lg py-10 text-skin-dark px-4 border-[1px] border-gray-300 rounded-md">
                <span>Password</span>
                <input
                    type="password" name="password" id="password" placeholder="enter your password"
                    className="appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent "
                />
            </div>
            </div>

            <div className=' w-full bg-cl-blue-dark rounded-xl my-3'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow8}>
                        {code8 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ maxHeight: code8 ? '400px' : '0', display: code8 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 pb-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        &lt;div class=&quot;grid w-96 shadow-lg py-10 px-4 border-[1px] border-gray-300 rounded-md&quot;&gt;<br />
                            &lt;span&gt;<br />Password&lt;/span&gt;<br />
                            &lt;input<br />
                                type=&quot;password&quot; name=&quot;password&quot; id=&quot;password&quot; placeholder=&quot;enter your password&quot;<br />
                                class=&quot;appearance-none border-2 border-gray-300 rounded-lg py-1 px-5 focus:outline-none focus:ring-2 focus:ring-cl-blue focus:border-transparent &quot;
                            /&gt;<br />
                        &lt;/div&gt;<br />

                    </code>
                    </pre>
                </div>
            </div>



            {/* ---Input Cards--- */}
        </div>
    )
}
