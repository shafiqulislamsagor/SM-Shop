
import './components.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactiveButton from 'reactive-button';

const Banner = () => {
    const [state, setState] = useState('idle');
    const navigate = useNavigate()

    const onClickHandler = () => {
        setState('loading');
        setTimeout(() => {
            setState('success');
            navigate('/')
        }, 2000);
    };
    return (
        <section className="w-full banner_img">
            <div className='bg-black bg-opacity-40 text-white'>
                <div className="flex justify-center md:justify-end w-[95%] py-10 md:py-40 md:w-4/5 mx-auto">
                    <div className="">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
                            MODERN FASHION BOUTIQUE THEME
                        </h1>
                        <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">
                            Elevate your online fashion shop with its trendy design, and robust WooCommerce – Elementor integration..
                        </p>
                        <div className='flex justify-start'>
                            <ReactiveButton
                                buttonState={state}
                                onClick={onClickHandler}
                                idleText={'EXPLORE PRODUCT PAGE'}


                                type={'button'}
                                className={'class1 class2 dark'}
                                style={{
                                    borderRadius: '5px',
                                }}
                                outline={true}
                                color={'light'}
                                shadow={true}
                                rounded={true}
                                size={'normal'}
                                block={false}
                                messageDuration={2000}
                                disabled={false}
                                buttonRef={null}
                                width={null}
                                height={null}
                                animation={true}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;