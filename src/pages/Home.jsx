import React, {useState, Suspense, useEffect} from 'react';
import {Route, Routes, useParams} from "react-router";
import {tabs} from '../data/data.js';
import {Tab, Main, Header} from "./Home.style";

const First = React.lazy(() => import('./First.jsx'));
const Second = React.lazy(() => import('./Second.jsx'));
const Third = React.lazy(() => import('./Third.jsx'));


const Home = () => {
    const {id} = useParams();
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    useEffect(() => {
        setActiveTabIndex(0);
    }, []);


    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Header>
                    {tabs.map((route, index) => (
                        <Tab
                            key={route.path}
                            isActive={activeTabIndex === index}
                            onClick={() => handleTabClick(index)}
                            to={`${route.path}/${route.id}`}
                        >
                            {route.title}
                        </Tab>
                    ))}
                </Header>
                <Main>
                    <Routes>
                        <Route index path="/first/:id" element={<First/>}></Route>
                        <Route path="/second/:id" element={<Second/>}></Route>
                        <Route path="/third/:id" element={<Third/>}></Route>
                    </Routes>
                    Home page
                </Main>
            </Suspense>
        </>

    )
};

export default Home;