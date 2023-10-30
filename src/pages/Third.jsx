import React, {useEffect, useState} from 'react';
import {Table} from "./First.style";

const Third = ({fields}) => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setData(data?.products))
            .catch(e => console.log(e));
    }, []);
    return (
        <Table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {data?.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>$ {item.price}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default Third;