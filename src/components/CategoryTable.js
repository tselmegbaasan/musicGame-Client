import React, { useEffect, useState } from 'react'
import LyricsDataService from '../services/LyricsDataService'
import Table from './Table'

const CategoryTable = () => {
    const [categories, setCategories] = useState([]);
    const [mounted, setMounted] = useState(false);

    const loadCategories = () => {
        LyricsDataService.getCategories()
            .then(res => res.data)
            .then(data => {
                let list = []
                data.forEach(row => {
                    console.log(row.category)
                    list.push([row.category])
                })
                setCategories(list)
                setMounted(true)
            })
            .catch(err => console.log(err.message))
    }

    console.log(categories)

    useEffect(() => {
        if (!mounted) {
            loadCategories()
        }
    }, mounted)

    return (
        <div>
            <Table
                name="categories"
                columns={['Category name']}
                content={categories}
            />
        </div>
    )
}

export default CategoryTable;