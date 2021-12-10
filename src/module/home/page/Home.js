import React, { useState, useEffect } from 'react'
import dummyData from '../../../data/data.json'

const Home = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        setData(dummyData)
    }, [])

    return (
        <div>
            <table class="table-auto">
                <thead>
                    <tr>
                        {data?.location?.map((_data) => {
                            return (
                                <td key={_data.id}>{_data.name}</td>
                            )
                        })}
                        <td>Category</td>
                        <td>Product</td>
                        <td>Total Stock</td>
                        <td>Total Percent %</td>
                        <td>Total Order</td>
                    </tr>
                </thead>
                <tbody>
                    {data?.proformaItem?.map((_data) => {
                        let productStock = JSON.parse(_data.product_stock)
                        return (
                            <tr>
                                {data?.location?.map((location) => {
                                    let label = productStock.find((product) => { 
                                        if(product[location.id]){
                                            return product[location.id]
                                        }
                                    })
                                    let value = label ? label[location.id] : 0
                                    return (
                                        <td>{value}</td>
                                    )
                                })}
                                <td>{_data.categoryDescription}</td>
                                <td>{_data.productDescription}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
